import { Localized } from "@/lib/i18n";

export type NavLink = {
  href: string;
  label: string;
};

export const navLinks: Localized<NavLink[]> = {
  en: [
    { href: "/capital-feasibility", label: "Capital & Feasibility" },
    { href: "/technical-due-diligence", label: "Technical Due Diligence" },
    { href: "/corporate-operations", label: "Corporate Operations" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ],
  ar: [
    { href: "/capital-feasibility", label: "التمويل ودراسات الجدوى" },
    { href: "/technical-due-diligence", label: "العناية التقنية الواجبة" },
    { href: "/corporate-operations", label: "العمليات المؤسسية" },
    { href: "/about", label: "من نحن" },
    { href: "/contact", label: "تواصل معنا" },
  ],
};

export const brand: Localized<{ name: string; tagline: string }> = {
  en: {
    name: "Crisp Yield Partners",
    tagline: "Construction Capital Advisory",
  },
  ar: {
    name: "كرِسپ ييلد بارتنرز",
    tagline: "استشارات رأس المال في قطاع الإنشاءات",
  },
};

export const headerCta: Localized<string> = {
  en: "Request a Red Flag Audit",
  ar: "اطلب تدقيق الرايات الحمراء",
};

export const footerContent: Localized<{
  blurb: string;
  navHeading: string;
  contactHeading: string;
  email: string;
  phone: string;
  placeholderNote: string;
  rights: string;
  langLabel: string;
}> = {
  en: {
    blurb:
      "Crisp Yield Partners mitigates capital risk and maximizes operational yield for asset owners, investors, and industrial suppliers in construction.",
    navHeading: "Advisory",
    contactHeading: "Contact",
    email: "contact@crispyieldpartners.com",
    phone: "+962 XX XXX XXXX",
    placeholderNote: "(placeholder — replace before launch)",
    rights: `© ${new Date().getFullYear()} Crisp Yield Partners. All rights reserved.`,
    langLabel: "Language",
  },
  ar: {
    blurb:
      "تعمل كرِسپ ييلد بارتنرز على تخفيف مخاطر رأس المال وتعظيم العائد التشغيلي لملاك الأصول والمستثمرين والموردين الصناعيين في قطاع الإنشاءات.",
    navHeading: "خدماتنا",
    contactHeading: "تواصل معنا",
    email: "contact@crispyieldpartners.com",
    phone: "+962 XX XXX XXXX",
    placeholderNote: "(بيانات مؤقتة — يجب تحديثها قبل الإطلاق)",
    rights: `© ${new Date().getFullYear()} كرِسپ ييلد بارتنرز. جميع الحقوق محفوظة.`,
    langLabel: "اللغة",
  },
};
