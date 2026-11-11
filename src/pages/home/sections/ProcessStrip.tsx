export function ProcessStrip() {
  const desktopSteps = ["Strategy", "Design", "Development", "Launch", "Support"];
  const renderSequence = (key: string, closeLoop = false) => (
    <span className="process-strip-sequence" key={key}>
      {desktopSteps.map((step, index) => <span className="process-strip-item" key={step}><span>{step}</span>{(closeLoop || index < desktopSteps.length - 1) && <i>—</i>}</span>)}
    </span>
  );
  return (
    <div className="process-strip"><div className="process-strip-label">
      <span className="process-strip-accessible">Strategy — Design — Development — Launch — Support</span>
      <div className="process-strip-track process-strip-track-desktop" aria-hidden="true">{renderSequence("desktop")}</div>
      <div className="process-strip-track process-strip-track-mobile" aria-hidden="true">
        {renderSequence("mobile-1", true)}
        {renderSequence("mobile-2", true)}
      </div>
    </div><p>One connected team before, during and after launch</p></div>
  );
}
