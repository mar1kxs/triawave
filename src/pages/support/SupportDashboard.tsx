import "./support-dashboard.css";

export function SupportDashboard() {
  return <div className="support-hero-editor support-dashboard">
    <img className="support-dashboard-art" src="/site-monitor.svg" alt="Website support monitoring dashboard showing quality scores, uptime, system status and optimized load time" />
    <div className="support-optimization-card"><small>LOAD TIME · AFTER OPTIMIZATION</small><strong>1.2s <i>−68%</i></strong><div><span>Before</span><b><i /></b><em>3.8s</em></div><div><span>After</span><b className="after"><i /></b><em>1.2s</em></div><p>Images, code and hosting tuned this month.</p></div>
    <div className="support-dashboard-tags" aria-hidden="true"><span>Fixes &amp; improvements</span><span>One-off &amp; ongoing</span></div>
  </div>;
}
