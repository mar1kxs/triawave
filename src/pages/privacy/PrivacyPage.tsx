import { Fragment } from "react";
import "@fontsource/inter/latin-700.css";
import { Header } from "../../components/layout/Header/Header";
import { Footer } from "../../components/layout/Footer";
import { AppLink } from "../../components/ui/AppLink";
import { POLICY_SECTIONS, type PolicyBlock } from "./content";
import "./privacy.css";

function PolicyText({ text }: { text: string }) {
  return <>{text.split(/(hello@triawave\.studio|Cookie Policy|uoou\.gov\.cz|How Google uses information from sites or apps that use its services)/g).map((part, index) => {
    if (part === "hello@triawave.studio") return <a key={index} href={`mailto:${part}`}>{part}</a>;
    if (part === "Cookie Policy") return <AppLink key={index} href="/cookie-policy">{part}</AppLink>;
    if (part === "uoou.gov.cz") return <a key={index} href="https://uoou.gov.cz">{part}</a>;
    if (part.startsWith("How Google uses")) return <a key={index} href="https://policies.google.com/technologies/partner-sites">{part}</a>;
    return <Fragment key={index}>{part}</Fragment>;
  })}</>;
}

function PolicyContent({ block }: { block: PolicyBlock }) {
  switch (block.type) {
    case "paragraph": return <p><PolicyText text={block.text} /></p>;
    case "subheading": return <h3>{block.text}</h3>;
    case "retention-heading": return <h3 className="policy-retention-heading">{block.text}</h3>;
    case "list": return <ul>{block.items.map(item => <li key={item}><PolicyText text={item} /></li>)}</ul>;
    case "links": return <div className="policy-provider-links">{block.items.map(item => <p key={item.href}><a href={item.href}>{item.label}</a></p>)}</div>;
    case "table": return <div className="policy-table-wrap"><table>
      <caption className="policy-mobile-table-heading">{block.headings.join(" / ")}</caption>
      <thead><tr>{block.headings.map(heading => <th scope="col" key={heading}>{heading}</th>)}</tr></thead>
      <tbody>{block.rows.map((row, index) => <tr key={index}>{row.map((cell, column) => <td key={column}><PolicyText text={cell} /></td>)}</tr>)}</tbody>
    </table></div>;
  }
}

export function PrivacyBrand() {
  return <span className="privacy-brand" aria-hidden="true">
    <span className="privacy-brand-cubes">
      <img className="privacy-cube-large" src="/assets/privacy/cube-large.svg" alt="" />
      <img className="privacy-cube-medium" src="/assets/privacy/cube-medium.svg" alt="" />
      <img className="privacy-cube-small" src="/assets/privacy/cube-small.svg" alt="" />
    </span>
    <img className="privacy-brand-divider" src="/assets/privacy/divider.svg" alt="" />
    <span>TRIAWAVE</span>
  </span>;
}

export default function PrivacyPage() {
  return <div className="privacy-page">
    <Header brand={<PrivacyBrand />} servicesArrow="/assets/privacy/arrow-down.svg" />
    <main>
      <section className="privacy-intro" aria-labelledby="privacy-title">
        <p className="privacy-eyebrow"><span className="privacy-mobile-label">Legal / </span>Triawave</p>
        <h1 id="privacy-title">Privacy Policy</h1>
        <div className="privacy-intro-details">
          <p className="privacy-updated">Last updated: <time dateTime="2026-11-24">24 November 2026</time></p>
          <p>This Privacy Policy explains how Triawave handles personal data when you visit triawave.com, submit a project enquiry or communicate with us.</p>
        </div>
        <hr />
      </section>
      <div className="policy-reading-area">
        <div className="policy-sections">
          {POLICY_SECTIONS.map((section, index) => <section className="policy-section" aria-labelledby={`policy-section-${index + 1}`} key={section.heading}>
            <h2 id={`policy-section-${index + 1}`}><span>{index + 1}.</span>{section.heading.replace(/^\d+\./, "")}</h2>
            {section.blocks.map((block, blockIndex) => <PolicyContent block={block} key={blockIndex} />)}
          </section>)}
        </div>
      </div>
    </main>
    <Footer />
  </div>;
}
