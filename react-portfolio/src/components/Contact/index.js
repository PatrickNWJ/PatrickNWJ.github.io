import Loader from 'react-loaders'
import './index.scss'
import AnimatedLetters from '../AnimatedLetters'
import { useState, useEffect, useRef } from 'react';
import emailjs from '@emailjs/browser'


const Contact = () => {

    const [letterClass, setLetterClass] = useState('text-animate')
    const refForm = useRef()

    useEffect(() => {

        setTimeout(() => {
          setLetterClass('text-animate-hover')
        },3000)
      
        }, [])

        const sendEmail = (e) => {
            e.preventDefault()
          
            emailjs
            .sendForm(
                'gmail',
                'template_od5reec',
                refForm.current,
                'sZVrsWzfTmj7O3uw6' )
            .then(
                () => {
                    alert('Message sucesfully sent!')
                    window.location.reload(false)
                },
                () => {
                    alert('Failed to send the message, please try again')
                }
            )
        }

  
  
    return (
        <>
        
        <div className='container contact-page'>
        <div className="text-zone">
            <h1>
                
                <AnimatedLetters 
                letterClass={letterClass}
                strArray={['C','o','n','t','a','c','t', ' ', 'm','e']}
                idx={15}
            />
            </h1>
            <p>
                I am looking for full-time job opportunities - specifically software engineering roles. 
                However, if you have other job requests that fall under my interests or any other question,
                please contact me below as well!

            </p>
            <div className='contact-form'>
                <form ref={refForm} onSubmit={sendEmail}>
                    <ul>
                        <li className="half">
            <input type ="text" name="name" placeholder="Name" required />
            
                        </li>
                        <li className="half">
            <input type ="email" name="email" placeholder="Email" required />
            
                        </li>
                        <li>
                            <input placeholder="Subject" type="text" name="subject" required />
                        </li>
                        <li> 
                            <textarea placeholder="Message" name="message" required></textarea>
                        </li>
                        <li>
                            <input type="submit" className="flat-button" value="SEND"/>
                        </li>
                    </ul>
                </form>
            </div>
        </div>


        </div>
        <Loader type ="ball-rotate" />

        </>
    )
}

export default Contact