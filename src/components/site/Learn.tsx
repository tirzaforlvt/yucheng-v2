import { Play, Youtube, ArrowUpRight } from "lucide-react";

const CHANNEL = "https://www.youtube.com/@yuchengfengshui";

const FEATURED_VIDEO = {
title: "Money Matters: The Real Feng Shui Key to Wealth and Success",
category: "Featured Video",
description:
"Discover how practical Feng Shui principles influence wealth, opportunities, and long-term success. A modern perspective on creating an environment that supports growth and prosperity.",
videoUrl: "https://www.youtube.com/watch?v=_71sw8MJXBo",
thumbnail:
"https://img.youtube.com/vi/_71sw8MJXBo/hqdefault.jpg",
};

export function Learn() {
return ( <section id="learn" className="py-24 lg:py-36 bg-secondary/40"> <div className="mx-auto max-w-7xl px-6 lg:px-10"> <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14"> <div className="max-w-2xl"> <p className="text-xs uppercase tracking-[0.22em] text-brand">
— Learn From Yu Cheng </p>

```
        <h2 className="mt-4 font-display font-bold text-foreground text-4xl lg:text-5xl leading-tight">
          Learn From Yu Cheng
        </h2>

        <p className="mt-5 text-muted-foreground text-base lg:text-lg max-w-xl leading-relaxed">
          Practical Feng Shui insights, property analyses, and educational
          content for modern homeowners and businesses.
        </p>
      </div>

      <a
        href={CHANNEL}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-3 text-sm font-medium text-background transition-colors hover:bg-brand"
      >
        <Youtube size={16} />
        Visit YouTube Channel
      </a>
    </div>

    <div className="overflow-hidden rounded-3xl border border-border bg-background shadow-sm">
      <a
        href={FEATURED_VIDEO.videoUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        <div className="relative aspect-video overflow-hidden">
          <img
            src={FEATURED_VIDEO.thumbnail}
            alt={FEATURED_VIDEO.title}
            className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
          />

          <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/90 px-6 py-3 text-sm font-medium text-black shadow-lg">
              <Play size={14} fill="currentColor" />
              Watch Featured Video
            </div>
          </div>
        </div>
      </a>

      <div className="p-6 lg:p-8">
        <p className="text-[10px] uppercase tracking-[0.22em] text-brand">
          {FEATURED_VIDEO.category}
        </p>

        <h3 className="mt-2 font-display text-2xl lg:text-3xl font-semibold text-foreground">
          {FEATURED_VIDEO.title}
        </h3>

        <p className="mt-4 max-w-3xl text-muted-foreground leading-relaxed">
          {FEATURED_VIDEO.description}
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <a
            href={FEATURED_VIDEO.videoUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-brand px-5 py-3 text-sm font-medium text-white transition-opacity hover:opacity-90"
          >
            Watch on YouTube
            <ArrowUpRight size={14} />
          </a>

          <a
            href={CHANNEL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-3 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
          >
            View More Videos
          </a>
        </div>
      </div>
    </div>
  </div>
</section>
```

);
}
