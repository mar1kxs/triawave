export function SectionHead({ index, label, axis }: { index: string; label: string; axis: string }) {
  return (
    <div className="section-head">
      <span>{index} / {label}</span>
      <span>X:{index} / Y:{axis}</span>
    </div>
  );
}
