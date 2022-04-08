import React, { useState } from 'react'
import clsx from 'clsx'
import './Experience.css'

const Experience: React.FC = () => {
  const [isActiveExperience, setActiveExperience] = useState('jinder')

  return (
    <div className='Experience-container'>
      <h2>Experience</h2>

      <div className='Experience-content'>

        <div className='Experience-list'>
          <ul>
            <li 
              onClick={() => setActiveExperience('jinder')}
              className={clsx({ selected: isActiveExperience === 'jinder'})}
              >
                Jinder
            </li>
            <li 
              onClick={() => setActiveExperience('doggo')}
              className={clsx({ selected: isActiveExperience === 'doggo'})}
              >
                DogGo
            </li>
            <li 
              onClick={() => setActiveExperience('ninas')}
              className={clsx({ selected: isActiveExperience === 'ninas'})}
              >
                Nina's Cookbook
            </li>
            <li 
              onClick={() => setActiveExperience('cgi')}
              className={clsx({ selected: isActiveExperience === 'cgi'})}
              >
                CGI
            </li>
          </ul>
        </div>  

        <div className='Experience-details'>

          <div className={clsx('tasks', { visible: isActiveExperience === 'jinder'}) }>
            <div className='Experience-title'>
              <h3>Full-Stack developer <span className='not-bold'>at</span> Jinder</h3>
              <p className='year'>2022</p>
            </div>
            <p>Web application that makes the process of job searching more fun and dynamic thanks to a nice 
              and friendly design; Allows a closer connection between job seekers and employers. As member of 
              this project team I was responsible for:</p>
            <div className='tasks-ul'>
              <ul>
                <li>Designed UI/UX.</li>
                <li>Implement data model and screens for the following app features:
                  <div className='tasks-sublist'>
                    <ul>
                      <li>the user professional profile</li>
                      <li>the user liked job offers </li>
                      <li>the user account settings</li>
                    </ul>
                  </div>
                </li>
                <li>Implement user context</li>
                <li>Implement local storage and authorization.</li>
              </ul>
            </div>
            <p><span className='bold'>Tech Stack:</span> React, TypeScript, FireBase, JWT, Express, MongoDB, Mongoose, SocketIO</p>
          </div>

          <div className={clsx('tasks', { visible: isActiveExperience === 'doggo'}) }>
            <div className='Experience-title'>
              <h3>Full-Stack developer <span className='not-bold'>at</span> DogGo</h3>
              <p className='year'>2022</p>
            </div>
            <p>Web application that help users find local groomers, vets and pet stores; To manage bookings to 
              pet friendly hotels, and sitters; And give recommendations on the best places to walk your dog. As member 
              of this legacy project team I was responsible for:</p>
            <div className='tasks-ul'>
              <ul>
                <li>Screens design and styles improvement.</li>
                <li>Refactor frontend and backend to TypeScript.</li>
                <li>Add login with Google.</li>
                <li>Add app tests.</li>
                <li>Make peer code reviews.</li>
              </ul>
            </div>
            <p><span className='bold'>Tech Stack:</span> React, TypeScript, Express, MongoDB, Mongoose, Jest, Cypress</p>
          </div>

          <div className={clsx('tasks', { visible: isActiveExperience === 'ninas'}) }>
            <div className='Experience-title'>
              <h3>Full-Stack developer <span className='not-bold'>at</span> Nina's Cookbook</h3>
              <p className='year'>2022</p>
            </div>
            <p>Web application that allows users to list, search, create, share, review and rate cooking recipes.
            My responsibilities included defining the project architecture, designing the UI/UX, and developing the app 
            from the ground up. </p>
            <p>Tools and libraries used:</p>
            <div className='tasks-ul'>
              <ul>
                <li>Figma for UI/UX Design system, and high fidelity specs.</li>
                <li>Notion for planning, defined MVP, user stories, and set their priorities.</li>
                <li>React with TypeScript on the front-end. React Hook forms for form handling.</li>
                <li>Cloudinary service for images upload.</li>
                <li>On the backend Koa server with NodeJS, MongoDB and Mongoose.</li>
                <li>JWT for authentication.</li>
              </ul>
            </div>
          </div>

          <div className={clsx('tasks', { visible: isActiveExperience === 'cgi'}) }>
            <div className='Experience-title'>
              <h3>IT Consultant-Identity and Access Management <span className='not-bold'>at</span> CGI</h3>
              <p className='year'>2016-2021</p>
            </div>
            <p>As member of this team I was responsible for:</p>
            <div className='tasks-ul'>
              <ul>
                <li>Process Service Requests for Identity and Access Management.</li>
                <li>Manage users accounts creation and access to network resources.</li>
                <li>Identify, research and resolve technical issues, incidents and problems.</li>
                <li>Record all incidents reported by users and escalate if required.</li>
                <li>Support the users through the problem resolution process.</li>
                <li>Write and update process and technical documentation.</li>
              </ul>
            </div>
            <p><span className='bold'>Tools used:</span> Ticketing systems, Active Directory, Windows Server, Windows Computer Management, Microsoft Teams</p>
          </div>

        </div>
      </div>
    </div>
  )
}

export { Experience }