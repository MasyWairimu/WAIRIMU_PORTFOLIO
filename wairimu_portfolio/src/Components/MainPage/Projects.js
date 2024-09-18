import React from 'react'
import FooterLine from '../../assets/FooterLine.png'
import SafariScreenshot from '../../assets/laptop-screen1.jpeg'

const Projects = () => {
    return (
        <div className='projectSection'>
            <h2 className='title'>
                04. PROJECTS <span> </span>
                <img src={FooterLine} alt='Line' style={{ width: '250px' }} />
            </h2>
            <div className='project'>
                <div className='projectName'>SAFARI PROJECT</div>
                <div className='projectContent'>
                    The Safari.Travel website is a front-end project that showcases different safari destinations<br />
                    across Kenya. As my first React project, I focused on creating a responsive user interface <br />
                    using HTML, CSS/SCSS, JavaScript, and React. The project highlights my ability to design for <br />
                    various screen sizes, ensuring a seamless experience across devices
                </div>
                <div className='projectImage'>
                    <img src={SafariScreenshot} alt='Line' style={{ width: '250px' }} />
                </div>
            </div>
            <div className='project'>
                PROJECT 2
            </div>
            <div className='project'>
                PROJECT 3
            </div>
            <div className='project'>
                PROJECT 4
            </div>
        </div>
    )
}

export default Projects