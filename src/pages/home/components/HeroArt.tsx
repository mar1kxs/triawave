import { SiteImage } from "../../../components/ui/SiteImage";
export function HeroArt() {
  return (
    <div className="hero-art" aria-hidden="true">
      <SiteImage fetchPriority="high" src="/assets/hero-art.svg" alt="" width="523" height="746" />
    </div>
  );
}
