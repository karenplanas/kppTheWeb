import React from 'react'
import JobSeekerHome from '../../images/jinderScreens/JobSeekerHome.png'
import dogGoHome from '../../images/dogGoScreens/Home.png'
import Ninas from '../../images/ninaScreens/NinasCookbook.jpg'
import './Projects.css'

const Projects : React.FC = () => {
  return (
    <div className='Projects-container'>
      <h2>What i've build</h2>
      <div className='Projects-content'>

        <div className='Project-section'>
          <div className='Project-text'>
            <p>
              <span className='bold'>Jinder</span> is the result of the work of 4 programmers after 
              the idea to create an application that will make the process of job search and job applications easier, 
              funnier, and effective through a simple, clean, and friendly UI/UX design. It's chat and video conference
              features will help to stablish a closer connection between job seekers and employers. 
              To build this app from the ground up we use the following
            </p>
            <p><span className='bold'>Tech Stack:</span> Figma, React, TypeScript, FireBase, JWT, Express, MongoDB, Mongoose, SocketIO</p>
          </div>
          <div className='Project-image'>
            <img className='JobSeekerHome' src={JobSeekerHome} alt='Jinder home screen'/>
          </div>
        </div>

        <div className='Project-section'>
          <div className='Project-image'>
            <img className='dogGoHome' src={dogGoHome} alt='DogGo home screen'/>
          </div>
          <div className='Project-text'>
            <p>
              <span className='bold'>DogGo</span> is a fun, beautiful and usefull app that will help users find the bests 
              places to walk, groom, hill and buy treats for their pets; Book pet friendly hotels and sitters is also possible
              through the app. While working as a member of this legacy project team I was responsible for writing tests 
              using Jest and Cypress, migrate the app frontend and backend to TypeScript, improve app desing and styles, 
              add social login feature, make peer code reviews.
            </p>
            <p><span className='bold'>Tech Stack:</span> React, TypeScript, Express, MongoDB, Mongoose, Jest, Cypress, GitHub</p>
          </div>
        </div>

        <div className='Project-section-ninas'>
          <div className='Project-text'>
          <p>
            <span className='bold'>Nina's Cookbook</span> was born from the fact that I was always writting cooking recipes 
            on paper and hanging them on the fridge door with a magnet and somehow they end up disapearing; Hence I created, 
            patienly curated every UI/UX detail, component, function, defined the project architecture, and developed the app from the ground up 
            using the following <span className='bold'>Tech Stack:</span> Figma, React, React Hook Forms, TypeScript, JWT, Koa, NodeJS, MongoDB, Mongoose.</p>
          </div>
          <div className='Project-image-ninas'>
            <img className='NinasCookbook' src={Ninas} alt='Ninas home screen'  />
          </div>
        </div>
      </div>
    </div>
  )
}

export { Projects }