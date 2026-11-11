import { MotionHeading } from "../../../components/ui/MotionHeading";
import { useRef, useState } from "react";
import { SectionHead } from "../../../components/ui/SectionHead";
import { TESTIMONIALS } from "../content";

export function TestimonialsSection() {
  const track = useRef<HTMLDivElement>(null);
  const [current, setCurrent] = useState(0);
  const move = (direction: number) => {
    const next = Math.max(0, Math.min(TESTIMONIALS.length - 1, current + direction));
    const card = track.current?.children[next] as HTMLElement | undefined;
    if (card && track.current) track.current.scrollTo({ left: card.offsetLeft - track.current.offsetLeft, behavior: "smooth" });
    setCurrent(next);
  };
  return (
    <section className="testimonials-section">
      <SectionHead index="06" label="Client stories" axis="PROCESS" />
      <div className="testimonial-title-row">
        <MotionHeading>What clients say</MotionHeading>
        <div className="testimonial-controls" aria-label="Review navigation">
          <button type="button" aria-label="Previous review" disabled={current === 0} onClick={() => move(-1)}><img src="/assets/review-arrow-left.svg" alt="" aria-hidden="true" width="35" height="35" loading="lazy" decoding="async" /></button>
          <span aria-live="polite">{current + 1}/{TESTIMONIALS.length}</span>
          <button type="button" aria-label="Next review" disabled={current === TESTIMONIALS.length - 1} onClick={() => move(1)}><img src="/assets/review-arrow-right.svg" alt="" aria-hidden="true" width="35" height="35" loading="lazy" decoding="async" /></button>
        </div>
      </div>
      <div
        className="testimonials-track"
        ref={track}
        onScroll={() => {
          const container = track.current;
          if (!container) return;
          const center = container.getBoundingClientRect().left + container.clientWidth / 2;
          let closestIndex = 0;
          let closestDistance = Number.POSITIVE_INFINITY;
          Array.from(container.children).forEach((child, index) => {
            const card = child.getBoundingClientRect();
            const distance = Math.abs(card.left + card.width / 2 - center);
            if (distance < closestDistance) {
              closestDistance = distance;
              closestIndex = index;
            }
          });
          setCurrent((currentIndex) => currentIndex === closestIndex ? currentIndex : closestIndex);
        }}
      >
        {TESTIMONIALS.map((testimonial, index) => (
          <article className="testimonial" key={`${testimonial.title}-${index}`}>
            <h3>{testimonial.title}</h3>
            <p>{testimonial.quote}</p>
            <div className="stars" aria-label={`${testimonial.rating} out of 5 stars`}>{Array.from({ length: 5 }, (_, star) => <img key={star} src={`/assets/review-star${star >= testimonial.rating ? "-muted" : ""}.svg`} alt="" aria-hidden="true" width="20" height="20" loading="lazy" decoding="async" />)}</div>
          </article>
        ))}
      </div>
    </section>
  );
}
