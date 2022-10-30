import React from 'react'
import linkedin from "../../svg/linkedin.svg"
import github from "../../svg/github.svg"
import email from "../../svg/email.svg"
import './Footer.css'

const Footer = () => {
    return (
        <footer className='footer'>
            <h3>Follow me:</h3>
            <div className='social'>
                <a href='https://github.com/edukaki'><img src={github} alt='github' /></a>
                <a href='https://www.linkedin.com/in/eduardo-arakaki/'><img src={linkedin} alt='linkedin' /></a>
                <a href='eduardo.arakaki@hotmail.com'><img src={email} alt='email' /></a>
            </div>
        </footer>
    )
}

export default Footer
