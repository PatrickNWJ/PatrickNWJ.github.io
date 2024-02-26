import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import LogoS from '../../assets/images/logo-s.png'
import LogoP from '../../assets/images/logo-p.png'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import { faLinkedin, faGithub, faItchIo } from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => {
    const [logoSrc, setLogoSrc] = useState(LogoS);
    return(
    <div className="nav-bar">
        <Link className="logo" to="/">
      
          <img 
                    src={logoSrc} 
                    alt="Logo" 
                    onMouseOver={() => setLogoSrc(LogoP)} 
                    onMouseOut={() => setLogoSrc(LogoS)} 
                />
        </Link>
        <nav>
        <NavLink exact="true" activeclassname="active" to="/">
        <FontAwesomeIcon icon={faHome} color="#006633" />
        </NavLink>
        <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
        <FontAwesomeIcon icon={faUser} color="#006633" />
        </NavLink>
        <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
        <FontAwesomeIcon icon={faEnvelope} color="#006633" />
        </NavLink>
        </nav>

<ul>


    <li>
        <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/patrick-walker-jauregui-318479192/">
            <FontAwesomeIcon icon ={faLinkedin} color="#006633" />
        </a>
    </li>

    

    
    <li>
        <a target="_blank" rel="noreferrer" href="https://github.com/PatrickNWJ">
            <FontAwesomeIcon icon ={faGithub} color="#006633" />
        </a>
        </li>
        <li>
        <a target="_blank" rel="noreferrer" href="https://lettucewalker.itch.io/">
            <FontAwesomeIcon icon ={faItchIo} color="#006633" />
        </a>
  
    </li>
</ul>


    </div>
);
    };

export default Sidebar
