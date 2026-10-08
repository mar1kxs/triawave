import { useEffect, useRef, type ReactNode } from "react";
import { isMotionDisabled } from "../../../lib/motion/preferences";
import "./MathGrid.css";

type MathGridProps = {
  children: ReactNode;
  className?: string;
};

export default function MathGrid({ children, className = "" }: MathGridProps) {
  const rootRef = useRef<HTMLElement | null>(null);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const root = rootRef.current;
    const canvas = canvasRef.current;
    if (!root || !canvas) return;
    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    let width = 0;
    let height = 0;
    let spacing = 52;
    let columns = 0;
    let rows = 0;
    let points = new Float32Array(0);
    let time = 0;
    let animationFrame = 0;
    let visible = false;
    let motionDisabled = isMotionDisabled();
    let previousTime = 0;
    const motionPreference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const pointer = { x: 0, y: 0, targetX: 0, targetY: 0 };
    // Group nearby opacity values so hundreds of dots need only 16 fills.
    const dots = Array.from({ length: 16 }, () => [] as number[]);

    function resize() {
      if (!root || !canvas || !ctx) return;
      const rect = root.getBoundingClientRect();
      if (rect.width === width && rect.height === height) return;
      width = rect.width;
      height = rect.height;
      // A dim decorative background does not need a multi-megapixel HiDPI surface.
      const dpr = Math.min(window.devicePixelRatio || 1, 1.5,
        Math.sqrt(2_000_000 / Math.max(1, width * height)));
      canvas.width = Math.max(1, Math.round(width * dpr));
      canvas.height = Math.max(1, Math.round(height * dpr));
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      spacing = Math.max(34, Math.min(52, width / 16));
      columns = Math.ceil(width / spacing) + 3;
      rows = Math.ceil(height / spacing) + 3;
      points = new Float32Array(columns * rows * 2);
      if (pointer.x === 0 && pointer.y === 0) {
        pointer.x = pointer.targetX = width * 0.58;
        pointer.y = pointer.targetY = height * 0.46;
      }
    }

    function draw(timestamp = performance.now()) {
      animationFrame = 0;
      if (!ctx) return;
      const elapsed = previousTime ? Math.min((timestamp - previousTime) / 1000, 0.05) : 1 / 60;
      previousTime = timestamp;
      const follow = 1 - Math.pow(1 - 0.055, elapsed * 60);
      pointer.x += (pointer.targetX - pointer.x) * follow;
      pointer.y += (pointer.targetY - pointer.y) * follow;
      ctx.fillStyle = "#0A0A0B";
      ctx.fillRect(0, 0, width, height);

      // Calculate each intersection once, then reuse it for both axes and dots.
      for (const bucket of dots) bucket.length = 0;
      for (let row = 0; row < rows; row++) {
        const baseY = (row - 1) * spacing;
        const verticalWave = Math.cos(baseY * 0.012 - time * 0.7) * 4;
        for (let column = 0; column < columns; column++) {
          const baseX = (column - 1) * spacing;
          const dx = baseX - pointer.x;
          const dy = baseY - pointer.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          const wave = Math.sin(distance * 0.032 - time * 2.2) *
            18 * Math.exp(-distance * 0.008) / (distance + 1);
          const x = baseX + dx * wave;
          const y = baseY + dy * wave + Math.sin(baseX * 0.014 + time) * verticalWave;
          const index = (row * columns + column) * 2;
          points[index] = x;
          points[index + 1] = y;
          if (row === 0 || column === 0) continue;
          const opacity = Math.max(0.12, 1 - Math.hypot(x - pointer.x, y - pointer.y) / 330);
          const bucket = Math.min(15, Math.round((opacity - 0.12) / 0.88 * 15));
          dots[bucket].push(x, y, 1.4 + opacity * 1.8);
        }
      }

      ctx.lineWidth = 1;
      ctx.beginPath();
      for (let row = 0; row < rows; row++) {
        for (let column = 0; column < columns; column++) {
          const index = (row * columns + column) * 2;
          if (column === 0) ctx.moveTo(points[index], points[index + 1]);
          else ctx.lineTo(points[index], points[index + 1]);
        }
      }
      ctx.strokeStyle = "rgba(248, 43, 147, 0.18)";
      ctx.stroke();

      ctx.beginPath();
      for (let column = 0; column < columns; column++) {
        for (let row = 0; row < rows; row++) {
          const index = (row * columns + column) * 2;
          if (row === 0) ctx.moveTo(points[index], points[index + 1]);
          else ctx.lineTo(points[index], points[index + 1]);
        }
      }
      ctx.strokeStyle = "rgba(248, 43, 147, 0.14)";
      ctx.stroke();

      for (let bucket = 0; bucket < dots.length; bucket++) {
        const coordinates = dots[bucket];
        if (!coordinates.length) continue;
        ctx.beginPath();
        for (let i = 0; i < coordinates.length; i += 3) {
          const x = coordinates[i], y = coordinates[i + 1], radius = coordinates[i + 2];
          ctx.moveTo(x + radius, y);
          ctx.arc(x, y, radius, 0, Math.PI * 2);
        }
        ctx.fillStyle = `rgba(248, 43, 147, ${(0.12 + bucket / 15 * 0.88) * 0.9})`;
        ctx.fill();
      }
      if (!motionDisabled && visible && !document.hidden) {
        time += elapsed;
        animationFrame = requestAnimationFrame(draw);
      }
    }

    function handlePointerMove(event: PointerEvent) {
      if (motionDisabled || !root) return;
      const rect = root.getBoundingClientRect();
      pointer.targetX = event.clientX - rect.left;
      pointer.targetY = event.clientY - rect.top;
    }
    function handlePointerLeave() {
      pointer.targetX = width * 0.58;
      pointer.targetY = height * 0.46;
    }
    function updateMotion() {
      cancelAnimationFrame(animationFrame);
      animationFrame = 0;
      previousTime = 0;
      motionDisabled = isMotionDisabled();
      // Retain the last frame without painting while offscreen or in a hidden tab.
      if (visible && !document.hidden) draw();
    }

    const observer = new ResizeObserver(() => {
      resize();
      if (!animationFrame && visible && !document.hidden) draw();
    });
    observer.observe(root);
    resize();
    draw();
    const visibilityObserver = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      updateMotion();
    });
    visibilityObserver.observe(root);
    root.addEventListener("pointermove", handlePointerMove, { passive: true });
    root.addEventListener("pointerleave", handlePointerLeave);
    document.addEventListener("visibilitychange", updateMotion);
    motionPreference.addEventListener("change", updateMotion);

    return () => {
      root.removeEventListener("pointermove", handlePointerMove);
      root.removeEventListener("pointerleave", handlePointerLeave);
      observer.disconnect();
      visibilityObserver.disconnect();
      document.removeEventListener("visibilitychange", updateMotion);
      motionPreference.removeEventListener("change", updateMotion);
      cancelAnimationFrame(animationFrame);
    };
  }, []);

  return (
    <section ref={rootRef} className={`math-grid ${className}`}>
      <canvas ref={canvasRef} className="math-grid__canvas" aria-hidden="true" />
      <div className="math-grid__gradient" aria-hidden="true" />
      <div className="math-grid__content">{children}</div>
    </section>
  );
}
