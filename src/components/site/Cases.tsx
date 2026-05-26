import { useEffect, useRef, useState } from "react";
import condo from "@/assets/case-condo.jpg";
import office from "@/assets/case-office.jpg";
import residential from "@/assets/case-residential.jpg";

const cases = [
  {
    img: residential,
    tag: "Residential · 4-Room BTO",
    title: "Home planning without renovation",
    challenge: "Young family struggling with sleep and mood after move-in.",
    approach: "Bedroom reorientation, headboard wall change, lighting calibration.",
    outcome: "Restful sleep restored within 3 weeks. Zero hacking required.",
  },
  {
    img: condo,
    tag: "Pre-Purchase · Condominium",
    title: "Condo selection for a young family",
    challenge: "Shortlisting between three units in the same development.",
    approach: "Facing analysis, mountain-water reading, BaZi alignment.",
    outcome: "Selected unit appreciated above average and supported pregnancy plans.",
  },
  {
    img: office,
    tag: "Commercial · SME Office",
    title: "Office layout optimisation",
    challenge: "Director's focus dropping, key staff unsettled.",
    approach: "Director-seat repositioning, finance corner activation, entry flow fix.",
    outcome: "Two consecutive quarters of revenue growth; staff retention stabilised.",
  },
];

const stats = [
  { value: 800, suffix: "+", label: "Audits delivered" },
  { value: 98, suffix: "%", label: "Client satisfaction" },
  { value: 15, suffix: "+", label: "Years in practice" },
  { value: 0, suffix: "", label: "Major renovations required" },
];

function Counter({ to, suffix }: { to: number; suffix: string }) {
  const [n, setN] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        const start = performance.now();
        const duration = 1400;
        const step = (t: number) => {
          const p = Math.min(1, (t - start) / duration);
          const eased = 1 - Math.pow(1 - p, 3);
          setN(Math.round(to * eased));
          if (p < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
        io.disconnect();
      }
    });
    io.observe(el);
    return () => io.disconnect();
  }, [to]);
  return (
    <span ref={ref} className="font-display text-5xl lg:text-6xl font-bold text-foreground">
      {n}
      {suffix}
    </span>
  );
}

export function Cases() {
  return (
    <section id="cases" className="py-24 lg:py-36 bg-gradient-to-b from-background to-secondary/30">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="max-w-2xl">
          <p className="text-xs uppercase tracking-[0.22em] text-brand">— Case Studies</p>
          <h2 className="mt-4 font-display font-bold text-foreground text-4xl lg:text-5xl leading-tight">
            Quiet interventions,<br />
            <span className="italic font-light text-muted-foreground">tangible shifts.</span>
          </h2>
        </div>

        <div className="mt-16 space-y-6 lg:space-y-10">
          {cases.map((c, i) => (
            <article
              key={c.title}
              className={`grid lg:grid-cols-12 gap-6 lg:gap-10 items-center rounded-3xl border border-border bg-background p-5 lg:p-8 ${
                i % 2 === 1 ? "lg:[direction:rtl]" : ""
              }`}
            >
              <div className="lg:col-span-5 [direction:ltr]">
                <div className="aspect-[4/3] overflow-hidden rounded-2xl">
                  <img
                    src={c.img}
                    alt={c.title}
                    loading="lazy"
                    width={1024}
                    height={768}
                    className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                </div>
              </div>
              <div className="lg:col-span-7 [direction:ltr]">
                <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">{c.tag}</p>
                <h3 className="mt-3 font-display text-2xl lg:text-3xl font-semibold text-foreground">
                  {c.title}
                </h3>
                <div className="mt-6 grid sm:grid-cols-3 gap-4">
                  {[
                    { k: "Challenge", v: c.challenge },
                    { k: "Approach", v: c.approach },
                    { k: "Outcome", v: c.outcome },
                  ].map((row) => (
                    <div key={row.k} className="border-t border-border pt-3">
                      <p className="text-[10px] uppercase tracking-[0.22em] text-brand">{row.k}</p>
                      <p className="mt-2 text-sm text-foreground leading-relaxed">{row.v}</p>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-px rounded-3xl overflow-hidden border border-border bg-border">
          {stats.map((s) => (
            <div key={s.label} className="bg-background p-8 lg:p-10 text-center">
              <Counter to={s.value} suffix={s.suffix} />
              <p className="mt-3 text-sm text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}