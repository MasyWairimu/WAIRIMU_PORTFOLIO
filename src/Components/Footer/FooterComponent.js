import React from 'react'
import { Container } from 'react-bootstrap'
import { AiOutlineGithub } from 'react-icons/ai'
import { FaLinkedin, FaInstagram } from 'react-icons/fa'
import { BsTwitterX } from "react-icons/bs";
import { FaThreads } from "react-icons/fa6";
import FooterLine from '../../assets/FooterLine.png'
import './Footer.css'

const FooterComponent = () => {
    return (
        <div>
            <Container className='FooterContainer'>
                <div className='icons sticky-aspect'>
                    <a href='https://github.com/MasyWairimu' target="_blank" rel="noopener noreferrer">
                        <AiOutlineGithub className='icon' />
                    </a>
                    <a href='https://www.linkedin.com/in/mercy-wairimu-066ba7227/' target="_blank" rel="noopener noreferrer">
                        <FaLinkedin className='icon' />
                    </a>
                    <a href='https://www.threads.net/@_wairimu_gitingu' target="_blank" rel="noopener noreferrer">
                        <FaThreads className='icon' />
                    </a>
                    <a href='https://x.com/wairimugitungu?t=s-m4foggOc-K1bfC3DjIIg&s=08' target="_blank" rel="noopener noreferrer">
                        <BsTwitterX className='icon' />
                    </a>
                    <a href='https://www.instagram.com/_wairimu_gitingu?igsh=MXEwZmJiZTFqa2huaw==' target="_blank" rel="noopener noreferrer">
                        <FaInstagram className='icon' />
                    </a>
                </div>
                <div className='line sticky-aspect'>
                    <img src={FooterLine} alt='FooterLine' style={{ width: '120px' }} />
                </div>
            </Container>

            <Container className='emailContainer'>
                <div className='email sticky-aspect'>
                    <a href='mailto: wairimugitungu@gmail.com'>wairimugitungu@gmail.com</a>
                </div>
                <div className='line sticky-aspect'>
                    <img src={FooterLine} alt='FooterLine' style={{ width: '120px' }} />
                </div>
            </Container>
        </div>
    )
}

export default FooterComponent