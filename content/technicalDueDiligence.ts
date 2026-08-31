import { Localized } from "@/lib/i18n";
import { VerticalPageContent } from "./verticalTypes";

export type CaseScenario = {
  label: string;
  scenario: string;
  challenge: string;
  approach: string;
  outcome: string;
};

export type TDDContent = VerticalPageContent & {
  anchorNote: {
    eyebrow: string;
    quote: string;
    attribution: string;
  };
  caseStudies: {
    eyebrow: string;
    title: string;
    subtitle: string;
    disclaimer: string;
    challengeLabel: string;
    approachLabel: string;
    outcomeLabel: string;
    items: CaseScenario[];
  };
};

export const technicalDueDiligenceContent: Localized<TDDContent> = {
  en: {
    hero: {
      eyebrow: "Technical Due Diligence — Anchor Discipline",
      title: "An independent, technically fluent second opinion — before the mistake is poured.",
      subtitle:
        "This is where we spend most of our time, because this is where most capital is quietly lost: in specs no one challenged, contractors no one audited, and change orders no one questioned. We read drawings and financials with equal fluency.",
      cta: "Request a Red Flag Audit",
    },
    anchorNote: {
      eyebrow: "Why This Is Our Anchor",
      quote:
        "Most due diligence on a construction project is done by people who have never run a plant, priced a pour, or stood behind a method statement. We have.",
      attribution: "— Founding principle of Crisp Yield Partners",
    },
    deliverables: {
      eyebrow: "Deliverables",
      title: "What you get.",
      subtitle:
        "A working-level review, not a compliance checklist — built by people who have authored the documents we're reviewing.",
      items: [
        {
          title: "Blueprint & Spec Review",
          description:
            "Line-by-line review of drawings and specifications for buildability risk, sequencing conflicts, and quietly inflated scope.",
        },
        {
          title: "Value Engineering",
          description:
            "Targeted alternatives that protect performance and durability while removing cost that isn't earning its place in the budget.",
        },
        {
          title: "Contractor Auditing",
          description:
            "Independent assessment of contractor capability, track record, and pricing — before award, and at milestone gates after.",
        },
        {
          title: "PM Oversight",
          description:
            "Ongoing project management oversight that catches drift early: schedule slip, scope creep, and change orders that don't hold up.",
        },
      ],
    },
    persona: {
      eyebrow: "Who We Work With",
      title: "For owners who need a technical peer, not a report.",
      body:
        "Our clients here are developers and principal owners who are sophisticated about real estate but need an independent, technically credible check on the people executing the project — before problems become expensive.",
      tags: [
        "Real Estate Developers",
        "Principal Owners",
        "Institutional Sponsors",
        "Asset Managers",
      ],
    },
    commercial: {
      eyebrow: "Commercial Model",
      title: "Retainer, plus skin in the outcome.",
      body:
        "Ongoing technical due diligence and PM oversight is structured as a monthly retainer, with a milestone bonus tied to the project actually hitting the checkpoints that matter — on spec, on schedule, on budget.",
      note:
        "The Red Flag Audit is the entry point and is scoped separately as a fixed, fast engagement — see below.",
    },
    caseStudies: {
      eyebrow: "Illustrative Scenarios",
      title: "What a Red Flag Audit tends to surface.",
      subtitle:
        "Crisp Yield Partners is a new firm — these are illustrative, composite scenarios based on common patterns in the sector, not verified case studies or client engagements.",
      disclaimer:
        "For illustrative purposes only. Not a record of actual client work, results, or figures.",
      challengeLabel: "Challenge",
      approachLabel: "Approach",
      outcomeLabel: "Outcome",
      items: [
        {
          label: "Scenario A",
          scenario: "A mid-rise residential developer preparing to award a general contractor.",
          challenge:
            "The leading bid looked competitive on paper, but the spec set contained ambiguous load and finish clauses that left significant room for post-award change orders.",
          approach:
            "A 72-hour spec review flagged the ambiguous clauses and modeled the realistic change-order exposure they created.",
          outcome:
            "The clauses were tightened before award, closing off a common route to margin erosion later in the build.",
        },
        {
          label: "Scenario B",
          scenario: "An owner mid-construction on a mixed-use asset, concerned about schedule drift.",
          challenge:
            "Monthly PM reports showed the project 'on track,' but underlying trade sequencing had quietly slipped for two consecutive months.",
          approach:
            "An independent PM oversight review cross-checked reported progress against actual trade sequencing on site.",
          outcome:
            "The gap between reported and actual progress was surfaced early enough to reset the schedule before it compounded further.",
        },
      ],
    },
    cta: {
      title: "Get an independent read before the next milestone.",
      subtitle:
        "A Red Flag Audit is a fast, focused 48–72 hour diagnostic of your project plan or operational structure — request one to see where the exposure sits.",
      label: "Request a Red Flag Audit",
    },
  },
  ar: {
    hero: {
      eyebrow: "العناية التقنية الواجبة — التخصص الأساسي",
      title: "رأي فني مستقل وموثوق — قبل أن يُصَب الخطأ فعليًا.",
      subtitle:
        "هنا نقضي معظم وقتنا، لأن هنا يُفقَد معظم رأس المال بصمت: في مواصفات لم يعترض عليها أحد، ومقاولين لم يُدقَّق فيهم أحد، وأوامر تغيير لم يسائلها أحد. نقرأ المخططات والبيانات المالية بالكفاءة نفسها.",
      cta: "اطلب تدقيق الرايات الحمراء",
    },
    anchorNote: {
      eyebrow: "لماذا هذا هو تخصصنا الأساسي",
      quote:
        "معظم العناية الواجبة في المشاريع الإنشائية يقوم بها أشخاص لم يديروا مصنعًا يومًا، ولم يسعّروا عملية صب، ولم يقفوا خلف بيان طريقة فنية. نحن فعلنا ذلك.",
      attribution: "— المبدأ التأسيسي لكرِسپ ييلد بارتنرز",
    },
    deliverables: {
      eyebrow: "المخرجات",
      title: "ماذا ستحصل عليه.",
      subtitle:
        "مراجعة على مستوى التنفيذ، لا قائمة امتثال شكلية — يقوم بها أشخاص سبق لهم تأليف الوثائق التي نراجعها.",
      items: [
        {
          title: "مراجعة المخططات والمواصفات",
          description:
            "مراجعة تفصيلية للمخططات والمواصفات لرصد مخاطر القابلية للتنفيذ، وتعارضات التسلسل، والنطاق المتضخم بصمت.",
        },
        {
          title: "هندسة القيمة",
          description:
            "بدائل مستهدفة تحافظ على الأداء والمتانة مع إزالة التكاليف التي لا تستحق مكانها في الميزانية.",
        },
        {
          title: "تدقيق المقاولين",
          description:
            "تقييم مستقل لقدرات المقاول وسجله التاريخي وأسعاره — قبل الترسية، وعند نقاط التحقق الرئيسية بعدها.",
        },
        {
          title: "الإشراف على إدارة المشروع",
          description:
            "إشراف مستمر على إدارة المشروع يرصد الانحراف مبكرًا: تأخر الجدول الزمني، وتضخم النطاق، وأوامر التغيير غير المبررة.",
        },
      ],
    },
    persona: {
      eyebrow: "من نعمل معهم",
      title: "لملّاك يحتاجون نظيرًا فنيًا، لا مجرد تقرير.",
      body:
        "عملاؤنا هنا مطورون وملاك رئيسيون على دراية عالية بالعقارات لكنهم يحتاجون تحققًا فنيًا مستقلًا وموثوقًا من الجهة المنفذة للمشروع — قبل أن تتحول المشكلات إلى تكاليف باهظة.",
      tags: [
        "المطورون العقاريون",
        "الملاك الرئيسيون",
        "الرعاة المؤسسيون",
        "مدراء الأصول",
      ],
    },
    commercial: {
      eyebrow: "نموذج الأتعاب",
      title: "تعاقد شهري، مع مصلحة مباشرة في النتيجة.",
      body:
        "تُهيكَل العناية التقنية الواجبة المستمرة والإشراف على إدارة المشروع كتعاقد شهري، مع مكافأة عند تحقيق المشروع فعليًا لنقاط التحقق المهمة — من حيث المواصفات والجدول الزمني والميزانية.",
      note:
        "تدقيق الرايات الحمراء هو نقطة الدخول ويُحدَّد نطاقه بشكل منفصل كتكليف سريع وثابت الأتعاب — انظر أدناه.",
    },
    caseStudies: {
      eyebrow: "سيناريوهات توضيحية",
      title: "ما الذي يكشفه تدقيق الرايات الحمراء عادةً.",
      subtitle:
        "كرِسپ ييلد بارتنرز شركة حديثة التأسيس — هذه سيناريوهات توضيحية مركّبة مبنية على أنماط شائعة في القطاع، وليست دراسات حالة موثّقة أو تكليفات فعلية لعملاء.",
      disclaimer:
        "لأغراض التوضيح فقط. لا تمثل سجلًا لعمل فعلي مع عملاء أو نتائج أو أرقام حقيقية.",
      challengeLabel: "التحدي",
      approachLabel: "المنهجية",
      outcomeLabel: "النتيجة",
      items: [
        {
          label: "السيناريو أ",
          scenario: "مطوّر سكني متوسط الارتفاع يستعد لترسية عقد على مقاول عام.",
          challenge:
            "بدا العرض الأقرب للترسية تنافسيًا على الورق، لكن مجموعة المواصفات تضمنت بنودًا غامضة حول الأحمال والتشطيبات فتحت مجالًا واسعًا لأوامر تغيير بعد الترسية.",
          approach:
            "كشفت مراجعة للمواصفات استغرقت ٧٢ ساعة عن البنود الغامضة ونمذجت التعرض الواقعي لأوامر التغيير الناتجة عنها.",
          outcome:
            "تم تشديد تلك البنود قبل الترسية، ما أغلق مسارًا شائعًا لتآكل الهامش لاحقًا خلال التنفيذ.",
        },
        {
          label: "السيناريو ب",
          scenario: "مالك في منتصف تنفيذ أصل متعدد الاستخدامات، قلق من تأخر الجدول الزمني.",
          challenge:
            "أظهرت التقارير الشهرية لإدارة المشروع أن المشروع 'يسير وفق الخطة'، بينما كان تسلسل الأعمال الفعلي قد تأخر بصمت لشهرين متتاليين.",
          approach:
            "قارنت مراجعة إشراف مستقلة على إدارة المشروع بين التقدم المُبلَّغ عنه والتسلسل الفعلي للأعمال في الموقع.",
          outcome:
            "تم كشف الفجوة بين التقدم المُبلَّغ عنه والفعلي مبكرًا بما يكفي لإعادة ضبط الجدول الزمني قبل أن تتفاقم.",
        },
      ],
    },
    cta: {
      title: "احصل على رأي مستقل قبل نقطة التحقق التالية.",
      subtitle:
        "تدقيق الرايات الحمراء تشخيص سريع ومركّز يستغرق ٤٨–٧٢ ساعة لخطة مشروعك أو هيكلك التشغيلي — اطلبه لمعرفة أين يكمن التعرض.",
      label: "اطلب تدقيق الرايات الحمراء",
    },
  },
};
