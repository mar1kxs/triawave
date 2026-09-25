import { Shell } from "../../components/layout/Shell";
import { Footer } from "../../components/layout/Footer";
import { InnerPageCTA } from "../shared/InnerPageCTA";
import { HomeHero } from "./sections/HomeHero";
import { WorkSection } from "./sections/WorkSection";
import { AudienceSection } from "./sections/AudienceSection";
import { OutcomesSection } from "./sections/OutcomesSection";
import { ServicesSection } from "./sections/ServicesSection";
import { ProcessSection } from "./sections/ProcessSection";
import { TestimonialsSection } from "./sections/TestimonialsSection";
import { FAQSection } from "./sections/FAQSection";
import { ProcessStrip } from "./sections/ProcessStrip";
import { useHomeMotion } from "./hooks/useHomeMotion";

export default function HomePage() {
  const motionRef = useHomeMotion();
  return (
    <Shell>
      <main className="home-page" ref={motionRef}>
        <HomeHero />
        <ProcessStrip />
        <WorkSection />
        <AudienceSection />
        <OutcomesSection />
        <ServicesSection />
        <ProcessSection />
        <TestimonialsSection />
        <InnerPageCTA />
      </main>
      <Footer />
    </Shell>
  );
}
