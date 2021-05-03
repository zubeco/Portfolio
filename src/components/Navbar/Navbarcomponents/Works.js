import React from 'react'
import './Work.css';
import {Link} from 'react-router-dom';
import { BiChevronRight } from 'react-icons/bi';
import { FaGithub,FaChrome} from 'react-icons/fa';
import Form from './Form';
import Footer from './Footer';
    




const Works = () => {


    const works = [
        {
            title: 'Todo(with Hooks)',
            description: 'A todo app I built when learning React hooks and styled-components to understand how they work better. All components are function components and styling done with styled-components',
            skills: 'React, CSS, styled-components',
            github: "https://github.com/zubeco",
            website: '/',
        },
        {
            title: 'Landing Page',
            description: 'Building a fully responsive Nike landing page with HTML & CSS only',
            skills: 'React, CSS',
            github: "https://github.com/zubeco",
            website: '/',
        },
        {
            title: 'Currency Calculator App(API)',
            description: 'Building a Currency converter & fetching an accurate data(rate) using useEffect hook. ',
            skills: 'React, CSS, styled-components',
            github: "https://github.com/zubeco",
            website: '/',
        },
        {
            title: 'Crypto-Chart App',
            description: 'Building a Crypto-chart app and fetching data using Axios',
            skills: 'React, CSS, Axios',
            github: "https://github.com/zubeco",
            website: '/',
        }
    ]


    return (
        <div className='works-container'>
             <div className="about-link">
                <Link className='align1' style={{textDecoration: 'none'}} to="/"><li>Home</li><span className='spann'><BiChevronRight /></span></Link>
                <Link className='align2' style={{textDecoration: 'none'}} to="/works"><li>Works</li><span className='spann'><BiChevronRight /></span></Link>
            </div>
            <h1 className='projects'>HERE ARE A FEW OF MY PROJECTS.</h1>
            <div className="wrapper2">
                {
                    works.map(work => {
                        return (
                            <div>
                                <div className="make">
                                    <h2>{work.title}</h2>
                                    <p>{work.description}</p>
                                    <h5>{work.skills}</h5>
                                    <a className='github' href={work.github}><FaGithub /></a>
                                    <a className='chrome' href={work.website}><FaChrome/></a>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <Form />
            <Footer />    
        </div>
    )
}

export default Works
