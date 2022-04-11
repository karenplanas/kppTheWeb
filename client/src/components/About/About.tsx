import React from 'react'
import { NinaLunettes } from '../illustrations/NinaLunettes'
import './About.css'

const About : React.FC = () => {
  return (
    <div className='About-container'>
      <h2>About me</h2>
      <div className='About-text'>
        <p> Hello, my name is Karen, driven by sciences and technology, 
          I’m a software engineer graduated from the University of Informatics Sciences in Havana, Cuba. 
          Since then and because of my willingness to learn new things I've been working on multiple areas 
          within the IT domain such as networking, IT support, Security, Identity and Access Management, 
          and software development, my passion. I love and enjoy coding as it allows me to create, to renovate, to challenge myself,
          to solve problems through the magic of technology.</p><br/>
          
        <p>Lately I've been working on some projects by myself and with some friends, 
          you can check them out on the projects section.</p><br/>
        
        <div className='About-bottom'>
          {/* <div className='About-bottom-illustration'> */}
            <NinaLunettes width='240' height='250'/>          
          {/* </div> */}
          <div>
            <p>This is the tech stack i’ve been working with:</p>
            <ul className='About-list '>
              <li>Figma</li>
              <li>React</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>TypeScript</li>
              <li>Express</li>
              <li>Koa</li>
              <li>MongoDB</li>
              <li>Mongoose</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
} 

export { About }