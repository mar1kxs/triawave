import { useEffect, useRef, type ReactNode } from "react";
import { isMotionDisabled } from "../../../lib/motion/preferences";

import "./MathGrid.css";

type MathGridProps = {
  children: ReactNode;
  className?: string;
};

export default function MathGrid({
  children,
  className = "",
}: MathGridProps) {
  const rootRef = useRef<HTMLElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const rootElement = rootRef.current;
    const canvasElement = canvasRef.current;

    // Проверяем refs
    if (rootElement === null || canvasElement === null) {
      return;
    }

    const context = canvasElement.getContext("2d");

    // Проверяем canvas context
    if (context === null) {
      return;
    }

    /*
      Создаём переменные с конкретными non-null типами.
      Благодаря этому TypeScript больше не ругается
      внутри resize(), draw(), handlePointerMove() и т.д.
    */
    const root: HTMLElement = rootElement;
    const canvas: HTMLCanvasElement = canvasElement;
    const ctx: CanvasRenderingContext2D = context;

    let width = 0;
    let height = 0;
    let dpr = 1;
    let time = 0;
    let animationFrame = 0;
    let visible = false;
    let motionDisabled = isMotionDisabled();
    let previousTime = 0;
    const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");

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

      dpr = Math.min(
        window.devicePixelRatio || 1,
        2
      );

      canvas.width = Math.round(
        width * dpr
      );

      canvas.height = Math.round(
        height * dpr
      );

      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;

      ctx.setTransform(
        dpr,
        0,
        0,
        dpr,
        0,
        0
      );

      if (
        pointer.x === 0 &&
        pointer.y === 0
      ) {
        pointer.x =
          pointer.targetX =
          width * 0.58;

        pointer.y =
          pointer.targetY =
          height * 0.46;
      }
    }

    function field(
      x: number,
      y: number,
      currentTime: number
    ) {
      const deltaX =
        x - pointer.x;

      const deltaY =
        y - pointer.y;

      const distance = Math.sqrt(
        deltaX * deltaX +
          deltaY * deltaY
      );

      const influence =
        Math.exp(
          -distance * 0.008
        );

      const wave =
        Math.sin(
          distance * 0.032 -
            currentTime * 2.2
        ) *
        18 *
        influence;

      const globalWave =
        Math.sin(
          x * 0.014 +
            currentTime
        ) *
        Math.cos(
          y * 0.012 -
            currentTime * 0.7
        ) *
        4;

      return {
        x:
          (deltaX /
            (distance + 1)) *
          wave,

        y:
          (deltaY /
            (distance + 1)) *
            wave +
          globalWave,
      };
    }

    function draw(timestamp = performance.now()) {
      animationFrame = 0;
      const elapsed = previousTime ? Math.min((timestamp - previousTime) / 1000, 0.05) : 1 / 60;
      previousTime = timestamp;
      // Очистка
      ctx.clearRect(
        0,
        0,
        width,
        height
      );

      // Background
      ctx.fillStyle = "#0A0A0B";

      ctx.fillRect(
        0,
        0,
        width,
        height
      );

      const spacing = Math.max(
        34,
        Math.min(
          52,
          width / 16
        )
      );

      const columns =
        Math.ceil(
          width / spacing
        ) + 2;

      const rows =
        Math.ceil(
          height / spacing
        ) + 2;

      // Плавное движение за курсором
      pointer.x +=
        (pointer.targetX -
          pointer.x) *
        0.055;

      pointer.y +=
        (pointer.targetY -
          pointer.y) *
        0.055;

      ctx.lineWidth = 1;

      /*
       * HORIZONTAL LINES
       */
      for (
        let row = -1;
        row < rows;
        row += 1
      ) {
        ctx.beginPath();

        for (
          let column = -1;
          column < columns;
          column += 1
        ) {
          const baseX =
            column * spacing;

          const baseY =
            row * spacing;

          const distortion =
            field(
              baseX,
              baseY,
              time
            );

          const x =
            baseX +
            distortion.x;

          const y =
            baseY +
            distortion.y;

          if (
            column === -1
          ) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        }

        ctx.strokeStyle =
          "rgba(248, 43, 147, 0.18)";

        ctx.stroke();
      }

      /*
       * VERTICAL LINES
       */
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
          const baseX =
            column * spacing;

          const baseY =
            row * spacing;

          const distortion =
            field(
              baseX,
              baseY,
              time
            );

          const x =
            baseX +
            distortion.x;

          const y =
            baseY +
            distortion.y;

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

      /*
       * DOTS
       */
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
          const baseX =
            column * spacing;

          const baseY =
            row * spacing;

          const distortion =
            field(
              baseX,
              baseY,
              time
            );

          const x =
            baseX +
            distortion.x;

          const y =
            baseY +
            distortion.y;

          const deltaX =
            x - pointer.x;

          const deltaY =
            y - pointer.y;

          const distance =
            Math.sqrt(
              deltaX *
                deltaX +
                deltaY *
                  deltaY
            );

          const opacity =
            Math.max(
              0.12,
              1 -
                distance /
                  330
            );

          ctx.beginPath();

          ctx.arc(
            x,
            y,
            1.4 +
              opacity * 1.8,
            0,
            Math.PI * 2
          );

          ctx.fillStyle =
            `rgba(248, 43, 147, ${
              opacity * 0.9
            })`;

          ctx.fill();
        }
      }

      // Скорость анимации
      if (!motionDisabled && visible && !document.hidden) {
        time += elapsed;
        animationFrame = window.requestAnimationFrame(draw);
      }
    }

    function handlePointerMove(
      event: PointerEvent
    ) {
      if (motionDisabled) return;
      const rect =
        root.getBoundingClientRect();

      pointer.targetX =
        event.clientX -
        rect.left;

      pointer.targetY =
        event.clientY -
        rect.top;
    }

    function handlePointerLeave() {
      pointer.targetX =
        width * 0.58;

      pointer.targetY =
        height * 0.46;
    }

    root.addEventListener(
      "pointermove",
      handlePointerMove
    );

    root.addEventListener(
      "pointerleave",
      handlePointerLeave
    );

    const observer =
      new ResizeObserver(
        () => {
          resize();
          if (!animationFrame) draw();
        }
      );

    observer.observe(root);

    resize();
    draw();

    const updateMotion = () => {
      window.cancelAnimationFrame(animationFrame);
      motionDisabled = isMotionDisabled();
      previousTime = 0;
      draw();
    };
    const visibilityObserver = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      updateMotion();
    });
    visibilityObserver.observe(root);
    document.addEventListener("visibilitychange", updateMotion);
    motionPreference.addEventListener("change", updateMotion);

    return () => {
      root.removeEventListener(
        "pointermove",
        handlePointerMove
      );

      root.removeEventListener(
        "pointerleave",
        handlePointerLeave
      );

      observer.disconnect();
      visibilityObserver.disconnect();
      document.removeEventListener("visibilitychange", updateMotion);
      motionPreference.removeEventListener("change", updateMotion);

      window.cancelAnimationFrame(
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

      <div className="math-grid__content">
        {children}
      </div>
    </section>
  );
}
