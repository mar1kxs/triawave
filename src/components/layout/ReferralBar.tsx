import { DiagonalArrow } from "../ui/DiagonalArrow";
import { SITE } from "../../config/site";
import { useState } from "react";
import { AppLink } from "../ui/AppLink";

export function ReferralBar() {
  const [visible, setVisible] = useState(true);
  const message = <>Refer a business to Triawave - they receive €250 off their first project, and you receive €250 in studio credit. <strong>View referral program <DiagonalArrow /></strong></>;

  return (
    <aside className={`referral-bar${visible ? "" : " referral-bar--dismissed"}`}>
      <AppLink href={SITE.contactUrl} className="referral-bar__link">
        <span className="referral-bar__track">
          <span className="referral-bar__message">{message}</span>
          <span className="referral-bar__message referral-bar__duplicate" aria-hidden="true">{message}</span>
        </span>
      </AppLink>
      <button type="button" aria-label="Close referral notice" onClick={() => setVisible(false)}>×</button>
    </aside>
  );
}
