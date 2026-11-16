import { SiteImage } from "../../components/ui/SiteImage";
import "./support-dashboard.css";

export function SupportDashboard() {
  return <div className="support-hero-editor support-dashboard">
    <SiteImage fetchPriority="high" className="support-dashboard-art" src="/site-monitor.svg" alt="Website support monitoring dashboard showing quality scores, uptime, system status and optimized load time" />
    <div className="support-dashboard-tags" aria-hidden="true"><span>Fixes &amp; improvements</span><span>One-off &amp; ongoing</span></div>
  </div>;
}
