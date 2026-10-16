import "./custom-editor.css";

export function CustomEditor() {
  return <div className="custom-hero-editor custom-editor" role="img" aria-label="Custom application dashboard with a code editor, pink cube and successful deployment terminal. Custom development: code, API and data.">
    <div className="custom-editor-window" aria-hidden="true">
      <div className="custom-editor-toolbar"><span className="custom-editor-dots"><i /><i /><i /></span><span>Custom app — Dashboard</span><span className="custom-editor-deploy">Deploy</span></div>
      <div className="custom-editor-sidebar">{["Overview", "Users", "Data", "API", "Settings"].map(label => <span className={label === "Users" ? "is-selected" : undefined} key={label}>{label}</span>)}</div>
      <div className="custom-editor-workspace">
        <div className="custom-editor-placeholder" />
        <div className="custom-editor-file">app.ts ×</div>
        <div className="custom-editor-code">
          <div><span>01</span><code className="custom-code-purple">export async function</code></div>
          <div><span>02</span><code>{"  buildExperience() {"}</code></div>
          <div><span>03</span><code className="custom-code-blue">{"    const brief = await"}</code></div>
          <div><span>04</span><code>{"      defineScope();"}</code></div>
          <div><span>05</span><code className="custom-code-purple">{"    return deploy({"}</code></div>
          <div><span>06</span><code className="custom-code-blue">{"      users, data, api"}</code></div>
          <div><span>07</span><code>{"    }); }"}</code></div>
        </div>
        <svg className="custom-editor-cursor" viewBox="0 0 24 30"><path d="M2 2v24l6-7 5 10 4-2-5-10h9Z" fill="#fff" stroke="#111" strokeWidth="1.5" /></svg>
        <div className="custom-editor-cube"><span /><span /><span /></div>
        <div className="custom-editor-terminal">
          <div className="custom-editor-terminal-tabs"><span>Terminal</span><span>Output</span><span>Problems</span></div>
          <div className="custom-editor-command">› deploy --production</div>
          <div className="custom-editor-success">✓ build complete　/　api connected</div>
        </div>
      </div>
    </div>
    <div className="custom-editor-tags" aria-hidden="true"><span>Custom development</span><span>Code / API / Data</span></div>
  </div>;
}
