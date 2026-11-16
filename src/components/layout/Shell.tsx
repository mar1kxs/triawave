import type { ReactNode } from "react";
import { ReferralBar } from "./ReferralBar";
import { Header } from "./Header/Header";
import { SitePreloader } from "./SitePreloader";

export function Shell({ children, showReferral = true }: { children: ReactNode; showReferral?: boolean }) {
  return (
    <>
      <SitePreloader />
      {showReferral && <ReferralBar />}
      <Header />
      {children}
    </>
  );
}
