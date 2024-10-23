import React from 'react'
import './MainPage.css'
import FooterLine from '../../assets/FooterLine.png'


const Experience = () => {
    return (
        <div className='ExperienceSection' id='Experience'>
            <h2 className='title'>
                02. EXPERIENCE <span> </span>
                <img src={FooterLine} alt='Line' style={{ width: '250px' }} className='titleLine' />
            </h2>

            <div className='experienceContent'>
                <div className='experience' eventKey="Bennavi" title="Bennavi-SoftSolution">
                    <h3>Intern, Bennavi Softsolution</h3>
                    <h4>MAY 2024 - AUGUST 2024, ELDORET</h4>
                    <p className='text'>
                        ● I played an important role as the project manager where I
                        gained skills in leadership, teamwork, and project management.
                    </p>
                    <p className='text'>
                        ● Worked on developing EAVI, a school system that aims at
                        streamlining the student application process.
                    </p>
                    <p className='text'>
                        ● Participated in the creation of an e-commerce platform that streamlines
                        the purchase of goods from the platform
                    </p>
                </div>
                <div className='experience' eventKey="G-Tech" title="G-Tech">
                    <h3>Front-end Developer, G-Tech Company</h3>
                    <p></p>
                    <h4>OCTOBER 2023 - JANUARY 2024, KAPSABET</h4>
                    <p className='text'>
                        ● Worked with mobile developers in the front-end development of a mobile software that
                        could enables patients <br /> with diabetes and blood pressure
                        conditions to directly contact their doctors through an app
                        identified as Doc&I
                    </p>
                    <p className='text'>
                        ● Conducted the testing of the software to ensure that the system was smooth and
                        running and met all user requirements.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Experience