import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { useTranslation } from "react-i18next";

interface ServiceDialogProps {
  trigger: React.ReactNode;
  serviceKey: string;
}

export const ServiceDialog = ({ trigger, serviceKey }: ServiceDialogProps) => {
  const { t } = useTranslation();

  const title = t(`services.main.${serviceKey}.title`);
  const description = t(`services.main.${serviceKey}.description`);
  const useCases = t(`services.main.${serviceKey}.useCases`, { returnObjects: true }) as string[];
  const projects = t(`services.main.${serviceKey}.projects`, { returnObjects: true }) as string[];

  return (
    <Dialog>
      <DialogTrigger asChild>
        {trigger}
      </DialogTrigger>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto scrollbar-thin scrollbar-thumb-accent scrollbar-track-muted">
        <DialogHeader>
          <DialogTitle className="text-3xl font-bold mb-4">{title}</DialogTitle>
        </DialogHeader>

        {/* Description */}
        <div className="mb-8">
          <p className="text-muted-foreground leading-relaxed text-base">{description}</p>
        </div>

        {/* Use Cases and Projects Side by Side */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Use Cases */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">{t('services.dialog.useCases')}</h3>
            <ul className="space-y-3">
              {useCases.map((useCase, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-accent mt-1 text-lg">•</span>
                  <span className="text-muted-foreground leading-relaxed">{useCase}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Previous Projects */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">{t('services.dialog.projects')}</h3>
            <div className="space-y-3">
              {projects.map((project, index) => (
                <div key={index} className="bg-muted/30 p-3 rounded-lg border border-border/50">
                  <p className="text-sm leading-relaxed">{project}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

