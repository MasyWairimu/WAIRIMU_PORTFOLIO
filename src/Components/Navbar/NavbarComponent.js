import React, { useEffect } from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import Logo from '../../assets/Logo.png';
import './Navbar.css';

const NavbarComponent = () => {

  useEffect(() => {
    const hamburger = document.querySelector(".hamburger");
    const NavMenu = document.querySelector(".NavMenu");
    const navLink = document.querySelectorAll(".Link");

    const mobileMenu = () => {
      hamburger.classList.toggle("active");
      NavMenu.classList.toggle("active");
    };

    const closeMenu = () => {
      hamburger.classList.remove("active");
      NavMenu.classList.remove("active");
    };

    hamburger.addEventListener("click", mobileMenu);
    navLink.forEach(n => n.addEventListener("click", closeMenu));

    // Cleanup listeners when the component unmounts to avoid memory leaks
    return () => {
      hamburger.removeEventListener("click", mobileMenu);
      navLink.forEach(n => n.removeEventListener("click", closeMenu));
    };
  }, []); // Empty dependency array to ensure this effect only runs once after mount

  return (
    <div>
      <Navbar>
        <Container className='Navbar'>
          <Navbar.Brand href='#Intro'>
            <img src={Logo} alt='Logo' style={{ height: '90px', width: '120px' }} className='Logo' />
          </Navbar.Brand>
          <Nav className='NavMenu'>
            <Nav.Link href='#About' className='Link'> About Me</Nav.Link>
            <Nav.Link href='#Experience' className='Link'> Experience</Nav.Link>
            <Nav.Link href='#Projects' className='Link'> Projects</Nav.Link>
            <Nav.Link href='#Contacts' className='Link'> Contacts</Nav.Link>
            <a href='https://docs.google.com/document/d/1O6FRFX5xh9KoBYjf95M4pMyGZ5KzYs4-ondUgJ9AdKI/edit?usp=sharing' target="_blank" rel="noopener noreferrer">
              <Button className='Button'> Resume</Button>
            </a>
          </Nav>
          <div className='hamburger'>
            <span className='bar'></span>
            <span className='bar'></span>
            <span className='bar'></span>
          </div>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavbarComponent;
