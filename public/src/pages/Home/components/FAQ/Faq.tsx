import { useState } from 'react'
import './Faq.css'

type FaqItem = {
    number: string
    question: string
    answer: string
}

const items: FaqItem[] = [
    {
        number: '01',
        question: 'What do you need from us before starting?',
        answer: 'We need your goals, brand information, content, references and any specific requirements before we start.'
    },
    {
        number: '02',
        question: 'What do you need from us before starting?',
        answer: 'We need your goals, brand information, content, references and any specific requirements before we start.'
    },
    {
        number: '03',
        question: 'Can you help with content and structure?',
        answer: 'Yes. We can help define the structure, hierarchy and content direction to make the website clear and effective.'
    },
    {
        number: '04',
        question: 'Can we update the website ourselves?',
        answer: 'Yes. We build websites so your team can easily manage and update the content after launch.'
    },
    {
        number: '05',
        question: 'Do you work with clients outside Europe?',
        answer: 'Yes. We work remotely with clients regardless of their location.'
    },
    {
        number: '06',
        question: 'How does payment work?',
        answer: 'Payment is usually split into agreed milestones depending on the scope and complexity of the project.'
    },
    {
        number: '07',
        question: 'What happens after launch?',
        answer: 'After launch, we can continue supporting, maintaining and improving your website when needed.'
    },
    {
        number: '08',
        question: 'How do you choose the right approach for our website?',
        answer: 'We choose the approach based on your goals, audience, content, technical requirements and the overall project scope.'
    }
]

const Faq = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null)

    const toggleFaq = (index: number) => {
        setOpenIndex(openIndex === index ? null : index)
    }

    return (
        <section className="faq">

            <div className="top-bar">
                <p className="text-small-title">08 / Questions</p>
                <p className="text-small-title">X:08 / Y:FAQ</p>
            </div>

            <div className="faq-container">

                <div className="faq-content">
                    <h2 className="text-h2-secondary">
                        Frequently asked
                    </h2>

                    <p className="text-p1">
                        For brands that need a strong identity and a clear path from product to purchase.
                    </p>
                </div>

                <div className="faq-visual">

                    <ul className="faq-list">
                        {items.map((item, index) => {
                            const isOpen = openIndex === index

                            return (
                                <li
                                    className={`faq-item ${isOpen ? 'is-open' : ''}`}
                                    key={item.number}
                                >
                                    <button
                                        className="faq-question"
                                        onClick={() => toggleFaq(index)}
                                    >
                                        <span className="faq-number">
                                            {item.number}
                                        </span>

                                        <span className="faq-question-text">
                                            {item.question}
                                        </span>

                                        <span className="faq-icon">
                                            {isOpen ? '−' : '+'}
                                        </span>
                                    </button>

                                    <div className="faq-answer">
                                        <p>{item.answer}</p>
                                    </div>
                                </li>
                            )
                        })}
                    </ul>

                </div>

            </div>
        </section>
    )
}

export default Faq
