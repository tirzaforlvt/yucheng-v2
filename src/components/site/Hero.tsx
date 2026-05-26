import { ArrowRight, MessageCircle, Compass, Building2, Award, Sparkles } from "lucide-react";
import heroImg from "@/assets/hero-space.jpg";

const badges = [
  { icon: Award, label: "15+ Years Experience" },
  { icon: Sparkles, label: "Period 9 Expert" },
  { icon: Compass, label: "HK Grandmaster Disciple" },
  { icon: Building2, label: "No Renovation Approach" },
];

export function Hero() {
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
              Helping homeowners and businesses make better property and space decisions
              through practical Feng Shui strategies — without unnecessary renovations or
              ornaments.
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
                  <span className="text-xs font-medium text-foreground leading-snug">
                    {b.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-5 reveal" style={{ animationDelay: "0.15s" }}>
            <div className="relative">
              <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-brand/10 to-sage/20 blur-2xl" />
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.75rem] border border-border/70 shadow-2xl shadow-brand/10">
                <img
                  src={heroImg}
                  alt="Modern Singapore residence interior demonstrating spacious Feng Shui composition"
                  width={1080}
                  height={1350}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-background/95 via-background/40 to-transparent p-6">
                  <p className="text-xs uppercase tracking-[0.22em] text-muted-foreground">Featured Audit</p>
                  <p className="mt-1 font-display text-lg text-foreground">River-facing Sky Residence · D10</p>
                </div>
              </div>

              {/* Floating stat card */}
              <div className="absolute -left-6 bottom-12 hidden md:block rounded-2xl border border-border bg-background/95 backdrop-blur p-5 shadow-xl shadow-foreground/5">
                <p className="font-display text-3xl font-bold text-foreground">98%</p>
                <p className="mt-1 text-xs text-muted-foreground max-w-[140px] leading-snug">
                  client satisfaction across 800+ consultations
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}