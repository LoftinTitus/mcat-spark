import { useState } from "react";
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
import { addStudySession } from "@/lib/analytics";
import { Calendar, Clock } from "lucide-react";

interface AddStudySessionModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSessionAdded: () => void;
}

export function AddStudySessionModal({
  open,
  onOpenChange,
  onSessionAdded,
}: AddStudySessionModalProps) {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    topic: "",
    section: "bio",
    date: "",
    time: "",
    duration: "",
    notes: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
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

      // Add the study session
      const result = await addStudySession(
        formData.topic,
        formData.section,
        formData.date,
        formData.time || "00:00",
        parseInt(formData.duration) || 60,
        formData.notes
      );

      if (result) {
        toast({
          title: "Session Added",
          description: "Your study session has been added to the calendar.",
        });

        // Reset form
        setFormData({
          topic: "",
          section: "bio",
          date: "",
          time: "",
          duration: "",
          notes: "",
        });

        // Close modal and refresh
        onOpenChange(false);
        onSessionAdded();
      } else {
        throw new Error("Failed to add session");
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to add study session. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const sections = [
    { value: "bio", label: "Bio/Biochem" },
    { value: "chem", label: "Chem/Phys" },
    { value: "psych", label: "Psych/Soc" },
    { value: "cars", label: "CARS" },
    { value: "all", label: "All Sections" },
  ];

  const durations = [
    { value: "30", label: "30 minutes" },
    { value: "45", label: "45 minutes" },
    { value: "60", label: "1 hour" },
    { value: "90", label: "1.5 hours" },
    { value: "120", label: "2 hours" },
    { value: "180", label: "3 hours" },
    { value: "240", label: "4 hours" },
    { value: "360", label: "6 hours (Full-Length)" },
  ];

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Add Study Session</DialogTitle>
          <DialogDescription>
            Schedule a study session to help you stay organized and on track.
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Topic */}
          <div className="space-y-2">
            <Label htmlFor="topic">Topic *</Label>
            <Input
              id="topic"
              placeholder="e.g., Enzyme Kinetics Review"
              value={formData.topic}
              onChange={(e) => setFormData({ ...formData, topic: e.target.value })}
              required
            />
          </div>

          {/* Section */}
          <div className="space-y-2">
            <Label htmlFor="section">Section</Label>
            <Select
              value={formData.section}
              onValueChange={(value) => setFormData({ ...formData, section: value })}
            >
              <SelectTrigger>
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                {sections.map((section) => (
                  <SelectItem key={section.value} value={section.value}>
                    {section.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Date and Time Row */}
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="date" className="flex items-center gap-1">
                <Calendar className="h-3 w-3" />
                Date *
              </Label>
              <Input
                id="date"
                type="date"
                value={formData.date}
                onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                min={new Date().toISOString().split('T')[0]}
                required
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="time" className="flex items-center gap-1">
                <Clock className="h-3 w-3" />
                Time
              </Label>
              <Input
                id="time"
                type="time"
                value={formData.time}
                onChange={(e) => setFormData({ ...formData, time: e.target.value })}
              />
            </div>
          </div>

          {/* Duration */}
          <div className="space-y-2">
            <Label htmlFor="duration">Duration</Label>
            <Select
              value={formData.duration}
              onValueChange={(value) => setFormData({ ...formData, duration: value })}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select duration" />
              </SelectTrigger>
              <SelectContent>
                {durations.map((duration) => (
                  <SelectItem key={duration.value} value={duration.value}>
                    {duration.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Notes */}
          <div className="space-y-2">
            <Label htmlFor="notes">Notes (Optional)</Label>
            <Textarea
              id="notes"
              placeholder="Add any additional notes or study goals..."
              value={formData.notes}
              onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
              rows={3}
            />
          </div>

          <DialogFooter>
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
              disabled={loading}
            >
              Cancel
            </Button>
            <Button type="submit" disabled={loading}>
              {loading ? "Adding..." : "Add Session"}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
