import { useState, type FormEvent } from "react";
import { MessageCircle, Mail, MapPin, Clock, Instagram, Facebook } from "lucide-react";

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const inputCls =
    "w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-brand focus:ring-2 focus:ring-brand/15 transition-all";
  const labelCls = "block text-xs font-medium uppercase tracking-[0.12em] text-muted-foreground mb-2";

  return (
    <section id="contact" className="py-24 lg:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          <div className="lg:col-span-5">
            <p className="text-xs uppercase tracking-[0.22em] text-brand">— Contact</p>
            <h2 className="mt-4 font-display font-bold text-foreground text-4xl lg:text-5xl leading-tight">
              Begin a quiet<br />
              <span className="italic font-light text-muted-foreground">conversation.</span>
            </h2>
            <p className="mt-6 text-muted-foreground leading-relaxed max-w-md">
              Share a little about your space, your property decision, or what's on your mind.
              Most enquiries receive a response within 24 hours.
            </p>

            <div className="mt-10 space-y-4">
              {[
                { icon: MessageCircle, label: "WhatsApp", value: "+65 0000 0000" },
                { icon: Mail, label: "Email", value: "hello@yuchengfengshui.sg" },
                { icon: MapPin, label: "Studio", value: "By appointment · Singapore" },
                { icon: Clock, label: "Response", value: "Within 24 hours, weekdays" },
              ].map((c) => (
                <div key={c.label} className="flex items-start gap-4">
                  <span className="grid h-10 w-10 place-items-center rounded-xl bg-secondary text-brand shrink-0">
                    <c.icon size={16} />
                  </span>
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground">{c.label}</p>
                    <p className="mt-0.5 text-foreground text-sm">{c.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 flex gap-3">
              <a href="https://wa.me/+6588539455" className="grid h-11 w-11 place-items-center rounded-full border border-border hover:border-sage hover:text-sage-foreground transition-colors">
                <MessageCircle size={16} />
              </a>
              <a href="https://www.instagram.com/yuchengfengshui" className="grid h-11 w-11 place-items-center rounded-full border border-border hover:border-brand hover:text-brand transition-colors">
                <Instagram size={16} />
              </a>
              <a href="https://www.facebook.com/yuchengfengshui" className="grid h-11 w-11 place-items-center rounded-full border border-border hover:border-brand hover:text-brand transition-colors">
                <Facebook size={16} />
              </a>
            </div>
          </div>

          <div className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="rounded-3xl border border-border bg-background p-7 lg:p-10 shadow-sm"
            >
              {submitted ? (
                <div className="py-16 text-center">
                  <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-sage/20 text-sage-foreground">
                    <MessageCircle size={22} />
                  </div>
                  <h3 className="mt-6 font-display text-2xl font-semibold text-foreground">
                    Thank you — your enquiry is received.
                  </h3>
                  <p className="mt-3 text-muted-foreground">
                    Yu Cheng will personally reply within 24 hours, weekdays.
                  </p>
                </div>
              ) : (
                <>
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="name" className={labelCls}>Name</label>
                      <input id="name" required maxLength={100} className={inputCls} placeholder="Your name" />
                    </div>
                    <div>
                      <label htmlFor="email" className={labelCls}>Email</label>
                      <input id="email" type="email" required maxLength={255} className={inputCls} placeholder="you@email.com" />
                    </div>
                    <div>
                      <label htmlFor="phone" className={labelCls}>Phone</label>
                      <input id="phone" required maxLength={20} className={inputCls} placeholder="+65 ..." />
                    </div>
                    <div>
                      <label htmlFor="type" className={labelCls}>Property Type</label>
                      <select id="type" required className={inputCls}>
                        <option value="">Select…</option>
                        <option>HDB / BTO</option>
                        <option>Condominium</option>
                        <option>Landed</option>
                        <option>Commercial / Office</option>
                        <option>Other</option>
                      </select>
                    </div>
                    <div className="sm:col-span-2">
                      <label htmlFor="service" className={labelCls}>Service Interested In</label>
                      <select id="service" required className={inputCls}>
                        <option value="">Select…</option>
                        <option>Residential Feng Shui</option>
                        <option>Commercial Feng Shui</option>
                        <option>Home Selection & Planning</option>
                        <option>Property Date Selection</option>
                        <option>Space Energy Audit</option>
                      </select>
                    </div>
                    <div className="sm:col-span-2">
                      <label htmlFor="message" className={labelCls}>Message</label>
                      <textarea id="message" rows={5} maxLength={1000} className={inputCls} placeholder="Tell me a little about your space or property decision…" />
                    </div>
                  </div>

                  <div className="mt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                    <p className="text-xs text-muted-foreground">
                      By submitting, you agree to be contacted regarding your enquiry.
                    </p>
                    <button
                      type="submit"
                      className="inline-flex items-center justify-center rounded-full bg-foreground px-7 py-3.5 text-sm font-medium text-background hover:bg-brand transition-colors"
                    >
                      Send Enquiry
                    </button>
                  </div>
                </>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}