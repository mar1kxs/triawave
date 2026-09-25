import { SITE } from "../../config/site";
import { AppLink } from "../ui/AppLink";
import MathGrid from "../ui/MathGrid/MathGrid";
import { MotionHeading } from "../ui/MotionHeading";

export function CTASection() {
  return (
    <MathGrid className="cta-section">
      <div className="cta-content">
        <MotionHeading className="cta-title">LET’S TALK<br />ABOUT <span className="cta-title-outline">YOUR WEBSITE</span></MotionHeading>
        <div className="cta-card">
          <p>Planning a new website or rethinking your current one? Tell us what you have in mind we’ll help you explore the next steps</p>
          <AppLink href={`mailto:${SITE.email}`} className="button cta-button">TELL US YOUR IDEA ↗</AppLink>
        </div>
      </div>
    </MathGrid>
  );
}
