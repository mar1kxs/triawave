import { useState } from 'react'
import './Reviews.css'
import { testimonials } from '../../../../data/testimonials'

const Reviews = () => {
    const [current, setCurrent] = useState(0)

    const reviewsPerPage = 3
    const totalPages = Math.ceil(testimonials.length / reviewsPerPage)

    const nextReview = () => {
        if (current < totalPages - 1) {
            setCurrent(current + 1)
        }
    }

    const previousReview = () => {
        if (current > 0) {
            setCurrent(current - 1)
        }
    }

    return (
        <section className="reviews">

            <div className="top-bar">
                <p className="text-small-title">06 / Reviews</p>
                <p className="text-small-title">X:06 / Y:REVIEWS</p>
            </div>

            <h2 className="text-h2">What clients say</h2>

            <div className="review-container">

                <div className="review-btns">
                    <button onClick={previousReview}>
                        ←
                    </button>

                    <span>
                        {current + 1}/{totalPages}
                    </span>

                    <button onClick={nextReview}>
                        →
                    </button>
                </div>

                <div style={{ overflow: 'hidden' }}>
                    <div
                        className="review-list"
                        style={{
                            display: 'flex',
                            transform: `translateX(-${current * 100}%)`,
                            transition: 'transform 0.5s ease',
                        }}
                    >
                        {testimonials.map((testimonial, index) => (
                            <article
                                className="review-card"
                                key={index}
                            >
                                <div className="review-title-group">
                                    <p className="text-h5">
                                        {testimonial.company}
                                    </p>

                                    <p className="text-h5">
                                        {testimonial.service}
                                    </p>
                                </div>

                                <p className="text-p2">
                                    {testimonial.text}
                                </p>

                                <p className="review-text-readmore">
                                    READ MORE
                                </p>

                                <p className="review-stars">
                                    {'★'.repeat(testimonial.stars)}
                                </p>
                            </article>
                        ))}
                    </div>
                </div>

            </div>

        </section>
    )
}

export default Reviews