import { ArrowUpRight } from "lucide-react";
import compass from "@/assets/tip-compass.jpg";
import light from "@/assets/tip-light.jpg";
import plan from "@/assets/tip-plan.jpg";

const posts = [
  {
    img: compass,
    tag: "Fundamentals",
    title: "Period 9 Feng Shui, explained simply",
    read: "6 min read",
  },
  {
    img: plan,
    tag: "BTO",
    title: "Five common BTO Feng Shui mistakes to avoid",
    read: "5 min read",
  },
  {
    img: light,
    tag: "Home",
    title: "Choosing the right facing direction for your home",
    read: "7 min read",
  },
];

export function Tips() {
  return (
    <section id="insights" className="py-24 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.22em] text-brand">— Recommendations</p>
            <h2 className="mt-4 font-display font-bold text-foreground text-4xl lg:text-5xl leading-tight">
              Reading room.
            </h2>
            <p className="mt-5 text-muted-foreground text-base lg:text-lg max-w-xl leading-relaxed">
              Plain-language essays on Period 9, BaZi, and everyday Feng Shui decisions —
              written for homeowners, not practitioners.
            </p>
          </div>
          <a href="#" className="inline-flex items-center gap-2 text-sm font-medium text-foreground border-b border-foreground/40 hover:text-brand hover:border-brand transition-colors">
            View all writings <ArrowUpRight size={14} />
          </a>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {posts.map((p) => (
            <article key={p.title} className="group cursor-pointer">
              <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-grain">
                <img
                  src={p.img}
                  alt={p.title}
                  loading="lazy"
                  width={800}
                  height={600}
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="mt-5 flex items-center gap-3 text-xs uppercase tracking-[0.18em] text-muted-foreground">
                <span className="rounded-full bg-sage/15 px-3 py-1 text-sage-foreground">{p.tag}</span>
                <span>{p.read}</span>
              </div>
              <h3 className="mt-3 font-display text-xl font-semibold text-foreground leading-snug group-hover:text-brand transition-colors">
                {p.title}
              </h3>
              <span className="mt-3 inline-flex items-center gap-1 text-sm text-muted-foreground group-hover:text-foreground">
                Read more <ArrowUpRight size={14} />
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}