import "./wix-editor.css";

export function WixEditor({ platform = "Wix Studio" }: { platform?: "Wix Studio" | "Webflow" }) {
  if (platform === "Webflow") return <div className="wix-hero-editor wix-editor webflow-editor">
    <img src="/webflow-designer.svg" alt="Webflow Designer interface with selected hero heading, responsive breakpoints, style controls and publish action" />
    <div className="wix-editor-tags"><span>Design &amp; development</span><span>CMS &amp; interactions</span></div>
  </div>;
  if (platform === "Wix Studio") return <div className="wix-hero-editor wix-editor wix-studio-art">
    <img src="/wix-studio-editor.svg" alt="Wix Studio editor preview with selected page heading, editable layout and publish controls" />
    <div className="wix-editor-tags" aria-hidden="true"><span>Design &amp; development</span><span>CMS &amp; interactions</span></div>
  </div>;
  return <div className="wix-hero-editor wix-editor" role="img" aria-label={`${platform} visual editor: editable website sections, selected hero text and a pink cube.`}>
    <div className="wix-editor-window" aria-hidden="true">
      <div className="wix-editor-toolbar"><span className="wix-editor-dots"><i /><i /><i /></span><span>{platform} Designer — Home</span><span className="wix-editor-publish">Publish</span></div>
      <div className="wix-editor-sidebar">{["Header", "Hero", "Services", "Reviews", "Footer"].map(label => <span className={label === "Hero" ? "is-selected" : undefined} key={label}>{label}</span>)}</div>
      <div className="wix-editor-canvas">
        <div className="wix-editor-page-top" />
        <div className="wix-editor-selection">
          <div className="wix-editor-text-tools"><span>✎ Edit text</span><span>Aa</span><span>⟲</span></div>
          <div className="wix-editor-text-line" /><div className="wix-editor-text-line" />
          <i /><i /><i /><i />
          <svg className="wix-editor-cursor" viewBox="0 0 24 30"><path d="M2 2v24l6-7 5 10 4-2-5-10h9Z" fill="#fff" stroke="#111" strokeWidth="1.5" /></svg>
        </div>
        <div className="wix-editor-page-button" />
        <div className="wix-editor-cube"><span /><span /><span /></div>
        <div className="wix-editor-tiles"><span /><span /><span /></div>
      </div>
    </div>
    <div className="wix-editor-tags" aria-hidden="true"><span>Design &amp; development</span><span>CMS &amp; interactions</span></div>
  </div>;
}
