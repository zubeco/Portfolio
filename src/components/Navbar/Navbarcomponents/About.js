import React from 'react'
import {Link} from 'react-router-dom';
import { BiChevronRight} from 'react-icons/bi';
import './About.css';
import logo from '../images/logo.jpg';
import Form from './Form';
import Footer from './Footer';




const About = () => {
    return (
        <div className='about-container'>
            <div className="about-link">
                <Link className='align1' style={{textDecoration: 'none'}} to="/"><li>Home</li><span className='spann'><BiChevronRight /></span></Link>
                <Link className='align2' style={{textDecoration: 'none'}} to="/about"><li>About</li><span className='spann'><BiChevronRight /></span></Link>
            </div>
            <h1 className='what'>About me</h1>
            <div className="wrapper">
                <img className='logo' src={logo} alt=""/>
                <div className="contain">
                    <p>Hello! My name is <span className='bold'>Udeh Princewill Nzubechukwu</span></p>
                    <p>A Nigerian-based Front-end web developer. During the few months i have been coding, I have picked up relevant languages, skills and frameworks - HTML, CSS, Vanilla Javascript, React JS and currently learning Vue JS. I have adequate knowledge of Git. </p>
                    <p>I try to build cool web Apps to keep my skillset. I consider the internet the greatest learning environment, and solving problems the best teacher.</p>
                    <p>When I'm not coding , I'm either playing video game,On social media or reading to gain more knowledge.</p>
                    <p>If you wish to reach through a pretty form, I am sorry to disappoint you as there is none. <a className='shoot' href="mailto: princezubby2020@gmail.com">Just shoot me a Mail</a>- it makes both our lives easier.</p>
                    <p className='bold'>Cheers!</p>
                </div>
                <Form/>
            </div>
            <Footer />
        </div>
    )
}

export default About