import React,{useEffect} from 'react'
import './Leftside.css';
import Footer from '../../Navbar/Navbarcomponents/Footer';
import Aos from 'aos';
import 'aos/dist/aos.css';



const Leftside = () => {
    useEffect(() => {
        Aos.init ({duration: 1000});
    }, [])

    return (
        <div className='leftside-container' data-aos="fade-right">
                <div className="shift">
                    <div className="left">
                        <h3>Front-end <span>Developer</span></h3>
                        <h1>I'm Princewill Udeh</h1>
                        <div className="links">
                            <a className='my-info'  href="/about">more about me</a>
                            <a className='hire' href="mailto: princezubby2020@gmail.com">hire me</a>
                        </div>
                    </div>
                 </div>
                 <Footer />
        </div>
         )
}

export default Leftside
