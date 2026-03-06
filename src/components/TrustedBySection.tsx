import { useTranslation } from "react-i18next";
import sapLogo from "@/assets/logos/SAP_2011_logo.png";
import iciLogo from "@/assets/logos/ICI_Logo.png";
import idmcLogo from "@/assets/logos/IDMC-logo.png";
import focusLogo from "@/assets/logos/focus_logo.jpg";

const logos = [
  { src: sapLogo, alt: "SAP" },
  { src: iciLogo, alt: "ICI" },
  { src: idmcLogo, alt: "IDMC" },
  { src: focusLogo, alt: "Focus" },
];

export function TrustedBySection() {
  const { t } = useTranslation();

  return (
    <section className="py-12 bg-[#f0ede5] border-t border-[#e5e2d9]">
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
              <div key={logo.alt} className="flex items-center justify-center">
                <img
                  src={logo.src}
                  alt={logo.alt}
                  className="h-12 md:h-16 w-auto object-contain opacity-60 hover:opacity-90 transition-opacity duration-300 grayscale hover:grayscale-0"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
