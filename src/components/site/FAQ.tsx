import { useState } from "react";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "How is your approach different from other Feng Shui consultants?",
    answer:
      "Most mainstream Feng Shui practice relies heavily on ornaments, generic cures, and simplified formulas. Yu Cheng's work is grounded in classical Flying Stars as it was originally taught — dynamic, spatially precise, and specific to your environment. No ornaments. No unnecessary renovations. No deflection.",
  },
  {
    question: "Do I need to renovate my home before or after a consultation?",
    answer:
      "No. The methodology does not require renovation as a condition of effectiveness. Most recommendations involve spatial orientation, placement, and timing — changes that work within your existing layout.",
  },
  {
    question: "How long does a residential consultation take?",
    answer:
      "An on-site residential audit typically takes two to three hours. A written summary of recommendations is provided after the session.",
  },
  {
    question: "Can you consult remotely?",
    answer:
      "Yes. Remote consultations are available for clients outside Singapore. A detailed floor plan, facing direction, and move-in date are required. Several past engagements in Helsinki, Stavanger, Taipei, and Hong Kong have been conducted fully remotely.",
  },
  {
    question: "What is Period 9 and why does it matter?",
    answer:
      "Period 9 is a 20-year cycle in the classical Feng Shui system that began in 2024. Each period shifts which energetic sectors of a space become active, prosperous, or challenging. Homes and offices audited under the correct period framework are calibrated to current conditions — not outdated ones.",
  },
  {
    question: "I've consulted another master before. Is it worth starting again?",
    answer:
      "That depends entirely on what you received. If the prior consultation resulted in meaningful, practical recommendations you could verify — it may have been sound. If it resulted primarily in ornament purchases, vague deflection, or advice that did not hold — then yes, a second opinion grounded in classical method is worth the conversation. You should get Feng Shui right the first time. If you haven't, the next step is to do it properly.",
  },
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex((current) => (current === index ? null : index));
  };

  return (
    <section id="faq" className="py-24 lg:py-36 bg-background">
      <div className="mx-auto max-w-4xl px-6 lg:px-10">
        <p className="text-xs uppercase tracking-[0.22em] text-brand">— FAQ</p>
        <h2 className="mt-4 font-display font-bold text-foreground text-4xl lg:text-5xl leading-tight">
          Questions we hear often.
        </h2>
        <p className="mt-4 text-muted-foreground text-base lg:text-lg max-w-xl leading-relaxed">
          Answered plainly.
        </p>

        <div className="mt-14 space-y-0">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="border-b border-border first:border-t"
              >
                <button
                  onClick={() => toggle(index)}
                  className="flex w-full items-start justify-between gap-6 py-7 text-left transition-colors hover:text-brand"
                  aria-expanded={isOpen}
                >
                  <span className="font-display text-lg lg:text-xl font-semibold text-foreground leading-snug">
                    {faq.question}
                  </span>
                  <span className="mt-1 shrink-0">
                    {isOpen ? (
                      <Minus size={20} className="text-brand" />
                    ) : (
                      <Plus size={20} className="text-muted-foreground" />
                    )}
                  </span>
                </button>
                <div
                  className={`grid transition-[grid-template-rows] duration-300 ease-out ${
                    isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="pb-7 text-muted-foreground text-base lg:text-lg leading-relaxed max-w-2xl">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
