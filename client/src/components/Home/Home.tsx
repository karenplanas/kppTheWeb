import React from 'react'
import { NinaReading } from '../illustrations/NinaReading'
import { Nav } from '../Nav/Nav'
import './Home.css'

const Home : React.FC = () => {
  return (
    <div >
      <Nav />
      <div className='Home-content'>
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
        </div>
      </div>
    </div>
  )
}

export { Home }