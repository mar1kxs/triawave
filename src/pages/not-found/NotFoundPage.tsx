import { Header } from "../../components/layout/Header/Header";
import { AppLink } from "../../components/ui/AppLink";
import { PrivacyBrand } from "../privacy/PrivacyPage";
import "./not-found.css";

export default function NotFoundPage() {
  return <div className="not-found-page">
    <Header brand={<PrivacyBrand />} servicesArrow="/assets/privacy/arrow-down.svg" />
    <main className="not-found-main">
      <div className="not-found-content">
        <h1>404</h1>
        <div className="not-found-message">
          <h2>This page took a wrong turn</h2>
          <p>The page you’re looking for doesn’t exist or has moved. Let’s get you back on track.</p>
        </div>
        <AppLink className="button not-found-home" href="/">Back to home</AppLink>
      </div>
    </main>
  </div>;
}
