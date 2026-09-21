import { MotionHeading } from "../../../components/ui/MotionHeading";
import { useRef, useState } from "react";
import { SectionHead } from "../../../components/ui/SectionHead";
import { TESTIMONIALS } from "../content";

export function TestimonialsSection() {
  const track = useRef<HTMLDivElement>(null);
  const [current, setCurrent] = useState(0);
  const [expanded, setExpanded] = useState<number | null>(null);
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
      <div className="testimonials-track" ref={track}>
        {TESTIMONIALS.map((testimonial, index) => (
          <article className="testimonial" key={`${testimonial.title}-${index}`}>
            <h3>{testimonial.title}</h3>
            <p>{testimonial.quote}</p>
            <button type="button" className="text-link" aria-expanded={expanded === index} onClick={() => setExpanded(expanded === index ? null : index)}>Read more <span /></button>
            {expanded === index && <p className="review-note">This review is placeholder text in the design. The full client review has not been supplied.</p>}
            <div className="stars" aria-label={`${testimonial.rating} out of 5 stars`}>{Array.from({ length: 5 }, (_, star) => <img key={star} src={`/assets/review-star${star >= testimonial.rating ? "-muted" : ""}.svg`} alt="" aria-hidden="true" width="20" height="20" loading="lazy" decoding="async" />)}</div>
          </article>
        ))}
      </div>
    </section>
  );
}
