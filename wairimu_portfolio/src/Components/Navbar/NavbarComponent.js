import React from 'react'
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import Logo from '../../assets/Logo.png';
import './Navbar.css'

const NavbarComponent = () => {
    return (
        <div>
            <Navbar>
                <Container className='Navbar'>
                    <Navbar.Brand href='#Intro'>
                        <img src={Logo} alt='Logo' style={{ height: '90px', width: '120px' }} className='Logo' />
                    </Navbar.Brand>
                    <Nav>
                        <Nav.Link href='#About' className='Link'> About Me</Nav.Link>
                        <Nav.Link href='#Experience' className='Link'> Experience</Nav.Link>
                        <Nav.Link href='#Projects' className='Link'> Projects</Nav.Link>
                        <Nav.Link href='#Contacts' className='Link'> Contacts</Nav.Link>
                        <a href='https://1drv.ms/b/s!AlyiYipSAd7uk_IecO9XuMTQCMpBDA?e=z9oJn7' target="_blank" rel="noopener noreferrer" > 
                              <Button className='Button'> Resume</Button>
                        </a>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavbarComponent