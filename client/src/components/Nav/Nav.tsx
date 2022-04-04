import React from 'react'
import './Nav.css'

const Nav: React.FC  = () => {
  return(
    <div className='Nav-container'>
      <nav>
        <a href="/html/">ABOUT</a> 
        <a href="/css/">WORK</a> 
        <a href="/js/">EXPERIENCE</a>
        <a href="/js/">CONTACT</a> 
      </nav>
    </div>
  )
}

export { Nav }