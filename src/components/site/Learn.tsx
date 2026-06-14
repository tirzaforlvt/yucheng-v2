import { Play, Youtube, ArrowUpRight } from "lucide-react";

const CHANNEL = "https://www.youtube.com/@yuchengfengshui";

const videos = [
  {
    title: "Period 9 explained — what changes for your home",
    meta: "Featured · Fundamentals",
  },
  { title: "Walking through a residential audit", meta: "Methodology" },
  { title: "Common BTO layout problems", meta: "Property" },
  { title: "Why ornaments rarely fix anything", meta: "Practice" },
];

export function Learn() {
  const [featured, ...rest] = videos;
  return (
    <section id="learn" className="py-24 lg:py-36 bg-secondary/40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div className="max-w-2xl">
            <p className="text-xs uppercase tracking-[0.22em] text-brand">— Learn From Yu Cheng</p>
            <h2 className="mt-4 font-display font-bold text-foreground text-4xl lg:text-5xl leading-tight">
              Learn From Yu Cheng
            </h2>
            <p className="mt-5 text-muted-foreground text-base lg:text-lg max-w-xl leading-relaxed">
              Practical Feng Shui insights, property analyses and educational content.
            </p>
          </div>
          <a
            href={CHANNEL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-3 text-sm font-medium text-background transition-colors hover:bg-brand"
          >
            <Youtube size={16} /> Visit YouTube Channel
          </a>
        </div>

        <a
          href={CHANNEL}
          target="_blank"
          rel="noopener noreferrer"
          className="group block rounded-3xl overflow-hidden border border-border bg-background"
        >
          <div className="relative aspect-video bg-foreground/90">
            <iframe
              className="absolute inset-0 h-full w-full"
              src="https://www.youtube.com/embed?listType=user_uploads&list=yuchengfengshui"
              title="Featured video from Yu Cheng Feng Shui"
              loading="lazy"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <div className="p-6 lg:p-8 flex items-center justify-between gap-4">
            <div>
              <p className="text-[10px] uppercase tracking-[0.22em] text-brand">{featured.meta}</p>
              <h3 className="mt-2 font-display text-2xl lg:text-3xl font-semibold text-foreground">
                {featured.title}
              </h3>
            </div>
            <span className="inline-flex items-center gap-1 text-sm text-muted-foreground group-hover:text-foreground transition-colors shrink-0">
              Watch on YouTube <ArrowUpRight size={14} />
            </span>
          </div>
        </a>

        <div className="mt-6 grid md:grid-cols-3 gap-6">
          {rest.map((v) => (
            <a
              key={v.title}
              href={CHANNEL}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-2xl overflow-hidden border border-border bg-background"
            >
              <div className="relative aspect-video bg-gradient-to-br from-brand/15 via-foreground/5 to-sage/15 grid place-items-center">
                <span className="grid h-14 w-14 place-items-center rounded-full bg-background/90 text-brand shadow-md transition-transform group-hover:scale-105">
                  <Play size={20} fill="currentColor" />
                </span>
              </div>
              <div className="p-5">
                <p className="text-[10px] uppercase tracking-[0.22em] text-brand">{v.meta}</p>
                <h4 className="mt-2 font-display text-lg font-semibold text-foreground leading-snug group-hover:text-brand transition-colors">
                  {v.title}
                </h4>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}