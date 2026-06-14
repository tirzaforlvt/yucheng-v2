import { useEffect, useRef, useState } from "react";
import carRental from "@/assets/case-car-rental.jpg";
import jewelry from "@/assets/case-jewelry.jpg";
import restaurant from "@/assets/case-restaurant-busy.jpg";
import sgCondoInterior from "@/assets/case-sg-condo-interior.jpg";
import floorplan from "@/assets/case-floorplan.jpg";

const cases = [
  {
    img: carRental,
    overlay: "Commercial — Car Rental",
    tag: "Commercial · Car Rental Company, Singapore",
    title: "Repositioning for Revenue Recovery",
    challenge:
      "A car rental business was experiencing a sustained drop in rental sales despite normal market conditions.",
    approach:
      "On-site audit identified energy stagnation at the foyer. Repositioned foyer décor and two office tables to improve Qi flow through the main entry and work areas.",
    outcome:
      "Rental sales increased within two weeks. Car utilisation rate stabilised at a consistently high level.",
  },
  {
    img: jewelry,
    overlay: "Commercial — Jeweler",
    tag: "Commercial · Jewellery Company, Singapore",
    title: "Activating a Stagnant New Premise",
    challenge:
      "Business momentum stalled after relocating to a new office. Enquiries dropped and closing rates declined.",
    approach:
      "Redesigned Qi flow at the foyer, activated the reputation energy sector, and improved the director's seat orientation.",
    outcome:
      "Enquiries increased. Closing rate improved with a notably higher proportion of clients who were less price-sensitive.",
  },
  {
    img: restaurant,
    overlay: "Commercial — F&B",
    tag: "Commercial · F&B, Singapore",
    title: "From Vacant Unit to Thriving Restaurant",
    challenge:
      "Previous tenant had closed due to poor revenue. New operator needed a foundation that would support sustained footfall.",
    approach:
      "Planned the Qi flow through the restaurant and kitchen, and optimised customer seating positions relative to the space's energy map.",
    outcome:
      "Business has flourished since opening day. Unexpectedly strong walk-in traffic both day and night — consistently above the operator's projections.",
  },
  {
    img: sgCondoInterior,
    overlay: "Residential — Singapore",
    tag: "Residential · Tampines, Singapore",
    title: "Restoring Calm to a Family Home",
    challenge:
      "Family experiencing disrupted sleep and low mood after moving into their flat.",
    approach:
      "Bedroom reorientation, headboard wall adjustment, and lighting calibration based on Period 9 Flying Stars analysis.",
    outcome:
      "Sleep quality restored within weeks. No hacking or renovation required.",
  },
  {
    img: floorplan,
    overlay: "Residential — Remote Planning",
    tag: "Residential · Remote Consultation, Stavanger Norway",
    title: "Spatial Clarity Across Distance",
    challenge:
      "Client based in Norway needed a Feng Shui consultation for their home without an on-site visit being feasible.",
    approach:
      "Full remote consultation using detailed floor plan, facing direction, and move-in date. Flying Stars analysis conducted and recommendations delivered in writing.",
    outcome:
      "Client reported improved spatial clarity and energy flow following implementation of the recommendations.",
  },
];

const stats: { value: number; suffix: string; label: string; display?: string }[] = [
  { value: 800, suffix: "+", label: "Audits delivered" },
  { value: 0, suffix: "", label: "Unresolved cases to date", display: "Zero" },
  { value: 15, suffix: "+", label: "Years in practice" },
  { value: 2, suffix: "%", label: "Cases requiring major renovation", display: "<2%" },
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
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                  <img
                    src={c.img}
                    alt={c.title}
                    loading="lazy"
                    width={1024}
                    height={768}
                    className="h-full w-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <span className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-sm border border-white/25 bg-background/55 backdrop-blur-md px-2.5 py-1 text-[10px] uppercase tracking-[0.22em] text-foreground">
                    <span className="h-1 w-1 rounded-full bg-brand" />
                    {c.overlay}
                  </span>
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
                <p className="mt-5 text-xs italic text-muted-foreground">No renovation required.</p>
              </div>
            </article>
          ))}
        </div>

        <p className="mt-10 text-center text-xs italic text-muted-foreground">
          Additional case studies available upon request. Client and company details are kept confidential.
        </p>

        <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-px rounded-3xl overflow-hidden border border-border bg-border">
          {stats.map((s) => (
            <div key={s.label} className="bg-background p-8 lg:p-10 text-center">
              {s.display ? (
                <span className="font-display text-5xl lg:text-6xl font-bold text-foreground">
                  {s.display}
                </span>
              ) : (
                <Counter to={s.value} suffix={s.suffix} />
              )}
              <p className="mt-3 text-sm text-muted-foreground">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}