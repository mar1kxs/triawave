import { AppLink } from "../ui/AppLink";

export function MinimalHeader() {
  return (
    <header className="minimal-header">
      <AppLink href="/" className="brand" aria-label="Triawave home">
        <img src="/assets/logo.svg" alt="Triawave" width="209" height="40" />
      </AppLink>
    </header>
  );
}
