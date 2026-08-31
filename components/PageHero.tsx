import SectionReveal from "./SectionReveal";

type PageHeroProps = {
  eyebrow: string;
  title: string;
  subtitle: string;
  children?: React.ReactNode;
};

export default function PageHero({
  eyebrow,
  title,
  subtitle,
  children,
}: PageHeroProps) {
  return (
    <section className="border-b border-cream/10 bg-charcoal pb-20 pt-16 sm:pt-24">
      <div className="container-max section-x">
        <SectionReveal>
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-amber">
            {eyebrow}
          </span>
          <h1 className="mt-5 max-w-4xl text-balance text-4xl font-bold leading-[1.08] tracking-tight text-cream sm:text-5xl lg:text-6xl">
            {title}
          </h1>
          <p className="mt-6 max-w-2xl text-balance text-lg leading-relaxed text-cream/70 sm:text-xl">
            {subtitle}
          </p>
          {children && <div className="mt-9">{children}</div>}
        </SectionReveal>
      </div>
    </section>
  );
}
