import "./support-dashboard.css";

export function SupportDashboard() {
  return <div className="support-hero-editor support-dashboard" role="img" aria-label="Website care dashboard preview: four fixes, two checks and one next test. Site signals show 99.9 percent uptime, 0.8 second load time and backups ready. Next support cycle ready.">
    <div className="support-dashboard-window" aria-hidden="true">
      <div className="support-dashboard-toolbar"><span className="support-dashboard-dots"><i /><i /><i /></span><span>Site care / 08</span><span className="support-dashboard-status">Healthy</span></div>
      <div className="support-dashboard-body">
        <div className="support-dashboard-eyebrow">Website support / optimization</div>
        <div className="support-dashboard-title">Keep it running</div>
        <div className="support-dashboard-subtitle">Fix / Check / Improve</div>
        <div className="support-dashboard-panels">
          <div className="support-dashboard-panel support-dashboard-queue"><span>Today’s queue</span><div>04&nbsp; Fixes</div><div>02&nbsp; Checks</div><div>01&nbsp; Next test</div></div>
          <div className="support-dashboard-panel support-dashboard-signals"><span>Site signals</span><div><span>Uptime</span><span>99.9%</span></div><div><span>Load</span><span>0.8s</span></div><div><span>Backups</span><span>Ready</span></div></div>
        </div>
        <div className="support-dashboard-health"><div><span>What we keep healthy</span><div>Access / Code / Content / Integrations</div></div><div className="support-dashboard-cycle"><span>Next cycle</span><strong>Ready</strong></div></div>
        <div className="support-dashboard-footer">Clear work / Clear reporting</div>
      </div>
    </div>
  </div>;
}
