import portrait from "@/assets/yu-cheng-portrait.jpg";

const credentials = [
  { year: "2009", title: "Apprenticed under HK Grandmaster lineage" },
  { year: "2014", title: "First commercial advisory engagement" },
  { year: "2019", title: "Period 9 specialisation & research" },
  { year: "2024", title: "800+ residential & commercial audits" },
];

export function Bio() {
  return (
    <section id="bio" className="relative py-24 lg:py-36 bg-secondary/40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          <div className="lg:col-span-5">
            <div className="relative">
              <div className="aspect-[4/5] overflow-hidden rounded-3xl border border-border bg-grain">
                <img
                  src={portrait}
                  alt="Portrait of Yu Cheng, Singapore Feng Shui consultant"
                  loading="lazy"
                  width={1024}
                  height={1280}
                  className="h-full w-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 hidden md:flex flex-col rounded-2xl bg-brand text-brand-foreground p-5 max-w-[180px] shadow-xl">
                <span className="font-display text-4xl font-bold leading-none">15+</span>
                <span className="mt-2 text-xs uppercase tracking-[0.18em] opacity-80">Years of Quiet Practice</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <p className="text-xs uppercase tracking-[0.22em] text-brand">— Meet Yu Cheng</p>
            <h2 className="mt-4 font-display font-bold text-foreground text-4xl lg:text-5xl leading-tight">
              Authentic lineage,<br />
              <span className="italic font-light text-muted-foreground">contemporary judgement.</span>
            </h2>
            <div className="mt-8 space-y-5 text-muted-foreground text-base lg:text-lg leading-relaxed max-w-2xl">
              <p>
                Yu Cheng combines authentic Feng Shui lineage with modern-day practicality —
                helping clients navigate property decisions, home planning, and spatial harmony
                in a way that fits contemporary Singaporean lifestyles.
              </p>
              <p>
                Trained under a Hong Kong grandmaster and refined through 15+ years of residential
                and commercial advisory, his methodology is deliberately calm: no ornaments, no
                renovations, no superstition. Only what works for the space, the period, and the people.
              </p>
            </div>

            <div className="mt-12 grid sm:grid-cols-2 gap-3">
              {credentials.map((c) => (
                <div key={c.year} className="rounded-2xl border border-border bg-background p-5">
                  <p className="font-display text-2xl font-semibold text-brand">{c.year}</p>
                  <p className="mt-2 text-sm text-foreground">{c.title}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}