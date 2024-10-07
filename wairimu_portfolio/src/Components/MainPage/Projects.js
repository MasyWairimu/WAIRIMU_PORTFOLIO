import React from 'react'
import FooterLine from '../../assets/FooterLine.png'
import SafariScreenshot from '../../assets/laptop-screen1.jpeg'
import Doctor from '../../assets/DOC&I-Doctor.jpeg'
import Patient from '../../assets/DOC&I-Patient.jpeg'
import EAVI from '../../assets/image.png'
import { FaExternalLinkAlt } from "react-icons/fa";
import { SiGithub } from "react-icons/si";

const Projects = () => {
    return (
        <div className='projectSection' id='Projects'>
            <h2 className='title'>
                04. PROJECTS <span> </span>
                <img src={FooterLine} alt='Line' style={{ width: '250px' }} className='titleLine' />
            </h2>
            <div className='project project1'>
                <div className='projectName'>SAFARI PROJECT</div>
                <div className='projectDetails'>
                    <div className='projectContent'>
                        <p>The <a href='https://masywairimu.github.io/SAFARI-FRONT-END/' target="_blank" rel="noopener noreferrer" > Safari.Travel </a> website is a front-end project that showcases different safari destinations
                            across Kenya. This project is focused on creating a responsive user interface
                            using HTML, CSS/SCSS, JavaScript, and React. The project highlights my ability to design for
                            various screen sizes, ensuring a seamless experience across devices. </p>

                        <p className='iconParagraph'>
                            <a href='https://masywairimu.github.io/SAFARI-FRONT-END/' target="_blank" rel="noopener noreferrer">
                                <FaExternalLinkAlt className='pIcon' />
                            </a>
                            <a href='https://github.com/MasyWairimu/SAFARI-FRONT-END' target="_blank" rel="noopener noreferrer">
                                <SiGithub className='pIcon' />
                            </a>
                        </p>

                    </div>
                    <div className='projectImage'>
                        <img src={SafariScreenshot} alt='Line' />
                    </div>
                </div>
            </div>
            <div className='project project2'>
                <div className='projectName'>EAVI Admission Module</div>
                <div className='projectDetails'>
                    <div className='projectImage'>
                        <img src={EAVI} alt='Line' />
                    </div>
                    <div className='projectContent'>
                        <p> I participated in the development of <a href='https://admission.eavi.ac.ke/login.php' target="_blank" rel="noopener noreferrer">EAVI Admission Module</a>, a school system designed to streamline the student application
                            process by digitizing and simplifying workflows. It allows prospective students to apply remotely,
                            reducing the need for in-person visits. The system enhances efficiency, provides automated updates,
                            and creates a more convenient, organized, and transparent admissions experience.</p>

                        <p className='iconParagraph'>
                            <a href='https://admission.eavi.ac.ke/login.php' target="_blank" rel="noopener noreferrer">
                                <FaExternalLinkAlt className='pIcon' />
                            </a>
                            <a href='https://github.com/Bennavi-Softsolution/Admission-Page-Module-Integration' target="_blank" rel="noopener noreferrer">
                                <SiGithub className='pIcon' />
                            </a>
                        </p>

                    </div>
                </div>
            </div>
            <div className='project project1'>
                <div className='projectName'>DOC&I</div>
                <div className='projectDetails'>
                    <div className='projectContent'>
                        <p>I contributed to a project called Doc&I, an application designed
                            to facilitate seamless communication between individuals with
                            diabetes and high blood pressure and their healthcare providers.
                            The app aims to reduce the need for frequent in-person visits by
                            providing a platform for easy and regular contact with
                            healthcare professionals. </p>
                        <p>
                            Download the application from this folder to view: <span></span>
                            <a href='https://1drv.ms/f/s!AlyiYipSAd7ukb4eGZ65A9SpBVbwQQ?e=hhac0T' target="_blank" rel="noopener noreferrer" >
                                DOC&I </a>
                        </p>
                    </div>
                    <div className='projectImage docImage'>
                        <img src={Doctor} alt='Line' style={{ width: '200px', height: "300px" }} />
                        <img src={Patient} alt='Line' style={{ width: '200px', height: "300px" }} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects