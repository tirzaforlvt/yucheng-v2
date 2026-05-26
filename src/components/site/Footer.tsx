import { MessageCircle, Instagram, Facebook } from "lucide-react";

const cols = [
  { title: "Navigate", links: [
    { href: "#home", label: "Home" },
    { href: "#bio", label: "Bio" },
    { href: "#services", label: "Services" },
    { href: "#cases", label: "Case Studies" },
  ]},
  { title: "Practice", links: [
    { href: "#tips", label: "Recommendations" },
    { href: "#store", label: "Store" },
    { href: "#contact", label: "Contact" },
    { href: "https://wa.me/+6588539455", label: "WhatsApp" },
  ]},
];

export function Footer() {
  return (
    <footer className="bg-foreground text-background pt-20 pb-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-md bg-background text-foreground font-display font-bold">
                玉
              </span>
              <div>
                <p className="font-display text-xl font-bold">Yu Cheng Feng Shui</p>
                <p className="text-xs uppercase tracking-[0.22em] text-background/60">玉成风水 · Singapore</p>
              </div>
            </div>
            <p className="mt-6 text-background/70 max-w-md leading-relaxed">
              Modern Feng Shui rooted in authentic Hong Kong lineage. Practical advisory for
              contemporary homes, offices, and property decisions in Singapore.
            </p>
            <a
              href="https://wa.me/+6588539455"
              className="mt-6 inline-flex items-center gap-2 rounded-full bg-sage text-sage-foreground px-5 py-3 text-sm font-medium hover:opacity-90 transition-opacity"
            >
              <MessageCircle size={16} /> Chat on WhatsApp
            </a>
          </div>

          {cols.map((col) => (
            <div key={col.title} className="lg:col-span-2">
              <p className="text-xs uppercase tracking-[0.22em] text-background/50">{col.title}</p>
              <ul className="mt-5 space-y-3">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <a href={l.href} className="text-sm text-background/80 hover:text-background">
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div className="lg:col-span-3">
            <p className="text-xs uppercase tracking-[0.22em] text-background/50">Connect</p>
            <div className="mt-5 flex gap-3">
              <a href="https://wa.me/+6588539455" className="grid h-10 w-10 place-items-center rounded-full border border-background/20 hover:bg-background hover:text-foreground transition-colors">
                <MessageCircle size={16} />
              </a>
              <a href="https://www.instagram.com/yuchengfengshui" className="grid h-10 w-10 place-items-center rounded-full border border-background/20 hover:bg-background hover:text-foreground transition-colors">
                <Instagram size={16} />
              </a>
              <a href="https://www.facebook.com/yuchengfengshui" className="grid h-10 w-10 place-items-center rounded-full border border-background/20 hover:bg-background hover:text-foreground transition-colors">
                <Facebook size={16} />
              </a>
            </div>
            <p className="mt-6 text-xs text-background/60 leading-relaxed">
              By appointment only.<br />
              Singapore · Worldwide via video consultation.
            </p>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-background/10 flex flex-col md:flex-row justify-between items-start md:items-center gap-3 text-xs text-background/60">
          <p>© {new Date().getFullYear()} Yu Cheng Feng Shui · 玉成风水. All rights reserved.</p>
          <p>Crafted with intent · Singapore</p>
        </div>
      </div>
    </footer>
  );
}