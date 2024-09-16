import React from 'react'
import { Container, Nav, Navbar, Button } from 'react-bootstrap'
import Logo from '../../assets/Logo.png';
import './Navbar.css'

const NavbarComponent = () => {
    return (
        <div>
            <Navbar>
                <Container className='Navbar'>
                    <Navbar.Brand >
                        <img src={Logo} alt='Logo' style={{ height: '90px', width: '120px' }} />
                    </Navbar.Brand>
                    <Nav>
                        <Nav.Link className='Link'> About Me</Nav.Link>
                        <Nav.Link className='Link'> Experience</Nav.Link>
                        <Nav.Link className='Link'> Projects</Nav.Link>
                        <Nav.Link className='Link'> Contacts</Nav.Link>
                        <Button className='Button'> Resume</Button>
                    </Nav>
                </Container>
            </Navbar>
        </div>
    )
}

export default NavbarComponent