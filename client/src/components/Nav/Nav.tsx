import React from 'react'
import { Tent } from '../icons/Tent'
import './Nav.css'

const Nav: React.FC  = () => {
  return(
    <div className='Nav-container'>
      <div ><Tent /></div>
      <nav>
        <a href="/html/">About</a> 
        <a href="/css/">Work</a> 
        <a href="/js/">Experience</a>
        <a href="/js/">Contact</a>
        <a href="/js/">Resume</a>  
      </nav>
    </div>
  )
}

export { Nav }