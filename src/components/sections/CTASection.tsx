import { AppLink } from "../ui/AppLink";
import MathGrid from "../ui/MathGrid/MathGrid";

export function CTASection() {
  return (
    <MathGrid className="cta-section">
      <div className="cta-content">
        <h2 className="cta-title">LET’S TALK<br />ABOUT <span>YOUR WEBSITE</span></h2>
        <div className="cta-card">
          <p>Planning a new website or rethinking your current one? Tell us what you have in mind we’ll help you explore the next steps</p>
          <AppLink href="/contact" className="button cta-button">TELL US YOUR IDEA ↗</AppLink>
        </div>
      </div>
    </MathGrid>
  );
}
