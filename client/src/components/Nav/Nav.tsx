import React from 'react'
import { GitHub } from '../icons/GitHub'
import { Linkedin } from '../icons/Linkedin'
import resume from '../../cv/resume.pdf'
import home from '../../images/Home.png'
import './Nav.css'
import { useWindowDimensions } from '../../hooks/useWindowDimensions'
interface Props {
  idHome: string
  idAbout: string
  idProjects: string
  idExperience: string
  idContact: string
}

const Nav: React.FC<Props> = ({idHome, idAbout, idProjects, idExperience, idContact}) => {
  const { width } = useWindowDimensions();

  // https://stackoverflow.com/questions/24665602/scrollintoview-scrolls-just-too-far
  const scrollTo = (id: string) => {
    return (event: React.MouseEvent) => {
      event.preventDefault();

      let yOffset = 0;
      if ( width > 750) {
        yOffset = -100; 
      } else {
        yOffset = -170;
      }
      
      const element = document.getElementById(id);
      const y = element!.getBoundingClientRect().top + window.pageYOffset + yOffset;

      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  }

  // function handleClick()
  // {
  //    window.open(resume,"_blank");
  // }

  return(
    <div className='Nav-content'>
      <div className='Nav-icons'>
        <a href={`#${idHome}`} onClick={scrollTo(idHome)}>
          <div className='HomeIcon-image-container'>
            <img src={home} alt='Home icon' />
          </div>
        </a>
        <a href='https://www.linkedin.com/in/karen-planas' target='_blank' rel='noopener noreferrer'><Linkedin/></a>
        <a href='https://github.com/karenplanas' target='_blank' rel='noopener noreferrer'><GitHub/></a>
      </div>
      <nav>
        <a href={`#${idAbout}`} onClick={scrollTo(idAbout)}>About</a> 
        <a href={`#${idExperience}`} onClick={scrollTo(idExperience)}>Experience</a>
        <a href={`#${idProjects}`} onClick={scrollTo(idProjects)}>Projects</a> 
        <a href={`#${idContact}`} onClick={scrollTo(idContact)}>Contact</a>
        <a href={resume} target='_blank' rel='noopener noreferrer'>Resume</a>
        {/* <button className='Resume' onClick={handleClick}>Resume</button> */}
      </nav>
    </div>
  )
}

export { Nav }