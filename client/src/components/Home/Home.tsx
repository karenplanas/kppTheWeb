import React from 'react'
import { About } from '../About/About'
import { Experience } from '../Experience/Experience'
import { NinaReading } from '../illustrations/NinaReading'
import { Nav } from '../Nav/Nav'
import './Home.css'

const Home : React.FC = () => {
  return (
    <div >
      <Nav idHome='Home' idAbout='About' idExperience='Experience' idProjects='Projects'  idContact='Contact'/>

      <div id="Home"className='Home-content'>
        <div className='Home-Text-container'>
            <p> hi there, my name is </p>
            <h1> Karen Planas,</h1>
            <h1> and I build web apps. </h1>
          <div className='Home-description'>
            <p>I'm a software engineer working with key JavaScript technologies such as React, Node, Express, Koa to build high-quality and user-friendly applications. </p>
          </div>
        </div>
        <div className='NinaReading-container'>
          <NinaReading width='570' height='770'/>
          {/* <NinaReading width='535' height='723'/> */}
        </div>
      </div>

      <div id='About' className='Home-section'>
        <About />
      </div>

      <div id='Experience' className='Home-section'>
        <Experience />
      </div>

      <div id='Projects' className='Home-section'>
        <About />
      </div>

      <div id='Contact' className='Home-section'>
        <About />
      </div>

    </div>
  )
}

export { Home }