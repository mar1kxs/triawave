import { InnerSectionLabel } from "./InnerPageCTA";

type ProcessStep = {
  title: string;
  copy: string;
};

export function ServiceProcessSection({
  steps,
  headingNouns = ["conversation", "direction", "plan"],
}: {
  steps: readonly ProcessStep[];
  headingNouns?: readonly [string, string, string];
}) {
  return (
    <section className="service-process">
      <InnerSectionLabel number="04" title="Working with us" axis="Process" />
      <div className="service-process-grid">
        <h2><span>A</span> {headingNouns[0]}<br /><span>A</span> {headingNouns[1]}<br /><span>A</span> {headingNouns[2]}</h2>
        <div className="service-process-steps">
          {steps.map((step, index) => (
            <article key={step.title}>
              <span className="service-process-number">0{index + 1}</span>
              <h3>{step.title}</h3>
              <p>{step.copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
