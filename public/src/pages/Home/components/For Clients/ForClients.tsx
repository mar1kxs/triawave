import './ForClients.css'

const industries = [
  {
    number: '01',
    title: 'GROWING COMPANIES',
    description:
      'For established businesses that have outgrown their current website and need a stronger digital presence.',
    icon: 'growing',
  },
  {
    number: '02',
    title: 'PROFESSIONAL SERVICES',
    description:
      'For law firms, consultants, recruiters and expert-led businesses that need to communicate clearly and earn trust.',
    icon: 'services',
  },
  {
    number: '03',
    title: 'E-COMMERCE BRANDS',
    description:
      'For brands that need a stronger digital identity and a smoother path from discovery to purchase.',
    icon: 'ecommerce',
  },
  {
    number: '04',
    title: 'STARTUPS',
    description:
      'For new ventures that need to launch with clarity, credibility and room to grow.',
    icon: 'startups',
  },
];

const ForClients = () => {
  return (
    <section className="for-clients">
      <div className="top-bar"><p className="text-small-title">03 / Who we help</p> <p className="text-small-title">X:03 / Y:AUDIENCE</p></div>
      <h2 className="text-h2">BUILT FOR BUSINESSES READY FOR WHAT’S NEXT</h2>
      <div className="industries__grid">
        {industries.map((item) => (
          <article className="industry-card" key={item.number}>
            <span className="industry-card__number">
              {item.number}
            </span>

            <div className="industry-card__content">
              <h3 className="text-h4">{item.title}</h3>
              <p className="text-p1">{item.description}</p>
            </div>

            {/* <IndustryIcon type={item.icon} /> */}
          </article>
        ))}
      </div>
    </section>
  )
}

export default ForClients