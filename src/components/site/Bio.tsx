import { useState } from "react";
import portrait from "@/assets/yu-cheng-portrait.jpg";

const credentials = [
  { year: "2009", title: "Apprenticed under HK Grandmaster lineage" },
  { year: "2014", title: "First commercial advisory engagement" },
  { year: "2019", title: "Period 9 specialisation & research" },
  { year: "2024", title: "800+ residential & commercial audits" },
];

export function Bio() {
  const [expanded, setExpanded] = useState(false);

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
            <p className="text-xs uppercase tracking-[0.22em] text-brand">— About</p>
            <h2 className="mt-4 font-display font-bold text-foreground text-4xl lg:text-5xl leading-tight">
              The science of your space,<br />
              <span className="italic font-light text-muted-foreground">without the superstition.</span>
            </h2>
            <div className="mt-8 space-y-5 text-muted-foreground text-base lg:text-lg leading-relaxed max-w-2xl">
              <p>
                Master Yu Cheng is a Singapore-based Feng Shui practitioner with over 15 years of professional experience, specialising in residential and commercial spatial planning, home selection, and Period 9 energy analysis. His path into the discipline began with a costly and disillusioning encounter with mainstream practice — an experience that drove him to seek out the classical source. He spent four to five years travelling regularly to Taiwan to study under formal instruction, developing a rigorous, unconventional mastery of Flying Stars that sets his work apart from what is commonly taught. Alongside that technical foundation, Yu Cheng brings a rare sensitivity to spatial energy — the ability to perceive, in physical space, the precise energetic qualities that classical Feng Shui describes in theory. No ornaments. No renovation. No deflection. Just fifteen years of work grounded in the real thing.
              </p>
            </div>

            <div className="mt-6 inline-flex flex-wrap items-center gap-x-3 gap-y-1 rounded-full border border-border bg-background px-5 py-2.5 text-xs text-foreground">
              <span className="font-display text-sm font-semibold text-brand">23,000+</span>
              <span className="text-muted-foreground">followers across platforms</span>
              <span className="text-muted-foreground/50">·</span>
              <span className="text-muted-foreground">Available for remote consultations worldwide</span>
            </div>

            {expanded && (
              <div className="mt-8 space-y-5 text-muted-foreground text-base lg:text-lg leading-relaxed max-w-2xl">
                <p>
                  Master Yu Cheng did not arrive at Feng Shui through lineage or tradition. He arrived through disappointment — and the refusal to accept it.
                </p>
                <p>
                  When purchasing his first home, Yu Cheng turned to a local Feng Shui consultant, paying close to S$888 for what he hoped would be authoritative guidance. What followed was a familiar but costly pattern: recommendations centred almost entirely on the purchase of ornaments, totalling nearly S$10,000. Sleep quality worsened. His professional work remained stagnant. When he raised his concerns, the consultant's response was consistent — deflect to destiny, deflect to luck, and recommend yet another round of readings and remedies. The discipline, as it was being sold to him, appeared to be little more than an elaborate exercise in self-reassurance.
                </p>
                <p>
                  Yet Yu Cheng could not bring himself to dismiss Feng Shui entirely. The instinct that something genuine lay beneath the commerce proved correct. It was a chance encounter with a retired physics teacher — a man who had spent years quietly self-studying the classical texts — that changed the trajectory entirely. Through him, Yu Cheng was introduced to the foundational writings of a revered master of classical Chinese metaphysics. Reading those texts, he recognised immediately what had been missing: what he had experienced was not authentic Feng Shui. It was a pale, commercially convenient imitation of it.
                </p>
                <p>
                  That recognition set him on a different path entirely. He sought out formal instruction in classical metaphysics, travelling to Taiwan every fortnight or month over the course of four to five years to study the discipline at its source. He kept flying. He kept studying. And over time, the classical frameworks became not just familiar but fluent and more pronounced.
                </p>
                <p>
                  That training laid the foundation for what would become over 15 years of professional practice. His work spans residential and commercial spaces, with a particular specialisation in home selection, layout planning, and the energetic landscape of Period 9.
                </p>
                <p>
                  At the core of his practice is a rigorous and unconventional application of Flying Stars — one that departs significantly from the simplified, widely circulated versions that dominate the mainstream Feng Shui market. Where conventional instruction often reduces Flying Stars to a formulaic overlay, Yu Cheng's approach engages the system as it was originally conceived: dynamic, spatially precise, and deeply responsive to the specific energetic conditions of each individual environment.
                </p>
                <p>
                  This technical foundation is complemented by something less easily taught.
                </p>
                <p>
                  Over years of practice, Yu Cheng developed an acute sensitivity to the spatial expression of those energies — the ability to perceive, in physical space, the precise qualities that the Flying Stars framework maps in theory. The stagnation that settles in a corridor. The vitality that concentrates at a threshold. The quiet heaviness in a room that no floor plan fully accounts for. These are not impressions or intuitions in the vague sense — they are the direct, embodied reading of the same energetic field that the classical system describes. Calculation and perception, working in concert.
                </p>
                <p>
                  He requires no ornaments. He recommends no unnecessary renovations. He does not traffic in destiny deflection or supplementary remedies. What he offers is Feng Shui as it was always meant to be practised: precise, accountable, and genuinely effective.
                </p>
              </div>
            )}

            <button
              onClick={() => setExpanded((v) => !v)}
              className="mt-8 inline-flex items-center gap-2 rounded-full border border-border bg-background px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-secondary"
            >
              {expanded ? "Close ←" : "Read the full story →"}
            </button>

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
