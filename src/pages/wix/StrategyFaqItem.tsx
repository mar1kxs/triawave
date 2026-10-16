import { useId, useState } from "react";

export function StrategyFaqItem({ question, answer }: { question: string; answer: string }) {
  const [open, setOpen] = useState(false);
  const id = useId();

  return (
    <div className="strategy-faq-item" data-open={open}>
      <h3>
        <button className="strategy-faq-trigger" id={`${id}-question`} type="button" aria-expanded={open} aria-controls={`${id}-answer`} onClick={() => setOpen((value) => !value)}>
          {question}<span className="strategy-faq-icon" aria-hidden="true" />
        </button>
      </h3>
      <div className="strategy-faq-answer" id={`${id}-answer`} role="region" aria-labelledby={`${id}-question`} aria-hidden={!open} inert={!open}>
        <div className="strategy-faq-answer-inner"><p>{answer}</p></div>
      </div>
    </div>
  );
}
