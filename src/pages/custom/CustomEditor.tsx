import "./custom-editor.css";

export function CustomEditor() {
  return <div className="custom-hero-editor custom-editor custom-editor-art">
    <img src="/custom-app-editor.svg" alt="Custom application code editor with API, data and deployment tools" />
    <div className="custom-editor-tags" aria-hidden="true"><span>Custom development</span><span>Code / API / Data</span></div>
  </div>;
}
