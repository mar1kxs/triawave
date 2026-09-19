import type { ReactNode } from "react";
import { ReferralBar } from "./ReferralBar";
import { Header } from "./Header/Header";

export function Shell({ children, showReferral = true }: { children: ReactNode; showReferral?: boolean }) {
  return (
    <>
      {showReferral && <ReferralBar />}
      <Header />
      {children}
    </>
  );
}
