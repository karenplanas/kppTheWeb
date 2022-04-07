import React from 'react'
import { NinaBiking } from '../illustrations/NinaBiking'
import './Contact.css'

const Contact: React.FC = () => {
  return (
    <div className='Contact-container'>
      <h2>Get in touch</h2>
      <div className='Contact-content'>
        <p>You can contact me through <a href='https://www.linkedin.com/in/karen-planas' target="_blank" rel="noreferrer">Linkedin</a></p>
        <p>Or send me an email to <a href="mailto:someone@yoursite.com">karen.planaspena@gmail.com</a></p>
        <p>When I'm not coding you might find me biking or reading on my hammoc, by the Saint Laurence river.
        </p>
        <div className='NinaBiking-container'>
          {/* <NinaBiking width='366' height='551'/> */}
          <NinaBiking width='366' height='351'/>
        </div>
      </div>
    </div>
  )
}

export { Contact }