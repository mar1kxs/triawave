import "./landing-flow.css";

export function LandingFlow() {
  return <div className="landing-hero-editor landing-flow" role="img" aria-label="The landing flow: offer, proof, action. One clear promise, evidence to make it believable, and an obvious next step.">
    <div className="landing-flow-board" aria-hidden="true">
      <div className="landing-flow-heading"><span>The landing flow</span><span>Offer → Proof → Action</span></div>
      <div className="landing-flow-line" />
      <div className="landing-flow-card landing-flow-offer">
        <span className="landing-flow-label">01 / Offer</span>
        <div className="landing-flow-card-title">One<br />clear<br />promise</div>
        <p>Give visitors the reason<br />to stay and pay attention</p>
        <div className="landing-flow-offer-bar"><span /></div>
      </div>
      <div className="landing-flow-card landing-flow-proof">
        <span className="landing-flow-label">02 / Proof</span>
        <div className="landing-flow-card-title">Make it<br />believable</div>
        <p>Show the facts, the work<br />and the reasons to trust</p>
        <div className="landing-flow-evidence"><span>01</span><span>Core message<br />supported</span></div>
      </div>
      <div className="landing-flow-card landing-flow-action">
        <span className="landing-flow-label">03 / Action</span>
        <div className="landing-flow-card-title">Make the<br />next step<br />obvious</div>
        <p>A clear action and a path<br />that is simple to complete</p>
        <div className="landing-flow-action-bar">Take action</div>
        <div className="landing-flow-rule" />
      </div>
      <div className="landing-flow-footer"><span>Message　 Evidence　 Conversion</span><span>Structure / Design / Build / Launch</span></div>
    </div>
    <div className="landing-flow-tags" aria-hidden="true"><span>One clear offer</span><span>Design &amp; launch</span></div>
  </div>;
}
