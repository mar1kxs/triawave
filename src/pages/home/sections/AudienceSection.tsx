import { MotionHeading } from "../../../components/ui/MotionHeading";
import { SectionHead } from "../../../components/ui/SectionHead";
import { Reveal } from "../../../components/ui/Reveal";
import { AUDIENCES } from "../content";

export function AudienceSection() {
  return (
    <section className="light-section audience-section">
      <SectionHead index="03" label="Who we help" axis="AUDIENCE" />
      <MotionHeading>Built for businesses<br />ready for what’s<br />next</MotionHeading>
      <div className="audience-grid">
        {AUDIENCES.map((audience) => (
          <Reveal className="audience-card" key={audience.title}>
            <span>{audience.number}</span>
            <img
              className="audience-icon"
              src={audience.icon}
              alt=""
              aria-hidden="true"
              width={audience.iconWidth}
              height={audience.iconHeight}
              loading="lazy"
              decoding="async"
            />
            <h3>{audience.title}</h3>
            <p>{audience.copy}</p>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
