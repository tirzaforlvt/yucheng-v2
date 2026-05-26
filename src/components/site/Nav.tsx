import { useEffect, useState } from "react";
import { Menu, X, MessageCircle } from "lucide-react";

const links = [
  { href: "#home", label: "Home" },
  { href: "#bio", label: "Bio" },
  { href: "#services", label: "Services" },
  { href: "#cases", label: "Case Study" },
  { href: "#tips", label: "Recommendations" },
  { href: "#store", label: "Store" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border/60"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        <a href="#home" className="flex items-center gap-3">
          <span className="grid h-9 w-9 place-items-center rounded-md bg-brand text-brand-foreground font-display font-bold">
            玉
          </span>
          <span className="flex flex-col leading-none">
            <span className="font-display text-lg font-bold tracking-tight text-foreground">
              Yu Cheng
            </span>
            <span className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
              Feng Shui
            </span>
          </span>
        </a>

        <nav className="hidden lg:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden md:inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-all hover:bg-brand"
          >
            Book Consultation
          </a>
          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden grid h-10 w-10 place-items-center rounded-md border border-border bg-background"
            aria-label="Menu"
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-border bg-background">
          <div className="flex flex-col px-6 py-4">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="py-3 text-base text-foreground border-b border-border/50 last:border-0"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-4 inline-flex justify-center rounded-full bg-foreground px-5 py-3 text-sm font-medium text-background"
            >
              Book Consultation
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

export function WhatsAppFloat() {
  return (
    <a
      href="https://wa.me/6500000000"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-40 group"
      aria-label="WhatsApp"
    >
      <span className="absolute inset-0 rounded-full bg-sage/40 [animation:ripple_2.4s_ease-out_infinite]" />
      <span className="relative grid h-14 w-14 place-items-center rounded-full bg-sage text-sage-foreground shadow-lg transition-transform group-hover:scale-105">
        <MessageCircle size={22} />
      </span>
    </a>
  );
}

export function MobileStickyCTA() {
  return (
    <div className="md:hidden fixed bottom-0 inset-x-0 z-40 border-t border-border bg-background/95 backdrop-blur-lg px-4 py-3 flex gap-2">
      <a
        href="https://wa.me/6500000000"
        className="flex-1 inline-flex items-center justify-center gap-2 rounded-full border border-sage/60 bg-sage/10 px-4 py-3 text-sm font-medium text-sage-foreground"
      >
        <MessageCircle size={16} /> WhatsApp
      </a>
      <a
        href="#contact"
        className="flex-1 inline-flex items-center justify-center rounded-full bg-foreground px-4 py-3 text-sm font-medium text-background"
      >
        Book Consultation
      </a>
    </div>
  );
}