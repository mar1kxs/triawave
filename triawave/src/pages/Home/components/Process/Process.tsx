import './Process.css'

type Process = {
    number: string
    title: string
    description: string
}

const item: Process[] = [
    {
        number: "01",
        title: "DISCOVER",
        description: "We learn how your business works, who you serve and what the website needs to achieve"
    },
    {
        number: '02',
        title: "DEFINE",
        description: "We define the scope, website structure, content and technology before design begins"
    },
    {
        number: "03",
        title: "DESIGN",
        description: "We turn the strategy into a clear user experience and distinctive visual direction",
    },
    {
        number: "04",
        title: "BUILD",
        description: "We develop the approved design for performance, accessibility and every screen"
    },
    {
        number: "05",
        title: "LAUNCH",
        description: "We test every detail, connect the essential tools and prepare the website to go live"
    },
    {
        number: "06",
        title: "GROW",
        description: "We support, maintain and improve the website as your business evolves"
    }
]

const Process = () => {

    return (
        <section className='process'>
            <div className="top-bar">
                <p className="text-small-title">05 / Process</p>
                <p className="text-small-title">X:05 / Y:PROCESS</p>
            </div>

            <div className='process-container'>
                <div className='process-content'>
                    <h2 className='text-h2-secondary'>
                        FROM FIRST IDEA TO LAUNCH — AND BEYOND
                    </h2>

                    <p className='text-p1'>
                        A clear, collaborative process that keeps every stage, decision and deliverable moving forward
                    </p>
                </div>

                <div className='process-visual'>
                    <ul className='process-list'>
                        {item.map((process) => (
                            <li key={process.number} className='process-card'>
                                <span className='process-number'>{process.number}</span>
                                <h3 className='text-h3'>{process.title}</h3>
                                <p className='text-p2'>{process.description}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Process