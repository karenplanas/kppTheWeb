import React from 'react'
import { Tent } from '../icons/Tent'
import './Nav.css'
interface Props {
  idHome: string
  idAbout: string
  idProjects: string
  idExperience: string
  idContact: string
}

const Nav: React.FC<Props> = ({idHome, idAbout, idProjects, idExperience, idContact}) => {
  // https://stackoverflow.com/questions/24665602/scrollintoview-scrolls-just-too-far
  const scrollTo = (id: string) => {
    return (event: React.MouseEvent) => {
      event.preventDefault();
      const yOffset = -70; 
      const element = document.getElementById(id);
      const y = element!.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  }

  return(
    <div className='Nav-content'>
      <div><a href={`#${idHome}`} onClick={scrollTo(idHome)}><Tent /></a></div>
      <nav>
        <a href={`#${idAbout}`} onClick={scrollTo(idAbout)}>About</a> 
        <a href={`#${idExperience}`} onClick={scrollTo(idExperience)}>Experience</a>
        <a href={`#${idProjects}`} onClick={scrollTo(idProjects)}>Projects</a> 
        <a href={`#${idContact}`} onClick={scrollTo(idContact)}>Contact</a>
        <a href='/Resume/'>Resume</a>  
      </nav>
    </div>
  )
}

export { Nav }