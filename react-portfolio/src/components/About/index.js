import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngular, faCss3, faGitAlt, faHtml5, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons';
import Loader from 'react-loaders'



const About = () => {
    const [letterClass, setLetterClass] = useState('text-animate')

    useEffect(() => {

        setTimeout(() => {
          setLetterClass('text-animate-hover')
        },3000)
      
        }, [])

    return (
        <>
        <div className="container about-page">
            <div className='text-zone'>
                <h1>
                    <AnimatedLetters
                    letterClass={letterClass}
                    strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
                    idx={15}
                    />
                </h1>
                <p>
                I'm a recent Computer Science graduate from Arizona State University,
                looking for a role as a Software Engineer, Web Developer, or Game Developer. 

                </p>
                <p>
                I am always looking to challenge myself and learn new things everyday. There is no 
                topic or hurdle that I won't try to overcome or master. 
                </p>

                <p>
                If I were to describe myself, I would say I am creative, like to draw, a film enthusiast,
                and have a love for the capabilities programming and software brings!
                </p>
            </div>
<div className='stage-cube-cont'>
    <div className='cubespinner'>
       
        <div className='face1'>
            <FontAwesomeIcon icon={faAngular} color="#DD0031" />

        </div>

        <div className='face2'>
            <FontAwesomeIcon icon={faHtml5} color="#F06529" />

        </div>

        <div className='face3'>
            <FontAwesomeIcon icon={faCss3} color="#28A4D9" />

        </div>

        <div className='face4'>
            <FontAwesomeIcon icon={faReact} color="#5ED4F4" />

        </div>

        <div className='face5'>
            <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />

        </div>

        <div className='face6'>
            <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />

        </div>
    </div>
</div>
        </div>
       <Loader type ="ball-rotate" />
</>
    )
}

export default About