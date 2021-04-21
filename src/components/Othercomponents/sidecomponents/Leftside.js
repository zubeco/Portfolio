import React from 'react'
import './Leftside.css';
import pics1 from '../../Navbar/images/pics1.jpg';
import pics2 from '../../Navbar/images/pics2.jpg';
import pics4 from '../../Navbar/images/pics4.jpg';
import pics6 from '../../Navbar/images/pics6.jpg';
import logo from '../../Navbar/images/logo.jpg';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from '../../Navbar/Navbarcomponents/Footer';



const Leftside = () => {
    const settings = {
        useTransform: true,
        dots: false,
        infinite: true,
        slidesToShow: 1,
        arrows:false,
        slidesToScroll: 1,
        autoplay: true,
        speed: 5000,
        autoplaySpeed: 4500,
        cssEase: 'cubic-bezier(0.600, -0.280, 0.735, 0.045)',
        responsive: [
        {
          breakpoint: 1024,
          settings: {
            dots: false
          }
        }]
      };


    return (
        <div className='leftside-container'>
                <div className="shift">
                    <div className="left">
                        <h3>Front-end <span>Developer</span></h3>
                        <h1>I'm Princewill Udeh</h1>
                        <div className="links">
                            <a className='my-info' href="/about">more about me</a>
                            <a className='hire' href="mailto: princezubby2020@gmail.com">hire me</a>
                        </div>
                    </div>
                    <div className="right">
                        <div>
                            <Slider {...settings}>

                                <div>
                                    <img  src={pics1} alt=""/>
                                </div>
                            
                                <div>
                                    <img  src={pics6} alt=""/>
                                </div>
                                <div>
                                    <img  src={logo} alt=""/>
                                </div>
                            </Slider>
                        </div>
                    </div>
                 </div>
                 <Footer />
        </div>
         )
}

export default Leftside
