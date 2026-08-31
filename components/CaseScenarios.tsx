import SectionReveal from "./SectionReveal";
import { TDDContent } from "@/content/technicalDueDiligence";

export default function CaseScenarios({
  data,
}: {
  data: TDDContent["caseStudies"];
}) {
  return (
    <section className="border-b border-cream/10 bg-white/[0.02] py-24 sm:py-32">
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

        <div className="mt-14 grid gap-6 lg:grid-cols-2">
          {data.items.map((item, i) => (
            <SectionReveal key={item.label} delayMs={i * 100}>
              <div className="flex h-full flex-col rounded-2xl border border-steel/40 bg-steel/10 p-8">
                <span className="text-xs font-bold uppercase tracking-[0.14em] text-amber">
                  {item.label}
                </span>
                <p className="mt-4 text-base font-semibold leading-snug text-cream">
                  {item.scenario}
                </p>
                <div className="mt-5 flex flex-col gap-4 text-sm leading-relaxed text-cream/70">
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wider text-cream/45">
                      {data.challengeLabel}
                    </div>
                    <p className="mt-1">{item.challenge}</p>
                  </div>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wider text-cream/45">
                      {data.approachLabel}
                    </div>
                    <p className="mt-1">{item.approach}</p>
                  </div>
                  <div>
                    <div className="text-xs font-semibold uppercase tracking-wider text-cream/45">
                      {data.outcomeLabel}
                    </div>
                    <p className="mt-1">{item.outcome}</p>
                  </div>
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>

        <SectionReveal delayMs={250}>
          <p className="mt-10 max-w-2xl text-sm italic leading-relaxed text-cream/50">
            {data.disclaimer}
          </p>
        </SectionReveal>
      </div>
    </section>
  );
}
