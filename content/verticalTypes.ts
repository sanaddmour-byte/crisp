export type Deliverable = {
  title: string;
  description: string;
};

export type VerticalPageContent = {
  hero: {
    eyebrow: string;
    title: string;
    subtitle: string;
    cta: string;
  };
  deliverables: {
    eyebrow: string;
    title: string;
    subtitle: string;
    items: Deliverable[];
  };
  persona: {
    eyebrow: string;
    title: string;
    body: string;
    tags: string[];
  };
  commercial: {
    eyebrow: string;
    title: string;
    body: string;
    note: string;
  };
  cta: {
    title: string;
    subtitle: string;
    label: string;
  };
};
