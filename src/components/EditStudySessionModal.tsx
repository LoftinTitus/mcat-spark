import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { updateStudySession, deleteStudySession } from "@/lib/analytics";
import { Calendar, Trash2 } from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";

interface StudySession {
  id: string;
  topic: string;
  section: string;
  date: string;
  time: string;
  duration: string;
}

interface EditStudySessionModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSessionUpdated: () => void;
  session: StudySession | null;
}

export function EditStudySessionModal({
  open,
  onOpenChange,
  onSessionUpdated,
  session,
}: EditStudySessionModalProps) {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [formData, setFormData] = useState({
    topic: "",
    section: "bio",
    date: "",
    time: "",
    duration: "",
    notes: "",
  });

  // Populate form when session changes
  useEffect(() => {
    if (session && open) {
      setFormData({
        topic: session.topic || "",
        section: session.section || "bio",
        date: session.date || "",
        time: session.time || "",
        duration: session.duration?.replace(/\D/g, "") || "",
        notes: "",
      });
    }
  }, [session, open]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!session) return;

    setLoading(true);

    try {
      // Validate required fields
      if (!formData.topic || !formData.date) {
        toast({
          title: "Missing Information",
          description: "Please fill in the topic and date fields.",
          variant: "destructive",
        });
        setLoading(false);
        return;
      }

      // Update the study session
      const result = await updateStudySession(session.id, {
        topic: formData.topic,
        section: formData.section,
        scheduled_date: formData.date,
        scheduled_time: formData.time || "00:00",
        duration: parseInt(formData.duration) || 60,
      });

      if (result) {
        toast({
          title: "Session Updated",
          description: "Your study session has been updated successfully.",
        });

        // Close modal and refresh
        onOpenChange(false);
        onSessionUpdated();
      } else {
        throw new Error("Failed to update session");
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to update study session. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async () => {
    if (!session) return;

    setLoading(true);

    try {
      const result = await deleteStudySession(session.id);

      if (result) {
        toast({
          title: "Session Deleted",
          description: "Your study session has been deleted.",
        });

        // Close dialogs and refresh
        setShowDeleteDialog(false);
        onOpenChange(false);
        onSessionUpdated();
      } else {
        throw new Error("Failed to delete session");
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to delete study session. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  if (!session) return null;

  return (
    <>
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="sm:max-w-[500px]">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <Calendar className="h-5 w-5" />
              Edit Study Session
            </DialogTitle>
            <DialogDescription>
              Update your study session details below.
            </DialogDescription>
          </DialogHeader>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="topic">Topic *</Label>
              <Input
                id="topic"
                placeholder="e.g., Cell Biology, Thermodynamics"
                value={formData.topic}
                onChange={(e) =>
                  setFormData({ ...formData, topic: e.target.value })
                }
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="section">Section</Label>
              <Select
                value={formData.section}
                onValueChange={(value) =>
                  setFormData({ ...formData, section: value })
                }
              >
                <SelectTrigger id="section">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="bio">Bio/Biochem</SelectItem>
                  <SelectItem value="chem">Chem/Physics</SelectItem>
                  <SelectItem value="psych">Psych/Soc</SelectItem>
                  <SelectItem value="all">All Sections</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="date">Date *</Label>
                <Input
                  id="date"
                  type="date"
                  value={formData.date}
                  onChange={(e) =>
                    setFormData({ ...formData, date: e.target.value })
                  }
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="time">Time</Label>
                <Input
                  id="time"
                  type="time"
                  value={formData.time}
                  onChange={(e) =>
                    setFormData({ ...formData, time: e.target.value })
                  }
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="duration">Duration (minutes)</Label>
              <Input
                id="duration"
                type="number"
                placeholder="60"
                min="15"
                step="15"
                value={formData.duration}
                onChange={(e) =>
                  setFormData({ ...formData, duration: e.target.value })
                }
              />
            </div>

            <DialogFooter className="gap-2 sm:gap-0">
              <Button
                type="button"
                variant="destructive"
                onClick={() => setShowDeleteDialog(true)}
                className="mr-auto"
              >
                <Trash2 className="h-4 w-4 mr-2" />
                Delete
              </Button>
              <Button
                type="button"
                variant="outline"
                onClick={() => onOpenChange(false)}
                disabled={loading}
              >
                Cancel
              </Button>
              <Button type="submit" disabled={loading}>
                {loading ? "Saving..." : "Save Changes"}
              </Button>
            </DialogFooter>
          </form>
        </DialogContent>
      </Dialog>

      {/* Delete Confirmation Dialog */}
      <AlertDialog open={showDeleteDialog} onOpenChange={setShowDeleteDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Delete Study Session?</AlertDialogTitle>
            <AlertDialogDescription>
              Are you sure you want to delete this study session? This action
              cannot be undone.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel disabled={loading}>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={handleDelete}
              disabled={loading}
              className="bg-destructive text-destructive-foreground hover:bg-destructive/90"
            >
              {loading ? "Deleting..." : "Delete"}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
