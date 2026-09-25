import { SITE } from "../../config/site";
import { useState } from "react";
import { AppLink } from "../ui/AppLink";

export function ReferralBar() {
  const [visible, setVisible] = useState(true);
  if (!visible) return null;

  return (
    <aside className="referral-bar">
      <AppLink href={`mailto:${SITE.email}`}>
        Refer a business to Triawave - they receive €250 off their first project, and you receive €250 in studio credit. <strong>View referral program ↗</strong>
      </AppLink>
      <button type="button" aria-label="Close referral notice" onClick={() => setVisible(false)}>×</button>
    </aside>
  );
}
