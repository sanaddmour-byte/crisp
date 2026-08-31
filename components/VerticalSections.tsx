import Link from "next/link";
import SectionReveal from "./SectionReveal";
import { Deliverable, VerticalPageContent } from "@/content/verticalTypes";

export function DeliverablesSection({
  data,
}: {
  data: VerticalPageContent["deliverables"];
}) {
  return (
    <section className="border-b border-cream/10 bg-charcoal py-24 sm:py-32">
      <div className="container-max section-x">
        <SectionReveal className="max-w-2xl">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-amber">
            {data.eyebrow}
          </span>
          <h2 className="mt-5 text-balance text-3xl font-bold tracking-tight text-cream sm:text-4xl">
            {data.title}
          </h2>
          <p className="mt-5 text-balance text-lg leading-relaxed text-cream/70">
            {data.subtitle}
          </p>
        </SectionReveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2">
          {data.items.map((item: Deliverable, i: number) => (
            <SectionReveal key={item.title} delayMs={i * 80}>
              <div className="h-full rounded-2xl border border-cream/10 bg-white/[0.02] p-7">
                <h3 className="text-lg font-bold text-cream">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-cream/65">
                  {item.description}
                </p>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export function PersonaSection({
  data,
}: {
  data: VerticalPageContent["persona"];
}) {
  return (
    <section className="border-b border-cream/10 bg-white/[0.02] py-24 sm:py-32">
      <div className="container-max section-x grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
        <SectionReveal>
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-amber">
            {data.eyebrow}
          </span>
          <h2 className="mt-5 text-balance text-3xl font-bold tracking-tight text-cream sm:text-4xl">
            {data.title}
          </h2>
          <p className="mt-5 text-balance text-lg leading-relaxed text-cream/70">
            {data.body}
          </p>
        </SectionReveal>
        <SectionReveal delayMs={100}>
          <div className="flex flex-wrap gap-3">
            {data.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-steel/50 bg-steel/15 px-5 py-2.5 text-sm font-medium text-cream/85"
              >
                {tag}
              </span>
            ))}
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}

export function CommercialSection({
  data,
}: {
  data: VerticalPageContent["commercial"];
}) {
  return (
    <section className="border-b border-cream/10 bg-charcoal py-24 sm:py-32">
      <div className="container-max section-x">
        <SectionReveal>
          <div className="rounded-3xl border border-amber/30 bg-gradient-to-br from-amber/10 via-transparent to-transparent p-8 sm:p-12 lg:p-16">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-amber">
              {data.eyebrow}
            </span>
            <h2 className="mt-5 max-w-2xl text-balance text-3xl font-bold tracking-tight text-cream sm:text-4xl">
              {data.title}
            </h2>
            <p className="mt-5 max-w-2xl text-balance text-lg leading-relaxed text-cream/70">
              {data.body}
            </p>
            <p className="mt-6 max-w-2xl text-sm italic leading-relaxed text-cream/50">
              {data.note}
            </p>
          </div>
        </SectionReveal>
      </div>
    </section>
  );
}

export function VerticalCtaSection({
  data,
}: {
  data: VerticalPageContent["cta"];
}) {
  return (
    <section className="bg-charcoal py-24 sm:py-32">
      <div className="container-max section-x">
        <SectionReveal className="flex flex-col items-start gap-8 rounded-3xl bg-amber px-8 py-14 sm:px-14 sm:py-16 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <h2 className="max-w-xl text-balance text-3xl font-bold tracking-tight text-charcoal sm:text-4xl">
              {data.title}
            </h2>
            <p className="mt-4 max-w-lg text-balance text-lg leading-relaxed text-charcoal/80">
              {data.subtitle}
            </p>
          </div>
          <Link
            href="/contact"
            className="inline-flex shrink-0 items-center justify-center rounded-full bg-charcoal px-8 py-4 text-base font-semibold text-cream transition-transform duration-200 hover:-translate-y-0.5"
          >
            {data.label}
          </Link>
        </SectionReveal>
      </div>
    </section>
  );
}
