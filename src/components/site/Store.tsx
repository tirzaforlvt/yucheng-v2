import { MessageCircle, Instagram, BookOpen, FileText, Video } from "lucide-react";

const products = [
  {
    icon: BookOpen,
    title: "Period 9 Home Guide",
    desc: "Concise PDF guide to navigating the new 20-year period in a Singapore home.",
    price: "S$48",
  },
  {
    icon: FileText,
    title: "Pre-Purchase Audit (Lite)",
    desc: "Remote shortlisting review of up to 3 properties via floor plan submission.",
    price: "S$280",
  },
  {
    icon: Video,
    title: "Digital Consultation (60 min)",
    desc: "One-on-one video session for specific questions on home, business, or timing.",
    price: "S$220",
  },
];

export function Store() {
  return (
    <section id="store" className="py-24 lg:py-36 bg-secondary/40">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-12 items-end mb-14">
          <div className="lg:col-span-7">
            <p className="text-xs uppercase tracking-[0.22em] text-brand">— Store</p>
            <h2 className="mt-4 font-display font-bold text-foreground text-4xl lg:text-5xl leading-tight">
              Digital products,<br />
              <span className="italic font-light text-muted-foreground">delivered with care.</span>
            </h2>
          </div>
          <div className="lg:col-span-5 flex flex-wrap gap-3">
            <a
              href="https://wa.me/6500000000"
              className="inline-flex items-center gap-2 rounded-full bg-sage text-sage-foreground px-5 py-3 text-sm font-medium hover:opacity-90 transition-opacity"
            >
              <MessageCircle size={16} /> Shop via WhatsApp
            </a>
            <a
              href="https://instagram.com"
              className="inline-flex items-center gap-2 rounded-full border border-border bg-background px-5 py-3 text-sm font-medium text-foreground hover:border-brand transition-colors"
            >
              <Instagram size={16} /> View Instagram
            </a>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {products.map((p) => (
            <article key={p.title} className="group rounded-3xl border border-border bg-background p-7 lg:p-8 flex flex-col transition-all hover:-translate-y-1 hover:shadow-xl hover:shadow-foreground/5">
              <span className="grid h-12 w-12 place-items-center rounded-xl bg-sage/15 text-sage-foreground">
                <p.icon size={20} />
              </span>
              <h3 className="mt-6 font-display text-xl font-semibold text-foreground">{p.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed flex-1">{p.desc}</p>
              <div className="mt-6 flex items-center justify-between border-t border-border pt-5">
                <span className="font-display text-2xl font-bold text-foreground">{p.price}</span>
                <a
                  href="https://wa.me/6500000000"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-brand"
                >
                  Order →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}