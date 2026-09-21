import { MotionHeading } from "../../../components/ui/MotionHeading";
import { SectionHead } from "../../../components/ui/SectionHead";
import { Reveal } from "../../../components/ui/Reveal";
import { OUTCOMES } from "../content";

export function OutcomesSection() {
  return (
    <section className="light-section outcomes-section">
      <SectionHead index="04" label="Outcomes" axis="VALUE" />
      <MotionHeading>What we help you achieve</MotionHeading>
      <div className="outcomes-grid">
        {OUTCOMES.map((outcome) => (
          <Reveal className="outcome" key={outcome.title}>
            <span>{outcome.number}</span><h3>{outcome.title}</h3><p>{outcome.copy}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
