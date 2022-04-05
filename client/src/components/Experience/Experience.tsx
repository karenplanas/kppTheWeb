import React, { useState } from 'react'
import clsx from 'clsx'
import './Experience.css'

const Experience: React.FC = () => {
  const [isActiveExperience, setActiveExperience] = useState('jinder')

  return (
    <div className='Experience-container'>
      <h2>Work Experience</h2>

      <div className='Experience-content'>

        <div className='Experience-list'>
          <ul>
            <li onClick={() => setActiveExperience('jinder')}>Jinder</li>
            <li onClick={() => setActiveExperience('doggo')}>DogGo</li>
            <li onClick={() => setActiveExperience('ninas')}>Nina's Cookbook</li>
            <li onClick={() => setActiveExperience('cgi')}>CGI</li>
          </ul>
        </div>  

        <div className='Experience-details'>

          <div className={clsx('tasks', { visible: isActiveExperience === 'jinder'}) }>
            <h3>Full-Stack developer at Jinder</h3>
            <p className='year'>2022</p>
            <p>Web application that makes the process of job searching more fun and dynamic thanks to a nice and friendly design; Allows a closer connection between job seekers and employers.</p>
            <p>As member of this project team I was responsible for:</p>
            <div className='tasks-ul'>
              <ul>
                <li>Designed UI/UX</li>
                <li>Implement data model on the backend and screens on the frontend for the following app features:
                  <div className='tasks-sublist'>
                    <ul>
                      <li>the user profesional profile</li>
                      <li>the user liked job offers </li>
                      <li>the user account settings</li>
                    </ul>
                  </div>
                </li>
                <li>Implement user context</li>
                <li>Implement local storage and authorization</li>
              </ul>
            </div>
            <p><span className='bold'>Tech Stack:</span> React, TypeScript, FireBase, JWT, Express, MongoDB, Mongoose, SocketIO</p>
          </div>

          <div className={clsx('tasks', { visible: isActiveExperience === 'doggo'}) }>
          {/* <div className={ isDoggoActive ? 'tasks visible' : 'tasks hidden' }> */}
            <h3>Full-Stack developer at DogGo</h3>
            <p className='year'>2022</p>
            <p>Web application that help users find local groomers, vets and pet stores; To manage bookings to pet friendly hotels, and sitters; 
              And give recomendations on the best places to walk your dog</p>
            <p>As member of this legacy project team I was responsible for:</p>
            <div className='tasks-ul'>
              <ul>
                <li>Screens design and styles improvement </li>
                <li>Refactor frontend and backend to TypeScript</li>
                <li>Add login with Google</li>
                <li>Add app tests</li>
                <li>Make peer code reviews</li>
              </ul>
            </div>
            <p><span className='bold'>Tech Stack:</span> React, TypeScript, Express, MongoDB, Mongoose, Jest, Cypress</p>
          </div>

          <div className={clsx('tasks', { visible: isActiveExperience === 'ninas'}) }>
          {/* <div className={ isNinasActive ? 'tasks visible' : 'tasks hidden' }> */}
            <h3>Full-Stack developer at Nina's Cookbook</h3>
            <p className='year'>2022</p>
            <p>Web application that allow users to list, search, create, share, review and rate cooking recipes</p>
            <p>My responsibilities included defining the project architecture, designing the UI/UX, and developing the app from the ground up.</p>
            <p>Tools and libraries used:</p>
            <div className='tasks-ul'>
              <ul>
                <li>Figma for the UX/UI design (Design system, and high fidelity specs)</li>
                <li>Notion for the planing (Defined user stories, prioritized them, and defined scope of the MVP)</li>
                <li>React with TypeScript on the front-end. React Hook forms for form handling</li>
                <li>Cloudinary service for images upload</li>
                <li>On the backend : Koa server with NodeJS, MongoDB and Mongoose</li>
                <li>JWT for authentication</li>
              </ul>
            </div>
          </div>

          <div className={clsx('tasks', { visible: isActiveExperience === 'cgi'}) }>
          {/* <div className={ isCgiActive ? 'tasks visible' : 'tasks hidden' }> */}
            <h3>IT Consultant-Identity and Access Management analyst at CGI</h3>
            <p className='year'>2016-2021</p>
            <div className='tasks-ul'>
              <ul>
                <li>Process Service Requests for Identity and Access Management.</li>
                <li>Identify, research and resolves technical issues, incidents and problems.</li>
                <li>Record all incidents reported by users and escalate if required.</li>
                <li>Support the users through the problem resolution process.</li>
              </ul>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export { Experience }