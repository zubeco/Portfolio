import React from 'react'
import './Leftside.css';
import Footer from '../../Navbar/Navbarcomponents/Footer';



const Leftside = () => {

    return (
        <div className='leftside-container'>
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
