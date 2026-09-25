import { SITE } from "../../config/site";
import { AppLink } from "../../components/ui/AppLink";
import "./inner-pages.css";

function IsometricCube({ x, y, size, colors }: { x: number; y: number; size: number; colors: [string, string, string] }) {
  // Equal-length edges along the three isometric axes: +30°, +150° and vertical.
  const halfWidth = Math.sqrt(3) * size / 2;
  return <g transform={`translate(${x} ${y})`}>
    <path d={`M0 0 ${halfWidth} ${size / 2} 0 ${size} ${-halfWidth} ${size / 2}Z`} fill={colors[0]} />
    <path d={`M${-halfWidth} ${size / 2} 0 ${size} 0 ${size * 2} ${-halfWidth} ${size * 1.5}Z`} fill={colors[1]} />
    <path d={`M0 ${size} ${halfWidth} ${size / 2} ${halfWidth} ${size * 1.5} 0 ${size * 2}Z`} fill={colors[2]} />
  </g>;
}

export function Cubes({ pair = false }: { pair?: boolean }) {
  return <div className={`inner-cubes ${pair ? "inner-cubes-pair" : ""}`} aria-hidden="true">
    <svg viewBox="0 0 400 340" fill="none">
      {pair ? <>
        <g><path d="M130 36 240 77 174 119 65 77Z" fill="#29272d"/><path d="m65 77 109 42v127L65 202Z" fill="#121116"/><path d="m174 119 66-42v125l-66 44Z" fill="#1e1c23"/></g>
        <g><path d="m259 166 70 26-48 29-71-27Z" fill="#ff3288"/><path d="m210 194 71 27v79l-71-28Z" fill="#ab185c"/><path d="m281 221 48-29v78l-48 30Z" fill="#df237a"/></g>
        <path d="M42 220h20m-10-10v20M244 67h20m-10-10v20M45 30h20m-10-10v20" stroke="#d62675"/>
      </> : <>
        <IsometricCube x={225} y={20} size={62} colors={["#ff52b1", "#bc2b84", "#ee2995"]} />
        <IsometricCube x={135} y={165} size={78} colors={["#f4f4f4", "#d2d2d2", "#e4e4e4"]} />
        <IsometricCube x={320} y={158} size={64} colors={["#ff3288", "#9f1456", "#e01d79"]} />
      </>}
    </svg>
  </div>;
}

export function InnerPageCTA() {
  return <section className="inner-cta">
    <div className="inner-cta-copy">
      <h2>Let’s talk<br />about <span>your website</span></h2>
      <p>Planning a new website or rethinking your current one? <br />Tell us what you have in mind. We’ll help you explore the next steps</p>
      <AppLink href={`mailto:${SITE.email}`} className="button">Tell us your idea</AppLink>
    </div>
    <Cubes />
  </section>;
}

export function InnerSectionLabel({ number, title, axis }: { number: string; title: string; axis: string }) {
  return <div className="inner-section-label"><span>{number} / {title}</span><span>X:{number} / Y:{axis}</span></div>;
}
