import type { CSSProperties } from "react";
import { SectionHead } from "../../../components/ui/SectionHead";
import { PROCESS_STEPS } from "../content";
import { usePinnedProcess } from "../hooks/usePinnedProcess";

export function ProcessSection() {
  const { sectionRef, pinRef, activeStep } = usePinnedProcess(PROCESS_STEPS.length);

  return (
    <section className="process-section process-scroll" ref={sectionRef}>
      <div className="process-pin" ref={pinRef}>
        <SectionHead index="05" label="Process" axis="PROCESS" />
        <div className="process-layout">
          <div className="process-intro">
            <h2>From first idea<br />to launch — and beyond</h2>
            <p>A clear, collaborative process that keeps every stage, decision and deliverable moving forward</p>
          </div>
          <ol className="process-track" data-active={activeStep} style={{ "--process-index": activeStep } as CSSProperties}>
            {PROCESS_STEPS.map((step, index) => (
              <li className={`process-step ${index <= activeStep ? "active" : ""}`} key={step.title}>
                <span aria-current={index === activeStep ? "step" : undefined}>{step.number}</span><h3>{step.title}</h3><p>{step.copy}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
