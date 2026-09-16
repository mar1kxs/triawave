import { useEffect, useRef, type ReactNode } from "react";
import "./MathGrid.css";

type MathGridProps = {
  children: ReactNode;
  className?: string;
};

export default function MathGrid({
  children,
  className = "",
}: MathGridProps) {
  const rootRef = useRef<HTMLElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const rootElement = rootRef.current;
    const canvasElement = canvasRef.current;

    if (!rootElement || !canvasElement) return;

    const context = canvasElement.getContext("2d");

    if (!context) return;

    const root = rootElement;
    const canvas = canvasElement;
    const ctx = context;

    let width = 0;
    let height = 0;
    let dpr = 1;
    let time = 0;
    let animationFrame = 0;

    const pointer = {
      x: 0,
      y: 0,
      targetX: 0,
      targetY: 0,
    };

    function resize() {
      const rect = root.getBoundingClientRect();

      width = rect.width;
      height = rect.height;

      dpr = Math.min(window.devicePixelRatio || 1, 2);

      canvas.width = Math.round(width * dpr);
      canvas.height = Math.round(height * dpr);

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      if (pointer.x === 0 && pointer.y === 0) {
        pointer.x = pointer.targetX = width * 0.58;
        pointer.y = pointer.targetY = height * 0.46;
      }
    }

    function field(
      x: number,
      y: number,
      currentTime: number
    ) {
      const deltaX = x - pointer.x;
      const deltaY = y - pointer.y;

      const distance = Math.sqrt(
        deltaX * deltaX + deltaY * deltaY
      );

      const influence = Math.exp(-distance * 0.008);

      const wave =
        Math.sin(distance * 0.032 - currentTime * 2.2) *
        18 *
        influence;

      const globalWave =
        Math.sin(x * 0.014 + currentTime) *
        Math.cos(y * 0.012 - currentTime * 0.7) *
        4;

      return {
        x: (deltaX / (distance + 1)) * wave,
        y:
          (deltaY / (distance + 1)) * wave +
          globalWave,
      };
    }

    function draw() {
      ctx.clearRect(0, 0, width, height);

      ctx.fillStyle = "#0A0A0B";
      ctx.fillRect(0, 0, width, height);

      const spacing = Math.max(
        34,
        Math.min(52, width / 16)
      );

      const columns =
        Math.ceil(width / spacing) + 2;

      const rows =
        Math.ceil(height / spacing) + 2;

      pointer.x +=
        (pointer.targetX - pointer.x) * 0.055;

      pointer.y +=
        (pointer.targetY - pointer.y) * 0.055;

      ctx.lineWidth = 1;

      for (let row = -1; row < rows; row += 1) {
        ctx.beginPath();

        for (
          let column = -1;
          column < columns;
          column += 1
        ) {
          const baseX = column * spacing;
          const baseY = row * spacing;

          const distortion = field(
            baseX,
            baseY,
            time
          );

          const x = baseX + distortion.x;
          const y = baseY + distortion.y;

          if (column === -1) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }

        ctx.strokeStyle =
          "rgba(248, 43, 147, 0.18)";

        ctx.stroke();
      }

      for (
        let column = -1;
        column < columns;
        column += 1
      ) {
        ctx.beginPath();

        for (
          let row = -1;
          row < rows;
          row += 1
        ) {
          const baseX = column * spacing;
          const baseY = row * spacing;

          const distortion = field(
            baseX,
            baseY,
            time
          );

          const x = baseX + distortion.x;
          const y = baseY + distortion.y;

          if (row === -1) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }

        ctx.strokeStyle =
          "rgba(248, 43, 147, 0.14)";

        ctx.stroke();
      }

      for (
        let row = 0;
        row < rows;
        row += 1
      ) {
        for (
          let column = 0;
          column < columns;
          column += 1
        ) {
          const baseX = column * spacing;
          const baseY = row * spacing;

          const distortion = field(
            baseX,
            baseY,
            time
          );

          const x = baseX + distortion.x;
          const y = baseY + distortion.y;

          const deltaX = x - pointer.x;
          const deltaY = y - pointer.y;

          const distance = Math.sqrt(
            deltaX * deltaX +
            deltaY * deltaY
          );

          const opacity = Math.max(
            0.12,
            1 - distance / 330
          );

          ctx.beginPath();

          ctx.arc(
            x,
            y,
            1.4 + opacity * 1.8,
            0,
            Math.PI * 2
          );

          ctx.fillStyle =
            `rgba(248, 43, 147, ${opacity * 0.9})`;

          ctx.fill();
        }
      }

      time += 0.016;

      animationFrame =
        requestAnimationFrame(draw);
    }

    function handlePointerMove(
      event: PointerEvent
    ) {
      const rect =
        root.getBoundingClientRect();

      pointer.targetX =
        event.clientX - rect.left;

      pointer.targetY =
        event.clientY - rect.top;
    }

    root.addEventListener(
      "pointermove",
      handlePointerMove
    );

    const observer =
      new ResizeObserver(resize);

    observer.observe(root);

    resize();
    draw();

    return () => {
      root.removeEventListener(
        "pointermove",
        handlePointerMove
      );

      observer.disconnect();

      cancelAnimationFrame(
        animationFrame
      );
    };
  }, []);

  return (
    <section
      ref={rootRef}
      className={`math-grid ${className}`}
    >
      <canvas
        ref={canvasRef}
        className="math-grid__canvas"
        aria-hidden="true"
      />

      <div
        className="math-grid__gradient"
        aria-hidden="true"
      />

      {children}
    </section>
  );
}