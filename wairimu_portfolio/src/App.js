import React from 'react'
import NavbarComponent from './Components/Navbar/NavbarComponent';
import './App.css'
import FooterComponent from './Components/Footer/FooterComponent';
import About from './Components/MainPage/About';
import Experience from './Components/MainPage/Experience';
import Skills from './Components/MainPage/Skills';
import Projects from './Components/MainPage/Projects';
import Contacts from './Components/MainPage/Contacts';

const App = () => {
  return (
    <div>
      <NavbarComponent/>
      <About/>
      <Experience/>
      <Skills/>
      <Projects/>
      <Contacts/>
      <FooterComponent/>
    </div>
  )
}

export default App;