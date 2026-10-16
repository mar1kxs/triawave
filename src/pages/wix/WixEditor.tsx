import "./wix-editor.css";

export function WixEditor() {
  return <div className="wix-hero-editor wix-editor" role="img" aria-label="Wix Studio visual editor: editable website sections, selected hero text and a pink cube. No code needed. Built on Wix Studio.">
    <div className="wix-editor-window" aria-hidden="true">
      <div className="wix-editor-toolbar"><span className="wix-editor-dots"><i /><i /><i /></span><span>Wix Studio — Home</span><span className="wix-editor-publish">Publish</span></div>
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
    <div className="wix-editor-tags" aria-hidden="true"><span>No code needed</span><span>Built on Wix Studio</span></div>
  </div>;
}
