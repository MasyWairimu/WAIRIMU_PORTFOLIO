import React from 'react'
import './MainPage.css'
import FooterLine from '../../assets/FooterLine.png'
import { RiReactjsLine } from "react-icons/ri";
import { FaLaravel, FaGitAlt } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { FiFigma } from "react-icons/fi";
import { FaBootstrap, FaNodeJs } from "react-icons/fa6";
import { SiMysql } from "react-icons/si";

const Skills = () => {
  return (
    <div className='skillsSection' id='Skills'>
      <h2 className='title'>
        03. SKILLS <span> </span>
        <img src={FooterLine} alt='Line' style={{ width: '250px' }} className='titleLine' />
      </h2>

      <div className='skills'>
        <div className='div'>
          <div className='skillItem'>
            <div className='skillIcon'>
              <FiFigma />
            </div>
            <div className='skill'>Figma</div>
          </div>
          <div className='skillItem'>
            <div className='skillIcon'>
              <FaBootstrap />
            </div>
            <div className='skill'>Bootstrap</div>
          </div>
          <div className='skillItem'>
            <div className='skillIcon'>
              <RiReactjsLine />
            </div>
            <div className='skill'> ReactJS</div>
          </div>
          <div className='skillItem'>
            <div className='skillIcon'>
              <FaNodeJs />
            </div>
            <div className='skill'>
              NodeJS
            </div>
          </div>
        </div>
        <div className='div'>
          <div className='skillItem'>
            <div className='skillIcon'>
              <FaLaravel />
            </div>
            <div className='skill'>
              Laravel
            </div>
          </div>
          <div className='skillItem'>
            <div className='skillIcon'>
              <SiMongodb />
            </div>
            <div className='skill'>
              MongoDB
            </div>
          </div>
          <div className='skillItem'>
            <div className='skillIcon'>
              <SiMysql />
            </div>
            <div className='skill'>
              MySQL
            </div>
          </div>
          <div className='skillItem'>
            <div className='skillIcon'>
              <FaGitAlt />
            </div>
            <div className='skill'>
              Git
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Skills