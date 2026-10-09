import "./uiux-hero-cubes.css";

export function UiUxHeroCubes() {
  return (
    <svg className="uiux-hero-cubes" viewBox="0 0 780 590" role="img" aria-label="Three connected cubes: UX / The path, UI / The screen, Web / Every device">
      <g fill="none" stroke="#a61060" strokeWidth="1.3">
        <path d="M446 120 209 363 637 438Z" />
      </g>
      <g className="uiux-hero-cubes__faces">
        <path fill="#ff209c" stroke="#ff209c" d="m446 9 96 55-96 55-96-55Z" />
        <path fill="#e92192" stroke="#e92192" d="m350 64 96 55v112l-96-56Z" />
        <path fill="#cb137d" stroke="#cb137d" d="m446 119 96-55v111l-96 56Z" />
      </g>
      <g className="uiux-hero-cubes__faces">
        <path fill="#f2bdd4" stroke="#f2bdd4" d="m209 274 80 44-80 45-79-45Z" />
        <path fill="#dc98b9" stroke="#dc98b9" d="m130 318 79 45v89l-79-44Z" />
        <path fill="#c87da5" stroke="#c87da5" d="m209 363 80-45v90l-80 44Z" />
      </g>
      <g className="uiux-hero-cubes__faces">
        <path fill="#f3efed" stroke="#f3efed" d="m637 364 68 37-68 38-68-38Z" />
        <path fill="#d9d1dc" stroke="#d9d1dc" d="m569 401 68 38v73l-68-37Z" />
        <path fill="#bfb5c5" stroke="#bfb5c5" d="m637 439 68-38v74l-68 37Z" />
      </g>
      <g className="uiux-hero-cubes__labels">
        <rect x="569" y="91" width="122" height="35" />
        <text x="630" y="109">UX / THE PATH</text>
        <rect x="9" y="250" width="135" height="35" />
        <text x="76.5" y="268">UI / THE SCREEN</text>
        <rect x="561" y="542" width="163" height="35" />
        <text x="642.5" y="560">WEB / EVERY DEVICE</text>
      </g>
    </svg>
  );
}