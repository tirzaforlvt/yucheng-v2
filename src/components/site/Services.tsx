import { Home, Building, MapPin, CalendarCheck, Activity, ArrowUpRight } from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Residential Feng Shui",
    desc: "In-depth audits for BTOs, condos, and landed homes — calibrated to the residents, the period, and the building's natural energy flow.",
    benefits: ["On-site assessment", "Period 9 calibration", "Floor plan recommendations"],
  },
  {
    icon: Building,
    title: "Commercial Feng Shui",
    desc: "Office layouts, retail spaces, and SME premises designed to support clarity, productivity, and steady business momentum.",
    benefits: ["Workspace orientation", "Reception & cashier placement", "Director seating strategy"],
  },
  {
    icon: MapPin,
    title: "Home Selection & Planning",
    desc: "Shortlist properties with confidence — evaluate facing, surroundings, and timing before you commit to the purchase.",
    benefits: ["Pre-purchase shortlisting", "Site visit accompaniment", "Comparative analysis"],
  },
  {
    icon: CalendarCheck,
    title: "Property Date Selection",
    desc: "Auspicious dates for moving in, renovation kick-off, and key business milestones — chosen to align with your BaZi.",
    benefits: ["Move-in dates", "Renovation start dates", "Business openings"],
  },
  {
    icon: Activity,
    title: "Space Energy Audit",
    desc: "A focused review of an existing space — identify what's holding momentum back and resolve it without major works.",
    benefits: ["Sleep & relationship issues", "Wealth & career flow", "Health room balancing"],
  },
];

export function Services() {
  return (
    <section id="services" className="py-24 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.22em] text-brand">— Services</p>
            <h2 className="mt-4 font-display font-bold text-foreground text-4xl lg:text-5xl leading-tight">
              Practical advisory,<br />
              <span className="italic font-light text-muted-foreground">measured outcomes.</span>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md text-base leading-relaxed">
            Each engagement begins with listening — to the space, to the residents, and to the
            decisions you are weighing. The recommendations follow.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {services.map((s, i) => (
            <article
              key={s.title}
              className={`group relative flex flex-col rounded-3xl border border-border bg-background p-7 lg:p-8 transition-all duration-500 hover:-translate-y-1 hover:border-brand/40 hover:shadow-xl hover:shadow-brand/5 ${
                i === 0 ? "lg:col-span-2 lg:row-span-1 bg-gradient-to-br from-secondary/60 to-background" : ""
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="grid h-12 w-12 place-items-center rounded-xl bg-brand/10 text-brand">
                  <s.icon size={20} />
                </span>
                <ArrowUpRight
                  size={20}
                  className="text-muted-foreground transition-all group-hover:text-brand group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </div>
              <h3 className="mt-6 font-display text-2xl font-semibold text-foreground">
                {s.title}
              </h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed flex-1">
                {s.desc}
              </p>
              <ul className="mt-6 space-y-1.5">
                {s.benefits.map((b) => (
                  <li key={b} className="flex items-center gap-2 text-xs text-foreground/80">
                    <span className="h-1 w-1 rounded-full bg-sage" />
                    {b}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className="mt-7 inline-flex items-center gap-1.5 text-sm font-medium text-brand"
              >
                Enquire <ArrowUpRight size={14} />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}