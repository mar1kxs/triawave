import { useEffect } from "react";
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
  useEffect(() => {
    const page = motionRef.current;
    const header = document.querySelector<HTMLElement>(".site-header");
    const referral = document.querySelector<HTMLElement>(".referral-bar");
    if (!page || !header) return;
    const measure = () => {
      const chromeHeight = header.offsetHeight + (referral?.isConnected ? referral.offsetHeight : 0);
      page.style.setProperty("--home-top-chrome", `${chromeHeight}px`);
    };
    const observer = new ResizeObserver(measure);
    observer.observe(header);
    if (referral) observer.observe(referral);
    measure();
    return () => observer.disconnect();
  }, [motionRef]);
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
