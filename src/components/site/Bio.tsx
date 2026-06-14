import portrait from "@/assets/yu-cheng-portrait.jpg";

const expertise = [
  { stat: "800+", title: "Residential & Commercial Audits" },
  { stat: "15+", title: "Years of Practice & Research" },
  { stat: "Period 9", title: "Specialisation" },
];

export function Bio() {
  return (
    <section id="about" className="relative py-24 lg:py-36 bg-secondary/40">
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
            </div>
          </div>

          <div className="lg:col-span-7">
            <p className="text-xs uppercase tracking-[0.22em] text-brand">— About</p>
            <h2 className="mt-4 font-display font-bold text-foreground text-4xl lg:text-5xl leading-tight">
              The science of your space,
              <br />
              <span className="italic font-light text-muted-foreground">without the superstition.</span>
            </h2>
            <div className="mt-8 space-y-5 text-muted-foreground text-base lg:text-lg leading-relaxed max-w-2xl">
              <p>
                Yu Cheng is a Singapore-based Feng Shui consultant specialising in residential and commercial
                property assessments. With over 15 years of practice and more than 800 audits completed, he focuses
                on practical recommendations tailored to modern living and business environments.
              </p>
            </div>

            <div className="mt-6 inline-flex flex-wrap items-center gap-x-3 gap-y-1 rounded-full border border-border bg-background px-5 py-2.5 text-xs text-foreground">
              <span className="font-display text-sm font-semibold text-brand">23,000+</span>
              <span className="text-muted-foreground">followers across platforms</span>
              <span className="text-muted-foreground/50">·</span>
              <span className="text-muted-foreground">Available for remote consultations worldwide</span>
            </div>

            <div className="mt-12">
              <p className="text-xs uppercase tracking-[0.22em] text-brand">— Experience & Expertise</p>
              <div className="mt-5 grid sm:grid-cols-3 gap-3">
                {expertise.map((c) => (
                  <div key={c.title} className="rounded-2xl border border-border bg-background p-5">
                    <p className="font-display text-3xl font-semibold text-brand leading-none">{c.stat}</p>
                    <p className="mt-3 text-sm text-foreground leading-snug">{c.title}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
