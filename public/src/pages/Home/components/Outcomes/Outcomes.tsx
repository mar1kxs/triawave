import "./Outcomes.css"

type Outcome = {
    number: string
    title: string
    description: string
}

const items: Outcome[] = [
    {
        number: "01",
        title: "BUILD TRUST",
        description: "Present your business with the clarity and credibility your customers expect"
    },
    {
        number: "02",
        title: "CLARIFY YOUR OFFER",
        description: "Help visitors understand what you do, who it is for and why it matters — within seconds"
    },
    {
        number: "03",
        title: "TURN ATTENTION INTO ACTION",
        description: "Guide the right visitors towards an enquiry, booking or purchase"
    },
    {
        number: "04",
        title: "SUPPORT GROWTH",
        description: "Give your team a flexible website that evolves with your services, content and audience"
    }
]

const Outcomes = () => {

    return (
        <section className="outcomes">
            <div className="top-bar">
                <p className="text-small-title">04 / Outcomes</p>
                <p className="text-small-title">X:04 / Y:VALUE</p>
            </div>

            <h2 className="text-h2-secondary">
                What we help you achieve
            </h2>

            <ul className="cards-list">
                {items.map((item) => (
                    <li key={item.number} className="card">
                        <span className="card-number">{item.number}</span>

                        <div className="card-content">
                            <h3 className="text-h4-secondary">{item.title}</h3>
                            <p className="text-p1">{item.description}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </section>
    )
}

export default Outcomes