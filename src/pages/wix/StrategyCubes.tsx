

const COMPOSITIONS = [
  [[210, 88, "pink"], [120, 253, "blush"], [300, 253, "white"]],
  [[255, 123, "pink"], [203, 184, "blush"], [151, 245, "white"]],
  [[208, 113, "pink"], [144, 231, "blush"], [276, 231, "white"]],
  [[102, 88, "blush"], [308, 126, "pink"], [240, 288, "white"]],
] as const;

export function StrategyCubes({ variant }: { variant: number }) {

  return <div className="strategy-card-art" aria-hidden="true">
    {COMPOSITIONS[variant].map(([x, y, color], index) => <div
      key={index}
      className={`strategy-cube-anchor strategy-cube-${color}`}
      style={{ left: `${x / 4}%`, top: `${y / 3.6}%` }}
    >
      <svg className="strategy-cube" viewBox="0 0 144 164" focusable="false">
        <path className="strategy-cube-frame" d="M72 5 139 43 139 121 72 159 5 121 5 43ZM5 43 72 82 139 43M72 82V159" />
        <path className="strategy-cube-top" d="M72 5 139 43 72 82 5 43Z" />
        <path className="strategy-cube-front" d="M5 43 72 82 72 159 5 121Z" />
        <path className="strategy-cube-right" d="M72 82 139 43 139 121 72 159Z" />

      </svg>
    </div>)}
  </div>;
}

