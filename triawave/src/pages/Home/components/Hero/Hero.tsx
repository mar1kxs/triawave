import './Hero.css'

const Hero = () => {
  return (
      <section className="hero">
          <div className="hero-layout">              
          <div className="hero-content">
              <p className="text-small-title">01 / Hero — Three minds / One direction</p>
              <h1 className="text-h1 hero-h1">WEBSITES THAT MOVE BUSINESSES FORWARD</h1>
              <p className="text-p1 hero-p1">We combine strategy, design and development to create distinctive websites that clarify your offer, build trust and support growth</p>
              <div className="hero-buttons"><button>START A PROJECT</button>
              <button className="hero-btn-secondary">VIEW OUR WORK</button></div>
              </div>
              <div className="bottom-bar"><p className="text-p3">INDEPENDENT DIGITAL STUDIO</p> <p className="text-p3">Europe / Worldwide</p> <p className="text-p3">Scroll to explore</p></div>
          </div>
    </section>
  )
}

export default Hero