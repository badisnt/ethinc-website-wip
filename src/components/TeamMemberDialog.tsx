import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Linkedin } from "lucide-react";
import { Button } from "./ui/button";
import { useTranslation } from "react-i18next";

interface TeamMemberDialogProps {
  trigger: React.ReactNode;
  name: string;
  role: string;
  photo: string;
  bio: string;
  linkedinUrl: string;
  experience: string[];
  skills: string[];
}

export const TeamMemberDialog = ({
  trigger,
  name,
  role,
  photo,
  bio,
  linkedinUrl,
  experience,
  skills,
}: TeamMemberDialogProps) => {
  const { t } = useTranslation();

  return (
    <Dialog>
      <DialogTrigger asChild>
        {trigger}
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto scrollbar-thin scrollbar-thumb-accent scrollbar-track-muted">
        <DialogHeader>
          <DialogTitle className="sr-only">{name}</DialogTitle>
          <DialogDescription className="sr-only">
            {role}
          </DialogDescription>
        </DialogHeader>
        
        {/* Header with photo and name */}
        <div className="flex items-start gap-8 mb-8">
          <div className="w-40 h-40 rounded-full overflow-hidden flex-shrink-0 border-4 border-accent shadow-xl">
            <img src={photo} alt={name} className="w-full h-full object-cover" />
          </div>
          <div className="flex-1">
            <h2 className="text-4xl font-bold mb-2">{name}</h2>
            <p className="text-accent text-xl font-medium mb-4">{role}</p>
            <Button variant="outline" size="default" asChild>
              <a 
                href={linkedinUrl} 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Linkedin className="w-5 h-5" />
                View LinkedIn Profile
              </a>
            </Button>
          </div>
        </div>

        {/* Bio */}
        <div className="mb-8">
          <h3 className="text-2xl font-semibold mb-4">{t('about.dialog.bio')}</h3>
          <p className="text-muted-foreground leading-relaxed text-base">{bio}</p>
        </div>

        {/* Experience and Skills Side by Side */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Experience */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">{t('about.dialog.experience')}</h3>
            <ul className="space-y-3">
              {experience.map((exp, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-accent mt-1 text-lg">•</span>
                  <span className="text-muted-foreground leading-relaxed">{exp}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Skills */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">{t('about.dialog.skills')}</h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <Badge key={index} variant="secondary" className="text-sm py-1.5 px-3">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

