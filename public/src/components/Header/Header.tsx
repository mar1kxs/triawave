
import './Header.css'
import logo from '../../assets/images/logo_header.svg'

const Header = () => {
    return (
        <div className="header">
            <img src={logo} alt="Logo" />
      <nav>
          <a href="#">WORK</a>
          <a href="#">SERVICES</a>
          <a href="#">ABOUT</a>
          <a href="#">CONTACT</a>
            </nav>
            <button>LET'S TALK</button>
      </div>
  )
}

export default Header