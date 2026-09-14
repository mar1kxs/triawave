import './Home.css'
import Hero from './components/Hero/Hero'
import InfoBar from './components/Info Bar/InfoBar'
import SelectedWork from './components/Selected Work/SelectedWork'
import ForClients from './components/For Clients/ForClients'
import Outcomes from './components/Outcomes/Outcomes'
import Services from './components/Services/Services'
import Process from './components/Process/Process'
import Reviews from './components/Reviews/Reviews'
import Faq from './components/FAQ/Faq'
import Cta from './components/CTA/Cta'

const Home = () => {
  return (
      <div>
      <Hero />
      <InfoBar />
      <SelectedWork />
      <ForClients />
      <Outcomes />
      <Services />
      <Process />
      <Reviews />
      <Faq />
      <Cta/>
    </div>
  )
}

export default Home