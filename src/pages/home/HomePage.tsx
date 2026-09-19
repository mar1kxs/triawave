import { Shell } from "../../components/layout/Shell";
import { Footer } from "../../components/layout/Footer";
import { CTASection } from "../../components/sections/CTASection";
import { HomeHero } from "./sections/HomeHero";
import { WorkSection } from "./sections/WorkSection";
import { AudienceSection } from "./sections/AudienceSection";
import { OutcomesSection } from "./sections/OutcomesSection";
import { ServicesSection } from "./sections/ServicesSection";
import { ProcessSection } from "./sections/ProcessSection";
import { TestimonialsSection } from "./sections/TestimonialsSection";
import { FAQSection } from "./sections/FAQSection";
import { ProcessStrip } from "./sections/ProcessStrip";

export default function HomePage() {
  return (
    <Shell>
      <main>
        <HomeHero />
        <ProcessStrip />
        <WorkSection />
        <AudienceSection />
        <OutcomesSection />
        <ServicesSection />
        <ProcessSection />
        <TestimonialsSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </Shell>
  );
}
