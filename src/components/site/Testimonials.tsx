import { useState } from "react";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";

const items = [
  {
    quote: "Practical and easy to implement. Yu Cheng explained every recommendation in plain language — no mystery, no upsells.",
    name: "C. Lim",
    role: "Condo Owner · Singapore",
  },
  {
    quote: "Unlike traditional Feng Shui advice, this fit perfectly into our modern home. We didn't have to change our interior style at all.",
    name: "J. & M. Tan",
    role: "BTO Homeowners · Tampines",
  },
  {
    quote: "Helped us choose the right unit before purchase. The comparative analysis alone was worth the engagement.",
    name: "R. Wong",
    role: "Property Investor · D15",
  },
  {
    quote: "Professional and highly knowledgeable. Our office finally feels grounded — productivity has noticeably improved.",
    name: "S. Goh",
    role: "SME Director · CBD",
  },
];

export function Testimonials() {
  const [i, setI] = useState(0);
  const next = () => setI((p) => (p + 1) % items.length);
  const prev = () => setI((p) => (p - 1 + items.length) % items.length);
  const t = items[i];

  return (
    <section className="py-24 lg:py-32 bg-brand text-brand-foreground relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.06] bg-[radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] [background-size:24px_24px]" />
      <div className="mx-auto max-w-5xl px-6 lg:px-10 relative">
        <div className="flex items-center justify-between mb-12">
          <p className="text-xs uppercase tracking-[0.22em] text-brand-foreground/70">— Testimonials</p>
          <div className="flex gap-2">
            <button onClick={prev} aria-label="Previous" className="grid h-10 w-10 place-items-center rounded-full border border-brand-foreground/30 transition-colors hover:bg-brand-foreground/10">
              <ChevronLeft size={18} />
            </button>
            <button onClick={next} aria-label="Next" className="grid h-10 w-10 place-items-center rounded-full border border-brand-foreground/30 transition-colors hover:bg-brand-foreground/10">
              <ChevronRight size={18} />
            </button>
          </div>
        </div>

        <Quote size={48} className="text-brand-foreground/30" />
        <blockquote
          key={t.quote}
          className="reveal mt-6 font-display text-3xl lg:text-5xl leading-[1.15] font-light tracking-tight"
        >
          “{t.quote}”
        </blockquote>

        <div className="mt-10 flex items-center justify-between flex-wrap gap-4">
          <div className="flex items-center gap-4">
            <span className="grid h-12 w-12 place-items-center rounded-full bg-brand-foreground/15 font-display font-semibold">
              {t.name.split(" ").map((s) => s[0]).join("")}
            </span>
            <div>
              <p className="font-medium">{t.name}</p>
              <p className="text-sm text-brand-foreground/70">{t.role}</p>
            </div>
          </div>
          <div className="flex gap-1">
            {Array.from({ length: 5 }).map((_, idx) => (
              <Star key={idx} size={16} fill="currentColor" className="text-sage" />
            ))}
          </div>
        </div>

        <div className="mt-10 flex gap-1.5">
          {items.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setI(idx)}
              className={`h-1 rounded-full transition-all ${idx === i ? "w-10 bg-brand-foreground" : "w-4 bg-brand-foreground/30"}`}
              aria-label={`Show testimonial ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}