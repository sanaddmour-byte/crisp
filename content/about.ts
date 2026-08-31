import { Localized } from "@/lib/i18n";

export type CredentialItem = {
  title: string;
  description: string;
};

export type AboutContent = {
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
  };
  bio: {
    heading: string;
    paragraphs: string[];
  };
  credentials: {
    heading: string;
    subheading: string;
    items: CredentialItem[];
  };
  philosophy: {
    eyebrow: string;
    title: string;
    body: string;
    points: CredentialItem[];
  };
  cta: {
    title: string;
    subtitle: string;
    label: string;
  };
};

export const aboutContent: Localized<AboutContent> = {
  en: {
    hero: {
      eyebrow: "About",
      title: "An operator's vantage point, not a consultant's.",
      subtitle:
        "Crisp Yield Partners exists because most construction advisory is delivered by people who have never had to live with the consequences of the recommendations they write.",
    },
    bio: {
      heading: "The Founder",
      paragraphs: [
        "Crisp Yield Partners was founded on the belief that construction capital advisory should be delivered by people who have actually operated inside the industry — not by generalist consultants applying a standard playbook to a sector they don't fully understand.",
        "The founder's background spans senior operational and business development roles managing ready-mix concrete plants, followed by a transition into product management for construction materials at a multi-market level. That includes direct responsibility for issuing Environmental Product Declarations (EPDs), leading the launch of ECOPact low-carbon concrete, and authoring the large-pour method statements that site teams rely on when the stakes are highest.",
        "That combination — plant-floor operating experience, product and market strategy, and the technical authorship of the documents clients now hire us to review — is the firm's core differentiator. When we audit a spec, a contractor, or an operating structure, we are reading it the way someone who has written and executed those documents reads it, not the way a generalist auditor reads it.",
      ],
    },
    credentials: {
      heading: "Credentials",
      subheading: "Direct experience, not borrowed frameworks.",
      items: [
        {
          title: "MBA",
          description:
            "Formal business and finance training that underpins the capital and commercial side of every engagement.",
        },
        {
          title: "NRMCA Certified",
          description:
            "Certified through the National Ready Mixed Concrete Association, grounding our technical credibility in the materials side of construction.",
        },
        {
          title: "EPD Issuance & ECOPact Launch",
          description:
            "Direct experience issuing Environmental Product Declarations and leading the go-to-market for ECOPact, a low-carbon concrete product line.",
        },
        {
          title: "Author of Large-Pour Method Statements",
          description:
            "Wrote the technical method statements that govern how large, high-risk concrete pours are planned and executed on site.",
        },
      ],
    },
    philosophy: {
      eyebrow: "Firm Philosophy",
      title: "Why we don't bill by the hour.",
      body:
        "Hourly billing rewards time spent, not decisions improved — and it quietly invites scope to expand in ways that serve the advisor more than the client. We've seen how easily a well-intentioned oversight mandate can drift from a focused diagnostic into an open-ended, ever-expanding engagement that never quite resolves. We call this the Scope Bleed Trap, and it is the single biggest reason construction advisory earns its reputation for cost without conviction.",
      points: [
        {
          title: "Fixed Scope, Fixed Fee",
          description:
            "Every engagement starts with a defined diagnostic and a defined fee, so the incentive is to resolve the question, not extend the clock.",
        },
        {
          title: "Diagnostic Before Commitment",
          description:
            "We propose further work only when a Red Flag Audit shows it is genuinely warranted — never as a default next step.",
        },
        {
          title: "Outcomes Over Hours",
          description:
            "Where our commercial model allows it, we tie fees to measurable outcomes — savings delivered, milestones hit — rather than hours logged.",
        },
      ],
    },
    cta: {
      title: "Want to work with an operator, not a generalist?",
      subtitle:
        "Start with a Red Flag Audit — a fast, focused read on where your project or operation actually stands.",
      label: "Request a Red Flag Audit",
    },
  },
  ar: {
    hero: {
      eyebrow: "من نحن",
      title: "منظور ممارس ميداني، لا منظور استشاري.",
      subtitle:
        "تأسست كرِسپ ييلد بارتنرز لأن معظم الاستشارات الإنشائية يقدمها أشخاص لم يضطروا يومًا للعيش مع نتائج التوصيات التي يكتبونها.",
    },
    bio: {
      heading: "المؤسِّس",
      paragraphs: [
        "تأسست كرِسپ ييلد بارتنرز على قناعة بأن استشارات رأس المال في قطاع الإنشاءات يجب أن يقدّمها أشخاص عملوا فعليًا داخل هذا القطاع — لا استشاريون عامون يطبّقون منهجية موحدة على قطاع لا يفهمونه بعمق.",
        "تمتد خلفية المؤسِّس عبر أدوار تشغيلية عليا وأدوار في تطوير الأعمال في إدارة مصانع الخرسانة الجاهزة، تلتها مرحلة انتقال إلى إدارة المنتجات لمواد البناء على مستوى أسواق متعددة. ويشمل ذلك مسؤولية مباشرة عن إصدار بيانات المنتج البيئية (EPD)، وقيادة إطلاق منتج ECOPact للخرسانة منخفضة الكربون، وتأليف بيانات الطرق الفنية لعمليات الصب الكبرى التي تعتمد عليها فرق الموقع في أكثر اللحظات حساسية.",
        "هذا المزيج — الخبرة التشغيلية الميدانية، واستراتيجية المنتج والسوق، والتأليف الفني للوثائق التي يستأجرنا العملاء الآن لمراجعتها — هو مصدر التمايز الأساسي للشركة. عندما ندقق مواصفة أو مقاولًا أو هيكلًا تشغيليًا، فإننا نقرأه بعين من كتب ونفّذ تلك الوثائق فعليًا، لا بعين مدقق عام.",
      ],
    },
    credentials: {
      heading: "المؤهلات",
      subheading: "خبرة مباشرة، لا أطر عمل مستعارة.",
      items: [
        {
          title: "ماجستير إدارة أعمال (MBA)",
          description:
            "تأهيل رسمي في إدارة الأعمال والتمويل يشكّل الأساس للجانب الرأسمالي والتجاري في كل تكليف.",
        },
        {
          title: "شهادة معتمدة من NRMCA",
          description:
            "شهادة من الجمعية الوطنية الأمريكية للخرسانة الجاهزة، ترسّخ مصداقيتنا الفنية في جانب المواد من قطاع الإنشاءات.",
        },
        {
          title: "إصدار بيانات EPD وإطلاق ECOPact",
          description:
            "خبرة مباشرة في إصدار بيانات المنتج البيئية وقيادة إطلاق ECOPact، وهو خط منتجات خرسانية منخفضة الكربون.",
        },
        {
          title: "مؤلف بيانات طرق لعمليات صب كبرى",
          description:
            "كتب بيانات الطرق الفنية التي تحكم كيفية تخطيط وتنفيذ عمليات الصب الكبرى عالية المخاطر في الموقع.",
        },
      ],
    },
    philosophy: {
      eyebrow: "فلسفة الشركة",
      title: "لماذا لا نحتسب أتعابنا بالساعة.",
      body:
        "الاحتساب بالساعة يكافئ الوقت المستغرَق لا القرارات المحسَّنة — ويفتح المجال بصمت لتوسّع النطاق بما يخدم الاستشاري أكثر مما يخدم العميل. رأينا كيف يمكن لتكليف إشراف حسن النية أن ينزلق من تشخيص مركّز إلى مهمة مفتوحة النهاية تتوسع باستمرار دون أن تُحسم فعليًا. نسمي هذا 'فخ توسّع النطاق'، وهو السبب الأول وراء السمعة التي تحملها الاستشارات الإنشائية بأنها مكلفة دون قناعة حقيقية بجدواها.",
      points: [
        {
          title: "نطاق ثابت، أتعاب ثابتة",
          description:
            "يبدأ كل تكليف بتشخيص محدد وأتعاب محددة، بحيث يكون الحافز هو حسم السؤال، لا إطالة الوقت.",
        },
        {
          title: "التشخيص قبل الالتزام",
          description:
            "نقترح المزيد من العمل فقط عندما يُظهر تدقيق الرايات الحمراء أن ذلك مبرر فعليًا — لا كخطوة تالية تلقائية.",
        },
        {
          title: "النتائج قبل الساعات",
          description:
            "حيثما يسمح نموذج أتعابنا بذلك، نربط الأتعاب بنتائج قابلة للقياس — وفورات محققة، نقاط تحقق مُنجَزة — لا بساعات مسجَّلة.",
        },
      ],
    },
    cta: {
      title: "تريد العمل مع ممارس ميداني، لا استشاري عام؟",
      subtitle:
        "ابدأ بتدقيق الرايات الحمراء — قراءة سريعة ومركّزة لواقع مشروعك أو عملياتك الفعلي.",
      label: "اطلب تدقيق الرايات الحمراء",
    },
  },
};
