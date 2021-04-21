import React from 'react'
import './Contact.css';
import {Link} from 'react-router-dom';
import { BiChevronRight,BiMailSend } from 'react-icons/bi';
import smiley from '../images/smiley.png';
import Footer from './Footer';






const Contact = () => {
    return (
        <div className='contact-container'>
            <div className="about-link">
                <Link className='align1' style={{textDecoration: 'none'}} to="/"><li>Home</li><span className='spann'><BiChevronRight /></span></Link>
                <Link className='align2' style={{textDecoration: 'none'}} to="/contact"><li>Contact</li><span className='spann'><BiChevronRight /></span></Link>
            </div>
            <div className="wrap1">
                <h3>Hey!<span><img className='smiley' src={smiley} alt=""/></span></h3>
                <h1>It's Princewill and You can reach out to me by Clicking the Button below</h1>
                <a href="mailto: princezubby2020@gmail.com" className="shoot1"><BiMailSend className='try'/></a>
            </div>
            <Footer />
        </div>
    )
}

export default Contact
