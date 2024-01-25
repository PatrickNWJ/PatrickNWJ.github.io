import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import LogoS from '../../assets/images/logo-s.png'

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub, faItchIo } from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => (
    <div className="nav-bar">
        <Link className="logo" to="/">
            <img src={LogoS} alt="logo" />
          
        </Link>
        <nav>
        <NavLink exact="true" activeclassname="active" to="/">
        <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
        </NavLink>
        <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
        <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
        </NavLink>
        <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
        <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
        </NavLink>
        </nav>

<ul>


    <li>
        <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/patrick-walker-jauregui-318479192/">
            <FontAwesomeIcon icon ={faLinkedin} color="#4d4d4e" />
        </a>
    </li>

    

    
    <li>
        <a target="_blank" rel="noreferrer" href="https://github.com/PatrickNWJ">
            <FontAwesomeIcon icon ={faGithub} color="#4d4d4e" />
        </a>
        </li>
        <li>
        <a target="_blank" rel="noreferrer" href="https://lettucewalker.itch.io/">
            <FontAwesomeIcon icon ={faItchIo} color="#4d4d4e" />
        </a>
  
    </li>
</ul>


    </div>
)

export default Sidebar
