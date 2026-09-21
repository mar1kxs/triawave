import { MotionHeading } from "../../../components/ui/MotionHeading";
import { SectionHead } from "../../../components/ui/SectionHead";
import { PROCESS_STEPS } from "../content";
import { useProcessProgress } from "../hooks/useProcessProgress";

export function ProcessSection() {
  const { sectionRef, activeStep } = useProcessProgress(PROCESS_STEPS.length);

  return (
    <section className="process-section process-scroll" ref={sectionRef}>
      <SectionHead index="05" label="Process" axis="PROCESS" />
      <div className="process-layout">
        <div className="process-intro">
          <MotionHeading>From first idea<br />to launch — and beyond</MotionHeading>
          <p>A clear, collaborative process that keeps every stage, decision and deliverable moving forward</p>
        </div>
        <ol className="process-track" data-active={activeStep}>
          {PROCESS_STEPS.map((step, index) => (
            <li className={`process-step ${index <= activeStep ? "active" : ""}`} key={step.title}>
              <span aria-current={index === activeStep ? "step" : undefined}>{step.number}</span><h3>{step.title}</h3><p>{step.copy}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
