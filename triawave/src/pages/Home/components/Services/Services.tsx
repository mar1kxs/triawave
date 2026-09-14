import './Services.css'

type Service = {
    number: string
    title: string
    description: string
}

const items: Service[]  = [
    {
        number: '01',
        title: 'WEBSITE STRATEGY',
        description: 'Structure, positioning and a clear plan for your future website'
    },
    {
        number: '02',
        title: 'UI/UX & WEB DESIGN',
        description: 'Intuitive user experiences and distinctive interfaces for every screen'
    },
    {
        number: '03',
        title: 'WIX & WIX STUDIO DEVELOPMENT',
        description: 'Flexible, responsive websites your team can update and scale with confidence'
    },
    {
        number: '04',
        title: 'WEBFLOW DEVELOPMENT',
        description: 'Scalable marketing websites built for content, performance and continuous growth'
    },
    {
        number: '05',
        title: 'CUSTOM WEB DEVELOPMENT',
        description: 'Custom React and Next.js solutions for complex business requirements'
    },
    {
        number: '06',
        title: 'E-COMMERCE DEVELOPMENT',
        description: 'Online stores designed around your products, customers and buying journey'
    },
    {
        number: '07',
        title: 'LANDING PAGE DESIGN & DEVELOPMENT',
        description: 'Focused campaign pages that communicate one offer and turn traffic into action'
    },
    {
        number: '08',
        title: 'WEBSITE SUPPORT & OPTIMIZATION',
        description: 'Ongoing design, development and optimization after your website goes live'
    }
]

const Services = () => {

    return (
        <section className='services'>
            <div className="top-bar">
                <p className="text-small-title">05 / Services</p>
                <p className="text-small-title">X:05 / Y:SERVICE</p>
            </div>

            <h2 className='text-h2-secondary'>Services</h2>

            <ul className='services-list'>
                {items.map((item) => (
                    <li key={item.number} className='services-card'>

                        <div className='services-content'>
                        <span className='services-number'>{item.number}</span>
                            <h3 className='text-h4'>{item.title}</h3>
                        </div>
                            <p className='text-p1'>{item.description}</p>
                    </li>
                ))}
            </ul>
        </section>
    )
}

export default Services