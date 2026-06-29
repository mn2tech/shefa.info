interface PageHeroProps {
  eyebrow?: string;
  title: string;
  description?: string;
}

export default function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="relative bg-navy-950 text-white">
      <div className="hero-overlay absolute inset-0 opacity-40" aria-hidden />
      <div className="relative mx-auto max-w-7xl px-4 py-14 sm:px-6 sm:py-18 lg:px-8 lg:py-20">
        <div className="max-w-3xl">
          {eyebrow && (
            <p className="text-xs font-semibold uppercase tracking-widest text-gold-400">
              {eyebrow}
            </p>
          )}
          <h1 className="mt-3 font-serif text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
            {title}
          </h1>
          {description && (
            <p className="mt-5 text-lg leading-relaxed text-navy-100">{description}</p>
          )}
        </div>
      </div>
    </section>
  );
}
