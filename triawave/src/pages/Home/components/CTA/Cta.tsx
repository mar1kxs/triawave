import './Cta.css'

const Cta = () => {
  return (
      <section className='cta'>
          <div className='cta-left'>
              <h2 className='text-h1'>LET’S TALK <br />
                  <span className='outline-text '>MOVE.</span>
              </h2>
              <p className='text-p1'>A new website, a fresh direction, or an idea worth exploring. Let's talk it through.</p>
          </div>
          <div className='cta-right'>
              <button>Discuss your project</button>
          </div>
    </section>
  )
}

export default Cta