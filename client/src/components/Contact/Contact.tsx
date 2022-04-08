import React from 'react'
import { NinaBiking } from '../illustrations/NinaBiking'
import './Contact.css'

const Contact: React.FC = () => {
  return (
    <div className='Contact-container'>
      <h2>Get in touch</h2>
      <div className='Contact-content'>
        <p>
          You can contact me through <a className='bold' href='https://www.linkedin.com/in/karen-planas' target="_blank" rel="noreferrer">Linkedin </a>
          or send me an email at <a className='bold' href="mailto:someone@yoursite.com">karen.planaspena@gmail.com</a>,<br/>I will get back to you as soon as possible.
          When I'm not coding you might find me biking or reading on my hammock, by the Saint Laurence river.
        </p>
        <div className='Contact-bottom'>
          <div className='NinaBiking-container'>
            <NinaBiking width='366' height='351'/>
          </div>
          <div className='author'>
            <p>Designed and built by Karen Planas</p>
            <p>Illustrations from Open-peeps by Pablo Stanley </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export { Contact }