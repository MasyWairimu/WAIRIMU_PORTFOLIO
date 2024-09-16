import React from 'react'
import { Container } from 'react-bootstrap'
import { AiOutlineGithub } from 'react-icons/ai'
import { FaLinkedin, FaInstagram, FaCodepen } from 'react-icons/fa'
import { BsTwitterX } from "react-icons/bs";
import FooterLine from '../../assets/FooterLine.png'
import './Footer.css'

const FooterComponent = () => {
    return (
        <div>
            <Container className='FooterContainer'>
                <div className='icons sticky-aspect'>
                    <AiOutlineGithub className='icon' />
                    <FaCodepen className='icon' />
                    <FaLinkedin className='icon' />
                    <BsTwitterX className='icon' />
                    <FaInstagram className='icon' />
                </div>
                <div className='line sticky-aspect'>
                    <img src={FooterLine} alt='FooterLine' style={{width: '120px' }} />
                </div>
            </Container>
        </div>
    )
}

export default FooterComponent