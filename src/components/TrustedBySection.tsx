import { useTranslation } from "react-i18next";
import sapLogo from "@/assets/logos/SAP_2011_logo.png";
import iciLogo from "@/assets/logos/ICI_Logo.png";
import idmcLogo from "@/assets/logos/IDMC-logo.png";
import focusLogo from "@/assets/logos/focus_logo.jpg";

const logos = [
  { src: sapLogo, alt: "SAP", href: "https://www.sap.com" },
  { src: iciLogo, alt: "ICI", href: "https://www.cocoainitiative.org" },
  { src: idmcLogo, alt: "IDMC", href: "https://www.internal-displacement.org" },
  { src: focusLogo, alt: "Focus", href: "https://focus-corporation.com" },
];

export function TrustedBySection() {
  const { t } = useTranslation();

  return (
    <section className="py-12 bg-[#f5f3ee] border-t border-gray-200/60">
      <div className="flex justify-center px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center gap-6 md:gap-12">
          <p
            className="text-[#8a8a9e] uppercase tracking-[0.2em] shrink-0 whitespace-nowrap"
            style={{ fontSize: "12px", fontWeight: 500 }}
          >
            {t("trustedBy", "Trusted by")}
          </p>
          <div className="flex flex-wrap items-center justify-center gap-10 md:gap-14">
            {logos.map((logo) => (
              <a
                key={logo.alt}
                href={logo.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center"
              >
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="h-12 md:h-16 w-auto object-contain opacity-60 hover:opacity-90 transition-opacity duration-300 grayscale hover:grayscale-0"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
