
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './index.scss';

import AnimatedLetters from '../AnimatedLetters';
import Loader from 'react-loaders'

const Home = () => {
const [letterClass, setLetterClass] = useState('text-animate')
const nameArray = [' ','P', 'a', 't', 'r', 'i', 'c', 'k']
const jobArray = ['S','o','f','t','w','a','r','e',' ','E','n','g','i','n','e','e','r','.']

useEffect(() => {

  setTimeout(() => {
    setLetterClass('text-animate-hover')
  },4000)

  }, [])


return (
<>
    <div className="container home-page">
<div className="text-zone">

<h1> 
    <span className={letterClass}>H</span>
    <span className={`${letterClass} _12`}>i,</span>
    <br /> 
    <span className={`${letterClass} _12`}>I</span>
    <span className={`${letterClass} _12`}>'m</span>
 <AnimatedLetters letterClass={letterClass}
 strArray={nameArray}
 idx={15} />
   <br />
   <AnimatedLetters letterClass={letterClass}
 strArray={jobArray}
 idx={22} />
   </h1>
   <h2>Software Engineer / Website Developer / Game Developer</h2>
   <Link to="/contact" className='flat-button'>CONTACT ME</Link>
</div>
    </div>
        <Loader type ="ball-rotate" />
        </>
)
}
export default Home