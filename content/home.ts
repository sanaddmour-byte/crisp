import { Localized } from "@/lib/i18n";

export type Vertical = {
  tag: string;
  title: string;
  description: string;
  href: string;
  linkLabel: string;
};

export type HomeContent = {
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  verticalsHeading: {
    eyebrow: string;
    title: string;
    subtitle: string;
  };
  verticals: Vertical[];
  howWeWork: {
    eyebrow: string;
    title: string;
    subtitle: string;
    steps: { title: string; description: string }[];
    disclaimer: string;
  };
  founder: {
    eyebrow: string;
    title: string;
    body: string;
    credentials: string[];
    cta: string;
  };
  finalCta: {
    title: string;
    subtitle: string;
    cta: string;
  };
};

export const homeContent: Localized<HomeContent> = {
  en: {
    hero: {
      eyebrow: "Construction Capital Advisory",
      title: "We mitigate capital risk and maximize operational yield in construction.",
      subtitle:
        "Crisp Yield Partners advises asset owners, investors, and industrial suppliers on the decisions that determine whether a construction project protects capital — or bleeds it. We sell decision quality and execution assurance, not engineering hours.",
      ctaPrimary: "Request a Red Flag Audit",
      ctaSecondary: "Explore our verticals",
    },
    verticalsHeading: {
      eyebrow: "What We Do",
      title: "Three disciplines, one mandate: protect the capital.",
      subtitle:
        "Every engagement traces back to the same question — is this asset, project, or operation performing to the standard the capital behind it deserves?",
    },
    verticals: [
      {
        tag: "01",
        title: "Capital & Feasibility",
        description:
          "Financial modeling, CAPEX/OPEX structuring, and market gap analysis for investors and family offices evaluating construction assets before capital is committed.",
        href: "/capital-feasibility",
        linkLabel: "View the vertical",
      },
      {
        tag: "02",
        title: "Technical Due Diligence",
        description:
          "Blueprint and spec review, value engineering, and contractor auditing for developers and owners who need an independent, technically fluent second opinion.",
        href: "/technical-due-diligence",
        linkLabel: "View the vertical",
      },
      {
        tag: "03",
        title: "Corporate Operations",
        description:
          "Org structure design, business development roadmaps, and heavy-materials turnarounds for contractors and suppliers under operational or margin pressure.",
        href: "/corporate-operations",
        linkLabel: "View the vertical",
      },
    ],
    howWeWork: {
      eyebrow: "How We Work",
      title: "It starts with a fast, focused diagnostic — not a proposal deck.",
      subtitle:
        "Most advisory relationships begin with a Red Flag Audit: a rapid, tightly scoped review of an existing project plan or operational structure. It tells you, in days rather than months, where the capital or margin exposure actually sits.",
      steps: [
        {
          title: "1. Red Flag Audit",
          description:
            "A focused 48–72 hour review of your project plan, spec set, or operating structure, surfacing the risks and gaps that matter most.",
        },
        {
          title: "2. Findings Briefing",
          description:
            "A direct, plain-language readout of what we found — no filler, no generic frameworks — so you can decide what to do with it.",
        },
        {
          title: "3. Engagement (if warranted)",
          description:
            "Where the findings justify it, we scope a fixed-fee study, a retainer, or an operational mandate suited to what the situation actually needs.",
        },
      ],
      disclaimer:
        "We only propose further work where the audit shows it is warranted — the diagnostic is never a sales script.",
    },
    founder: {
      eyebrow: "Who's Behind It",
      title: "Built by an operator, not a consulting franchise.",
      body:
        "Crisp Yield Partners is led by a founder with direct, hands-on experience running ready-mix plants, launching low-carbon concrete products, and authoring the technical method statements that large pours depend on. That is the vantage point behind every audit and every recommendation.",
      credentials: [
        "MBA",
        "NRMCA Certified",
        "EPD Issuance & ECOPact Launch Experience",
        "Author of Large-Pour Method Statements",
      ],
      cta: "Read the full story",
    },
    finalCta: {
      title: "Not sure where your capital exposure sits?",
      subtitle:
        "A Red Flag Audit is the fastest way to find out — a focused, 48–72 hour diagnostic of an existing project or operation.",
      cta: "Request a Red Flag Audit",
    },
  },
  ar: {
    hero: {
      eyebrow: "استشارات رأس المال في قطاع الإنشاءات",
      title: "نعمل على تخفيف مخاطر رأس المال وتعظيم العائد التشغيلي في قطاع الإنشاءات.",
      subtitle:
        "تقدّم كرِسپ ييلد بارتنرز استشارات لملاك الأصول والمستثمرين والموردين الصناعيين حول القرارات التي تحدد ما إذا كان المشروع الإنشائي سيحمي رأس المال أم يستنزفه. نحن نقدّم جودة القرار وضمان التنفيذ، لا ساعات هندسية.",
      ctaPrimary: "اطلب تدقيق الرايات الحمراء",
      ctaSecondary: "استكشف خدماتنا",
    },
    verticalsHeading: {
      eyebrow: "ماذا نقدّم",
      title: "ثلاثة تخصصات، مهمة واحدة: حماية رأس المال.",
      subtitle:
        "كل مشروع استشاري يعود إلى السؤال ذاته: هل يحقق هذا الأصل أو المشروع أو التشغيل المستوى الذي يستحقه رأس المال القائم عليه؟",
    },
    verticals: [
      {
        tag: "01",
        title: "التمويل ودراسات الجدوى",
        description:
          "نمذجة مالية، وهيكلة للنفقات الرأسمالية والتشغيلية، وتحليل لفجوات السوق، موجهة للمستثمرين والمكاتب العائلية قبل الالتزام برأس المال.",
        href: "/capital-feasibility",
        linkLabel: "عرض التفاصيل",
      },
      {
        tag: "02",
        title: "العناية التقنية الواجبة",
        description:
          "مراجعة للمخططات والمواصفات، وهندسة قيمة، وتدقيق للمقاولين، لصالح المطورين والملاك الذين يحتاجون رأيًا فنيًا مستقلًا وموثوقًا.",
        href: "/technical-due-diligence",
        linkLabel: "عرض التفاصيل",
      },
      {
        tag: "03",
        title: "العمليات المؤسسية",
        description:
          "تصميم الهيكل التنظيمي، وخرائط طريق لتطوير الأعمال، وإعادة هيكلة عمليات المواد الثقيلة، للمقاولين والموردين تحت ضغط تشغيلي أو ضغط على الهوامش.",
        href: "/corporate-operations",
        linkLabel: "عرض التفاصيل",
      },
    ],
    howWeWork: {
      eyebrow: "منهجية العمل",
      title: "نبدأ بتشخيص سريع ومركّز — لا بعرض تقديمي.",
      subtitle:
        "تبدأ معظم علاقاتنا الاستشارية بتدقيق الرايات الحمراء: مراجعة سريعة ومحددة النطاق لخطة مشروع قائمة أو هيكل تشغيلي قائم، توضح خلال أيام لا أشهر أين يكمن التعرض الفعلي لرأس المال أو الهامش.",
      steps: [
        {
          title: "١. تدقيق الرايات الحمراء",
          description:
            "مراجعة مركّزة تستغرق ٤٨–٧٢ ساعة لخطة مشروعك أو مجموعة المواصفات أو الهيكل التشغيلي، تكشف أهم المخاطر والثغرات.",
        },
        {
          title: "٢. جلسة عرض النتائج",
          description:
            "عرض مباشر وواضح لما توصلنا إليه — دون حشو أو أطر عامة — لتقرر بنفسك الخطوة التالية.",
        },
        {
          title: "٣. التكليف (إن استدعى الأمر)",
          description:
            "عندما تبرر النتائج ذلك، نحدد نطاق دراسة بأتعاب ثابتة، أو تعاقد شهري، أو تكليف تشغيلي يناسب طبيعة الحالة فعليًا.",
        },
      ],
      disclaimer:
        "لا نقترح أي عمل إضافي إلا إذا أظهر التدقيق أن ذلك مبرر — فالتشخيص ليس أداة بيع أبدًا.",
    },
    founder: {
      eyebrow: "من خلف الشركة",
      title: "بُنيت على يد ممارس ميداني، لا امتياز استشاري.",
      body:
        "تقودها مؤسِّس ذو خبرة مباشرة وميدانية في إدارة مصانع الخرسانة الجاهزة، وإطلاق منتجات خرسانية منخفضة الكربون، وكتابة بيانات الطرق الفنية التي تعتمد عليها عمليات الصب الكبرى. هذا هو المنظور الذي يقف خلف كل تدقيق وكل توصية.",
      credentials: [
        "ماجستير إدارة أعمال (MBA)",
        "شهادة معتمدة من NRMCA",
        "خبرة في إصدار بيانات EPD وإطلاق منتج ECOPact",
        "مؤلف بيانات طرق لعمليات صب كبرى",
      ],
      cta: "اقرأ القصة كاملة",
    },
    finalCta: {
      title: "لست متأكدًا أين يكمن التعرض في رأس مالك؟",
      subtitle:
        "تدقيق الرايات الحمراء هو أسرع طريقة لمعرفة ذلك — تشخيص مركّز يستغرق ٤٨–٧٢ ساعة لمشروع أو عملية قائمة.",
      cta: "اطلب تدقيق الرايات الحمراء",
    },
  },
};
