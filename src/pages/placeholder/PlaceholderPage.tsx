import { MinimalHeader } from "../../components/layout/MinimalHeader";

export function PlaceholderPage({ title }: { title: string }) {
  return (
    <>
      <MinimalHeader />
      <main className="placeholder-page">
        <h1>{title.split("\n").map((line) => <span key={line}>{line}</span>)}</h1>
      </main>
    </>
  );
}
