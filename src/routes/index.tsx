import { createFileRoute } from "@tanstack/react-router";
import { Nav, WhatsAppFloat, MobileStickyCTA } from "@/components/site/Nav";
import { Hero } from "@/components/site/Hero";
import { Bio } from "@/components/site/Bio";
import { Services } from "@/components/site/Services";
import { Cases } from "@/components/site/Cases";
import { Testimonials } from "@/components/site/Testimonials";
import { FAQ } from "@/components/site/FAQ";
import { Tips } from "@/components/site/Tips";
import { Store } from "@/components/site/Store";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Yu Cheng Feng Shui — Modern Feng Shui Consultancy · Singapore" },
      {
        name: "description",
        content:
          "Practical Feng Shui for modern Singapore homes, offices and property decisions. 15+ years experience, Hong Kong grandmaster lineage, no renovations or ornaments required.",
      },
      { property: "og:title", content: "Yu Cheng Feng Shui — Feng Shui for the Modern Era" },
      {
        property: "og:description",
        content:
          "Strategic Feng Shui for modern Singaporean homeowners, investors and businesses.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Nav />
      <main>
        <Hero />
        <Bio />
        <Services />
        <Cases />
        <Testimonials />
        <Tips />
        <Store />
        <Contact />
      </main>
      <Footer />
      <WhatsAppFloat />
      <MobileStickyCTA />
    </div>
  );
}
