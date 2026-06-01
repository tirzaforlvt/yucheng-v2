import {
  ArrowRight,
  MessageCircle,
  Compass,
  Building2,
  Award,
  Sparkles,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { useEffect, useState } from "react";
import heroImg from "@/assets/hero-space.jpg";

const badges = [
  { icon: Award, label: "15+ Years Experience" },
  { icon: Sparkles, label: "Period 9 Expert" },
  { icon: Compass, label: "HK Grandmaster Disciple" },
  { icon: Building2, label: "No Renovation Approach" },
];

const u = (id: string) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=1080&h=1350&q=80`;

const slides = [
  { flag: "🇸🇬", city: "Singapore", type: "Residential Audit", img: heroImg },
  { flag: "🇲🇾", city: "Kuala Lumpur", type: "Commercial Audit", img: u("1497366216548-37526070297c") },
  { flag: "🇲🇾", city: "Penang", type: "Home Selection", img: u("1505691938895-1758d7feb511") },
  { flag: "🇲🇾", city: "Johor", type: "Residential Audit", img: u("1560448204-e02f11c3d0e2") },
  { flag: "🇹🇼", city: "Taipei", type: "Space Energy Audit", img: u("1493809842364-78817add7ffb") },
  { flag: "🇭🇰", city: "Hong Kong", type: "Commercial Audit", img: u("1497366811353-6870744d04b2") },
  { flag: "🇨🇳", city: "Guangzhou", type: "Residential Audit", img: u("1600585154340-be6161a56a0c") },
  { flag: "🇫🇮", city: "Helsinki", type: "Remote Consultation", img: u("1554995207-c18c203602cb") },
  { flag: "🇳🇴", city: "Stavanger", type: "Remote Consultation", img: u("1513584684374-8bab748fbf90") },
];

export function Hero() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, 5000);
    return () => clearInterval(id);
  }, []);

  const go = (dir: number) => setIndex((i) => (i + dir + slides.length) % slides.length);

  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-44 lg:pb-32 overflow-hidden">
      {/* Subtle background grain */}
      <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-secondary/40 via-background to-background" />
      <div className="pointer-events-none absolute -top-40 -right-40 -z-10 h-[520px] w-[520px] rounded-full bg-sage/15 blur-3xl" />
      <div className="pointer-events-none absolute top-1/3 -left-40 -z-10 h-[420px] w-[420px] rounded-full bg-brand/10 blur-3xl" />

      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-7 reveal">
            <div className="inline-flex items-center gap-2 rounded-full border border-border bg-background/60 backdrop-blur px-4 py-1.5 text-xs uppercase tracking-[0.22em] text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-sage" />
              Singapore · 玉成风水
            </div>

            <h1 className="mt-6 font-display font-bold text-foreground text-[2.75rem] sm:text-6xl lg:text-7xl leading-[1.02] tracking-tight">
              Feng Shui for the
              <br />
              <span className="italic font-light text-brand">Modern Era.</span>
            </h1>

            <p className="mt-7 max-w-xl text-lg text-muted-foreground leading-relaxed">
              Helping homeowners and businesses make better property and space decisions through practical Feng Shui
              strategies — without unnecessary renovations or ornaments.
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              <a
                href="#contact"
                className="group inline-flex items-center gap-2 rounded-full bg-foreground px-7 py-3.5 text-sm font-medium text-background transition-all hover:bg-brand"
              >
                Book Consultation
                <ArrowRight size={16} className="transition-transform group-hover:translate-x-0.5" />
              </a>
              <a
                href="https://wa.me/+6588539455"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-7 py-3.5 text-sm font-medium text-foreground transition-all hover:border-sage hover:text-sage-foreground"
              >
                <MessageCircle size={16} /> WhatsApp Now
              </a>
            </div>

            <div className="mt-12 grid grid-cols-2 sm:grid-cols-4 gap-3">
              {badges.map((b) => (
                <div
                  key={b.label}
                  className="flex items-start gap-2.5 rounded-xl border border-border/70 bg-background/60 backdrop-blur px-3.5 py-3"
                >
                  <b.icon size={16} className="mt-0.5 text-brand shrink-0" />
                  <span className="text-xs font-medium text-foreground leading-snug">{b.label}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 reveal" style={{ animationDelay: "0.15s" }}>
            <div className="relative">
              <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-brand/10 to-sage/20 blur-2xl" />
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem] border border-border/70 shadow-2xl shadow-brand/10">
                {slides.map((s, i) => (
                  <img
                    key={s.city + s.type}
                    src={s.img}
                    alt={`${s.city} — ${s.type}`}
                    width={1080}
                    height={1350}
                    className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-[1200ms] ease-in-out ${
                      i === index ? "opacity-100" : "opacity-0"
                    }`}
                  />
                ))}

                {/* Bottom gradient for legibility */}
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-background/60 to-transparent" />

                {/* Location pill */}
                <div
                  key={index}
                  className="absolute bottom-5 left-5 inline-flex items-center gap-2.5 rounded-full border border-white/20 bg-background/40 backdrop-blur-md px-4 py-2 shadow-lg animate-fade-in"
                >
                  <span className="text-base leading-none">{slides[index].flag}</span>
                  <div className="flex flex-col leading-tight">
                    <span className="text-xs font-medium text-foreground">{slides[index].city}</span>
                    <span className="text-[10px] font-light text-muted-foreground">{slides[index].type}</span>
                  </div>
                </div>

                {/* Prev / Next arrows */}
                <button
                  type="button"
                  aria-label="Previous slide"
                  onClick={() => go(-1)}
                  className="absolute top-1/2 left-3 -translate-y-1/2 grid h-9 w-9 place-items-center rounded-full border border-white/20 bg-background/40 backdrop-blur-md text-foreground transition hover:bg-background/70"
                >
                  <ChevronLeft size={16} />
                </button>
                <button
                  type="button"
                  aria-label="Next slide"
                  onClick={() => go(1)}
                  className="absolute top-1/2 right-3 -translate-y-1/2 grid h-9 w-9 place-items-center rounded-full border border-white/20 bg-background/40 backdrop-blur-md text-foreground transition hover:bg-background/70"
                >
                  <ChevronRight size={16} />
                </button>

                {/* Dots */}
                <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex items-center gap-1.5">
                  {slides.map((s, i) => (
                    <button
                      key={s.city + s.type}
                      type="button"
                      aria-label={`Go to slide ${i + 1}`}
                      onClick={() => setIndex(i)}
                      className={`h-1.5 rounded-full transition-all ${
                        i === index ? "w-5 bg-foreground" : "w-1.5 bg-foreground/40 hover:bg-foreground/60"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
