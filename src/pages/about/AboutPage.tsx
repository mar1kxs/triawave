import { useEffect } from "react";
import { Shell } from "../../components/layout/Shell";
import { Footer } from "../../components/layout/Footer";
import { InnerPageCTA } from "../shared/InnerPageCTA";
import { AboutHero } from "./sections/AboutHero";
import { TeamSection } from "./sections/TeamSection";
import { ApproachSection } from "./sections/ApproachSection";
import { WorkingSection } from "./sections/WorkingSection";

export default function AboutPage() {
  useEffect(() => {
    const page = document.querySelector<HTMLElement>(".about-page");
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
  }, []);

  return (
    <Shell>
      <main className="about-page">
        <AboutHero />
        <TeamSection />
        <ApproachSection />
        <WorkingSection />
        <InnerPageCTA />
      </main>
      <Footer />
    </Shell>
  );
}
