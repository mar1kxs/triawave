import { useEffect, useRef } from "react";
import { isMotionDisabled } from "../../../lib/motion/preferences";
import "./AboutHeroPhysics.css";

export function AboutHeroPhysics() {
  const svgRef = useRef<SVGSVGElement>(null);
  const frameRef = useRef<SVGGElement>(null);
  const cubeRef = useRef<SVGGElement>(null);
  const hitRef = useRef<SVGCircleElement>(null);

  useEffect(() => {
    const svg = svgRef.current;
    const frame = frameRef.current;
    const cube = cubeRef.current;
    const hit = hitRef.current;
    if (!svg || !frame || !cube || !hit) return;

    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    const halfBox = 96;
    const halfCube = 27;
    const wallSpin = Math.PI * 2 / 20;
    let angle = Math.PI / 4;
    let rotation = Math.PI / 12;
    let spin = 0.9;
    let x = -42, y = 0, vx = 156, vy = 93;
    let flash = 0, hitX = 0, hitY = 0;
    let request = 0, previous = 0, accumulator = 0;
    let inView = false;

    function draw() {
      frame!.setAttribute("transform", `translate(160 160) rotate(${angle * 180 / Math.PI})`);
      frame!.style.strokeOpacity = String(0.5 + flash * 0.5);
      cube!.setAttribute("transform", `translate(${160 + x} ${160 + y}) rotate(${rotation * 180 / Math.PI})`);
      hit!.setAttribute("cx", String(160 + hitX));
      hit!.setAttribute("cy", String(160 + hitY));
      hit!.setAttribute("r", String(5 + (1 - flash) * 14));
      hit!.style.opacity = String(flash * 0.65);
    }

    function step(dt: number) {
      angle = (angle + wallSpin * dt) % (2 * Math.PI);
      rotation = (rotation + spin * dt) % (2 * Math.PI);
      x += vx * dt;
      y += vy * dt;
      flash = Math.max(0, flash - dt * 3);
      const c = Math.cos(angle), s = Math.sin(angle);
      const relative = rotation - angle;
      // Support of the rotating small square along either wall normal.
      const extent = halfCube * (Math.abs(Math.cos(relative)) + Math.abs(Math.sin(relative)));
      const limit = halfBox - extent;
      let lx = c * x + s * y;
      let ly = -s * x + c * y;

      for (const axis of [0, 1]) {
        const position = axis === 0 ? lx : ly;
        if (Math.abs(position) <= limit) continue;
        const sign = Math.sign(position);
        if (axis === 0) lx = sign * limit;
        else ly = sign * limit;
        x = c * lx - s * ly;
        y = s * lx + c * ly;
        const nx = axis === 0 ? sign * c : -sign * s;
        const ny = axis === 0 ? sign * s : sign * c;
        // Select the actual support corner for an accurate moving-wall contact.
        const cc = Math.cos(rotation), cs = Math.sin(rotation);
        const ux = Math.sign(nx * cc + ny * cs) * halfCube;
        const uy = Math.sign(-nx * cs + ny * cc) * halfCube;
        const rx = cc * ux - cs * uy, ry = cs * ux + cc * uy;
        const cx = x + rx, cy = y + ry;
        const relativeX = vx - spin * ry + wallSpin * cy;
        const relativeY = vy + spin * rx - wallSpin * cx;
        const outward = relativeX * nx + relativeY * ny;
        if (outward > 0) {
          // Normal impulse with rotational inertia for a uniform square.
          const inertia = 2 * halfCube * halfCube / 3;
          const arm = rx * ny - ry * nx;
          const impulse = 1.98 * outward / (1 + arm * arm / inertia);
          vx -= impulse * nx;
          vy -= impulse * ny;
          spin = Math.max(-3.2, Math.min(3.2, spin - impulse * arm / inertia));
          hitX = cx; hitY = cy; flash = 1;
        }
      }
      // Restore translation promptly after impacts so the cube stays light and lively.
      const speed = Math.hypot(vx, vy);
      if (speed > 0) {
        const target = Math.max(150, Math.min(225, speed));
        const scale = 1 + (target / speed - 1) * Math.min(1, dt * 8);
        vx *= scale; vy *= scale;
      }
    }

    function tick(time: number) {
      accumulator += previous ? Math.min((time - previous) / 1000, 0.05) : 0;
      previous = time;
      while (accumulator >= 1 / 120) {
        step(1 / 120);
        accumulator -= 1 / 120;
      }
      draw();
      request = requestAnimationFrame(tick);
    }

    function sync() {
      cancelAnimationFrame(request);
      previous = 0;
      accumulator = 0;
      if (isMotionDisabled()) {
        angle = Math.PI / 4; rotation = Math.PI / 12;
        x = -42; y = 0; flash = 0;
        draw();
      } else if (inView && !document.hidden) {
        request = requestAnimationFrame(tick);
      }
    }
    const observer = new IntersectionObserver(([entry]) => {
      inView = entry.isIntersecting;
      sync();
    });
    observer.observe(svg);
    preference.addEventListener("change", sync);
    document.addEventListener("visibilitychange", sync);
    return () => {
      cancelAnimationFrame(request);
      observer.disconnect();
      preference.removeEventListener("change", sync);
      document.removeEventListener("visibilitychange", sync);
    };
  }, []);

  return <svg ref={svgRef} className="about-hero-physics" viewBox="0 0 320 320" aria-hidden="true" focusable="false">
    <g ref={frameRef} transform="translate(160 160) rotate(45)" fill="none" stroke="#ff3288" strokeWidth="1" strokeOpacity=".5">
      <rect x="-96" y="-96" width="192" height="192" />
    </g>
    <circle ref={hitRef} className="about-hero-impact" cx="160" cy="160" r="5" fill="#ff3288" opacity="0" />
    <g ref={cubeRef} transform="translate(118 160) rotate(15)">
      <rect x="-27" y="-27" width="54" height="54" fill="#ff3288" />
      <path d="M-26 26V-26H26" fill="none" stroke="#ff89bc" strokeOpacity=".5" />
    </g>
  </svg>;
}
