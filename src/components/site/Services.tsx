import { Home, Building, MapPin, CalendarCheck, Activity, FileSearch, Briefcase, ArrowUpRight } from "lucide-react";

type Service = {
  icon: React.ComponentType<{ size?: number }>;
  title: string;
  desc: string;
  benefits: string[];
};

const residentialServices: Service[] = [
  {
    icon: Home,
    title: "Residential Feng Shui Audit",
    desc: "In-depth audit for BTOs, condos, and landed homes calibrated to the residents, the period, and the building's natural energy flow.",
    benefits: ["On-site assessment", "Period 9 calibration", "Floor plan recommendations"],
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
    desc: "Auspicious dates for moving in, renovation kick-off, and key milestones — chosen to align with your BaZi.",
    benefits: ["Move-in dates", "Renovation start dates", "Business openings"],
  },
  {
    icon: Activity,
    title: "Space Energy Audit",
    desc: "A focused review of an existing space — identify what's holding momentum back and resolve it without major works.",
    benefits: ["Sleep & relationship issues", "Wealth & career flow", "Health room balancing"],
  },
];

const commercialServices: Service[] = [
  {
    icon: Building,
    title: "Commercial Feng Shui Audit",
    desc: "Office layouts, retail spaces, and SME premises designed to support clarity, productivity, and steady business momentum.",
    benefits: ["Workspace orientation", "Reception & cashier placement", "Director seating strategy"],
  },
  {
    icon: Briefcase,
    title: "Business Date Selection",
    desc: "Strategic timing for launches, signings, and key business milestones — aligned with the energy of your space and your BaZi.",
    benefits: ["Business openings", "Contract signings", "Staff onboarding dates"],
  },
  {
    icon: FileSearch,
    title: "Commercial Property Selection",
    desc: "Evaluate commercial units, shophouses, and office floors before lease or purchase — facing, surroundings, and period energy assessed.",
    benefits: ["Pre-lease shortlisting", "Site accompaniment", "Floor plan analysis"],
  },
];

function ServiceCard({ s }: { s: Service }) {
  return (
    <article className="group relative flex flex-col rounded-3xl border border-border bg-background p-7 lg:p-8 transition-all duration-500 hover:-translate-y-1 hover:border-brand/40 hover:shadow-xl hover:shadow-brand/5">
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
  );
}

export function Services() {
  return (
    <>
      <section id="residential" className="py-24 lg:py-36 scroll-mt-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="max-w-3xl mb-16">
            <p className="text-xs uppercase tracking-[0.22em] text-brand">— Residential</p>
            <h2 className="mt-4 font-display font-bold text-foreground text-4xl lg:text-5xl leading-tight">
              Your home is a living system.<br />
              <span className="italic font-light text-muted-foreground">Let's read it properly.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-5">
            {residentialServices.map((s) => (
              <ServiceCard key={s.title} s={s} />
            ))}
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex items-center gap-6">
          <span className="h-px flex-1 bg-border" />
          <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Commercial Practice</span>
          <span className="h-px flex-1 bg-border" />
        </div>
      </div>

      <section id="commercial" className="py-24 lg:py-36 scroll-mt-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="max-w-3xl mb-16">
            <p className="text-xs uppercase tracking-[0.22em] text-brand">— Commercial</p>
            <h2 className="mt-4 font-display font-bold text-foreground text-4xl lg:text-5xl leading-tight">
              The energy of your business environment is not incidental.<br />
              <span className="italic font-light text-muted-foreground">It is strategic.</span>
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {commercialServices.map((s) => (
              <ServiceCard key={s.title} s={s} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}