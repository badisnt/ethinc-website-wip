import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useTranslation } from "react-i18next";

interface PolicyDialogProps {
  trigger: React.ReactNode;
  type: "terms" | "privacy" | "cookies";
}

export const PolicyDialog = ({ trigger, type }: PolicyDialogProps) => {
  const { t } = useTranslation();

  const getContent = () => {
    switch (type) {
      case "terms":
        return {
          title: t("policies.terms.title"),
          content: (
            <div className="space-y-4 text-sm text-muted-foreground">
              <p>{t("policies.terms.intro")}</p>
              
              <div>
                <h3 className="font-semibold text-foreground mb-2">1. {t("policies.terms.section1.title")}</h3>
                <p>{t("policies.terms.section1.content")}</p>
              </div>

              <div>
                <h3 className="font-semibold text-foreground mb-2">2. {t("policies.terms.section2.title")}</h3>
                <p>{t("policies.terms.section2.content")}</p>
              </div>

              <div>
                <h3 className="font-semibold text-foreground mb-2">3. {t("policies.terms.section3.title")}</h3>
                <p>{t("policies.terms.section3.content")}</p>
              </div>

              <p className="text-xs italic mt-6">{t("policies.lastUpdated")}: {t("policies.terms.date")}</p>
            </div>
          ),
        };
      case "privacy":
        return {
          title: t("policies.privacy.title"),
          content: (
            <div className="space-y-4 text-sm text-muted-foreground">
              <p>{t("policies.privacy.intro")}</p>
              
              <div>
                <h3 className="font-semibold text-foreground mb-2">1. {t("policies.privacy.section1.title")}</h3>
                <p>{t("policies.privacy.section1.content")}</p>
              </div>

              <div>
                <h3 className="font-semibold text-foreground mb-2">2. {t("policies.privacy.section2.title")}</h3>
                <p>{t("policies.privacy.section2.content")}</p>
              </div>

              <div>
                <h3 className="font-semibold text-foreground mb-2">3. {t("policies.privacy.section3.title")}</h3>
                <p>{t("policies.privacy.section3.content")}</p>
              </div>

              <p className="text-xs italic mt-6">{t("policies.lastUpdated")}: {t("policies.privacy.date")}</p>
            </div>
          ),
        };
      case "cookies":
        return {
          title: t("policies.cookies.title"),
          content: (
            <div className="space-y-4 text-sm text-muted-foreground">
              <p className="text-foreground font-medium">{t("policies.cookies.noCookies")}</p>
              <p>{t("policies.cookies.content")}</p>
              <p className="text-xs italic mt-6">{t("policies.lastUpdated")}: {t("policies.cookies.date")}</p>
            </div>
          ),
        };
    }
  };

  const { title, content } = getContent();

  return (
    <Dialog>
      <DialogTrigger asChild>
        {trigger}
      </DialogTrigger>
      <DialogContent className="max-w-2xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl">{title}</DialogTitle>
          <DialogDescription className="sr-only">
            {title}
          </DialogDescription>
        </DialogHeader>
        <div className="mt-4">
          {content}
        </div>
      </DialogContent>
    </Dialog>
  );
};

