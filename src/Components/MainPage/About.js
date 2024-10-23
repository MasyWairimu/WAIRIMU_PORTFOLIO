import React from 'react'
import './MainPage.css'
import FooterLine from '../../assets/FooterLine.png'
import PortfolioImage from '../../assets/PortfolioImage.jpeg'


const About = () => {
    return (
        <div className='aboutPage' >
            <div class="pageIntro" id='Intro'>
                <h5 className='introName'>Hello, my name is</h5>
                <h3 className='Name'>Mercy Wairimu Gitingu.</h3>
                <h4 className='Slogan'>Unlocking Possibilities, One Line of Code at a Time</h4>
                <div className='intro'>
                    <p>I am a software developer graduated from the University of Eastern Africa, Baraton.</p>
                    <p>Primarily interested and continually improving my skills in full-stack development.</p>
                    <p>I enjoy challenging myself by learning new skills and implementing the solutions in real life!</p>
                </div>
                <div class="getintouchButton">
                    <a href='mailto: wairimugitungu@gmail.com'>
                        <button >
                            Get In Touch
                        </button>
                    </a>
                </div>
            </div>

            <div className='aboutContent' id='About'>
                <h2 className='title'>
                    01. ABOUT
                    <img src={FooterLine} alt='Line' style={{ width: '250px' }} className='titleLine' />
                </h2>
                <div className='content'>
                    <div className='text'>
                        <p>I am Mercy Wairimu Gitingu, a  Bsc. Software Engineering graduate from the University of Eastern Africa, Baraton.  I have a strong focus on full-stack development where my interest lies in the design of efficient, user-centric systems, which provide solutions to real-life problems.</p>
                        <p>Proficient in technologies like React, Node.js, mySQL and MongoDB. My strong points are responsive web application construction and the development of smooth user interfaces.</p>
                        <p>Here are some other activities I love doing:</p>
                        <div className='list'>
                            <ol>
                                <div className='left-section'>
                                    <li>Team Management</li>
                                    <li>Coding</li>
                                    <li>User Training</li>
                                    <li>Designing User Interfaces</li>
                                </div>
                                <div className='right-section'>
                                    <li>Nature trails</li>
                                    <li>Reading</li>
                                    <li>Team Building activities</li>
                                </div>
                            </ol>
                        </div>
                    </div>

                    <div className='image'>
                        <div className='rectangle'></div>
                        <img src={PortfolioImage} alt='Line' className='portfolioImage' />
                    </div>
                </div>
            </div>
        </div>

    )
}

export default About