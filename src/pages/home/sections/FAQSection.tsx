import { MotionHeading } from "../../../components/ui/MotionHeading";
import { useState } from "react";
import { SectionHead } from "../../../components/ui/SectionHead";
import { FAQS } from "../content";

export function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);
  return (
    <section className="faq-section">
      <SectionHead index="08" label="Questions" axis="FAQ" />
      <div className="faq-layout">
        <div className="faq-intro"><MotionHeading>Frequently<br />asked</MotionHeading><p>For brands that need a strong identity and a clear path from product to purchase.</p></div>
        <div className="faq-list">
          {FAQS.map(([question, answer], index) => (
            <article className={open === index ? "faq-item open" : "faq-item"} key={question}>
              <button type="button" aria-expanded={open === index} onClick={() => setOpen(open === index ? null : index)}>
                <span>{String(index + 1).padStart(2, "0")}</span><strong>{question}</strong><b>{open === index ? "−" : "+"}</b>
              </button>
              <div className="faq-answer"><p>{answer}</p></div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
