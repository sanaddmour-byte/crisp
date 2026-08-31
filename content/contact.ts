import { Localized } from "@/lib/i18n";

export type ContactContent = {
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
  };
  form: {
    heading: string;
    nameLabel: string;
    namePlaceholder: string;
    companyLabel: string;
    companyPlaceholder: string;
    emailLabel: string;
    emailPlaceholder: string;
    phoneLabel: string;
    phoneOptional: string;
    phonePlaceholder: string;
    inquiryLabel: string;
    inquiryOptions: { value: string; label: string }[];
    messageLabel: string;
    messagePlaceholder: string;
    submitLabel: string;
    submittingLabel: string;
    successMessage: string;
    errorMessage: string;
    requiredNote: string;
  };
  directContact: {
    heading: string;
    subheading: string;
    emailLabel: string;
    email: string;
    phoneLabel: string;
    phone: string;
    placeholderNote: string;
  };
};

export const contactContent: Localized<ContactContent> = {
  en: {
    hero: {
      eyebrow: "Contact",
      title: "Tell us where the exposure sits.",
      subtitle:
        "Whether it's a project, an asset, or an operation, the fastest way to get an independent read is to tell us what you're looking at.",
    },
    form: {
      heading: "Send an inquiry",
      nameLabel: "Name",
      namePlaceholder: "Your full name",
      companyLabel: "Company",
      companyPlaceholder: "Your company",
      emailLabel: "Email",
      emailPlaceholder: "you@company.com",
      phoneLabel: "Phone",
      phoneOptional: "(optional)",
      phonePlaceholder: "+962 XX XXX XXXX",
      inquiryLabel: "Inquiry Type",
      inquiryOptions: [
        { value: "capital-feasibility", label: "Capital & Feasibility" },
        { value: "technical-due-diligence", label: "Technical Due Diligence" },
        { value: "corporate-operations", label: "Corporate Operations" },
        { value: "other", label: "Other" },
      ],
      messageLabel: "Message",
      messagePlaceholder: "Tell us briefly about the project, asset, or operation in question.",
      submitLabel: "Send Inquiry",
      submittingLabel: "Sending…",
      successMessage:
        "Thank you — your inquiry has been received. We'll be in touch shortly.",
      errorMessage:
        "Something went wrong sending your inquiry. Please try again or email us directly.",
      requiredNote: "Required fields",
    },
    directContact: {
      heading: "Direct Contact",
      subheading: "Prefer to reach out directly?",
      emailLabel: "Email",
      email: "contact@crispyieldpartners.com",
      phoneLabel: "Phone",
      phone: "+962 XX XXX XXXX",
      placeholderNote: "Placeholder — replace with live details before launch.",
    },
  },
  ar: {
    hero: {
      eyebrow: "تواصل معنا",
      title: "أخبرنا أين يكمن التعرض.",
      subtitle:
        "سواء كان الأمر متعلقًا بمشروع أو أصل أو عملية تشغيلية، فإن أسرع طريقة للحصول على رأي مستقل هي أن تخبرنا بما تنظر فيه.",
    },
    form: {
      heading: "أرسل استفسارًا",
      nameLabel: "الاسم",
      namePlaceholder: "اسمك الكامل",
      companyLabel: "الشركة",
      companyPlaceholder: "اسم شركتك",
      emailLabel: "البريد الإلكتروني",
      emailPlaceholder: "you@company.com",
      phoneLabel: "الهاتف",
      phoneOptional: "(اختياري)",
      phonePlaceholder: "+962 XX XXX XXXX",
      inquiryLabel: "نوع الاستفسار",
      inquiryOptions: [
        { value: "capital-feasibility", label: "التمويل ودراسات الجدوى" },
        { value: "technical-due-diligence", label: "العناية التقنية الواجبة" },
        { value: "corporate-operations", label: "العمليات المؤسسية" },
        { value: "other", label: "أخرى" },
      ],
      messageLabel: "الرسالة",
      messagePlaceholder: "أخبرنا باختصار عن المشروع أو الأصل أو العملية المعنية.",
      submitLabel: "إرسال الاستفسار",
      submittingLabel: "جارٍ الإرسال…",
      successMessage: "شكرًا لك — تم استلام استفسارك. سنتواصل معك قريبًا.",
      errorMessage:
        "حدث خطأ أثناء إرسال استفسارك. يرجى المحاولة مرة أخرى أو مراسلتنا مباشرة عبر البريد الإلكتروني.",
      requiredNote: "الحقول المطلوبة",
    },
    directContact: {
      heading: "التواصل المباشر",
      subheading: "تفضّل التواصل المباشر؟",
      emailLabel: "البريد الإلكتروني",
      email: "contact@crispyieldpartners.com",
      phoneLabel: "الهاتف",
      phone: "+962 XX XXX XXXX",
      placeholderNote: "بيانات مؤقتة — يجب استبدالها ببيانات فعلية قبل الإطلاق.",
    },
  },
};
