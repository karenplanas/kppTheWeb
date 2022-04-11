import React from 'react'
import JobSeekerHome from '../../images/jinderScreens/JobSeekerHome.png'
import dogGoHome from '../../images/dogGoScreens/Home.png'
import Ninas from '../../images/ninaScreens/NinasCookbook.jpg'
import { GitHub } from '../icons/GitHub'
// import { GitHubCat } from '../icons/GitHubCat'
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
              funnier, and effective through a simple, clean, and friendly UI/UX design. Its chat and video conference
              features will help to establish a closer connection between job seekers and employers. 
              To build this app from the ground up we use the following
            </p>
            <p><span className='bold'>Tech Stack:</span> Figma, React, TypeScript, FireBase, JWT, Express, MongoDB, Mongoose, SocketIO.</p>
            <p>Check the repo here <a href='https://github.com/karenplanas/jinder' target='_blank' rel='noopener noreferrer'><GitHub /></a></p>
            
            
            {/* <a><GitHubCat /></a> */}
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
              <span className='bold'>DogGo</span> is a fun, beautiful and useful app that will help users find the best 
              places to walk, groom, hill and buy treats for their pets; Book pet friendly hotels and sitters is also possible
              through the app. While working as a member of this legacy project team I was responsible for writing tests 
              using Jest and Cypress, migrating the app frontend and backend to TypeScript, improving app design and styles, 
              adding social login feature, and making peer code reviews.
            </p>
            <p><span className='bold'>Tech Stack:</span> React, TypeScript, Express, MongoDB, Mongoose, Jest, Cypress, GitHub.</p>
            <p> Check the repo here <a href='https://github.com/karenplanas/dogGo' target='_blank' rel='noopener noreferrer'><GitHub /></a></p>
          </div>
        </div>

        <div className='Project-section-ninas'>
          <div className='Project-text'>
          <p>
            <span className='bold'>Nina's Cookbook</span> was born from the fact that I was always writing cooking recipes 
            on paper and hanging them on the fridge door with a magnet and somehow they end up disappearing; So I decided to build this app, 
            defined the project architecture, patiently created every UI/UX detail, component, function; and developed the app from the ground up 
            using the following <span className='bold'>Tech Stack:</span> Figma, React, React Hook Forms, TypeScript, JWT, Koa, NodeJS, MongoDB, Mongoose. 
            <span> Check the repo here <a href='https://github.com/karenplanas/NinasCookbook' target='_blank' rel='noopener noreferrer'><GitHub /></a></span>
          </p>
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