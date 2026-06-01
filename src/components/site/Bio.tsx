import portrait from "@/assets/yu-cheng-portrait.jpg";

const credentials = [
  { year: "2009", title: "Apprenticed under HK Grandmaster lineage" },
  { year: "2014", title: "First commercial advisory engagement" },
  { year: "2019", title: "Period 9 specialisation & research" },
  { year: "2024", title: "800+ residential & commercial audits" },
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
              <div className="absolute -bottom-6 -right-6 hidden md:flex flex-col rounded-2xl bg-brand text-brand-foreground p-5 max-w-[180px] shadow-xl">
                <span className="font-display text-4xl font-bold leading-none">15+</span>
                <span className="mt-2 text-xs uppercase tracking-[0.18em] opacity-80">Years of Quiet Practice</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7">
            <p className="text-xs uppercase tracking-[0.22em] text-brand">— Meet Yu Cheng</p>
            <h2 className="mt-4 font-display font-bold text-foreground text-4xl lg:text-5xl leading-tight">
              The science of your space,<br />
              <span className="italic font-light text-muted-foreground">without the superstition.</span>
            </h2>
            <div className="mt-8 space-y-5 text-muted-foreground text-base lg:text-lg leading-relaxed max-w-2xl">
              <p>
                Master Yu Cheng is a Singapore-based Feng Shui practitioner with over 15 years of professional experience, specialising in residential and commercial spatial planning, home selection, and Period 9 energy analysis.
              </p>
              <p>
                His path into the discipline began with a costly and disillusioning encounter with mainstream practice — an experience that drove him to seek out the classical source. He spent four to five years travelling regularly to Taiwan to study under formal instruction, developing a rigorous, unconventional mastery of Flying Stars that sets his work apart from what is commonly taught.
              </p>
              <p>
                Alongside that technical foundation, Yu Cheng brings a rare sensitivity to spatial energy — the ability to perceive, in physical space, the precise energetic qualities that classical Feng Shui describes in theory. No ornaments. No renovation. No deflection. Just fifteen years of work grounded in the real thing.
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