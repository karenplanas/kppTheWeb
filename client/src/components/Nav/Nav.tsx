import React from 'react'
import { GitHub } from '../icons/GitHub'
import { Linkedin } from '../icons/Linkedin'
import { useScrollTo } from '../../hooks/useScrollTo'
import { useGetVisibleAnchor } from '../../hooks/useGetVisibleAnchor'
import resume from '../../resume/resume.pdf'
import home from '../../images/Home.png'
import clsx from 'clsx'
import './Nav.css'
interface Props {
  idHome: string
  idAbout: string
  idProjects: string
  idExperience: string
  idContact: string
}

const Nav: React.FC<Props> = ({idHome, idAbout, idProjects, idExperience, idContact}) => {
  const visibleAnchor = useGetVisibleAnchor([idAbout, idProjects, idExperience, idContact]);
  const scrollTo = useScrollTo()
  
  const onClick = (id: string) => {
    return (event: React.MouseEvent) => {
      event.preventDefault();
      scrollTo(id);
    }
  }

  const Link: React.FC<{ id: string }> = ({ id, children }) => {
    return <a href={`#${id}`} onClick={onClick(id)} className={clsx({ selected: visibleAnchor === id})}>{children}</a>
  }

  return(
    <div className='Nav-content'>
      <div className='Nav-icons'>
        <a href={`#${idHome}`} onClick={() => scrollTo(idHome)}>
          <div className='HomeIcon-image-container'>
            <img src={home} alt='Home icon' />
          </div>
        </a>
        <a href='https://www.linkedin.com/in/karen-planas' target='_blank' rel='noopener noreferrer'><Linkedin/></a>
        <a href='https://github.com/karenplanas' target='_blank' rel='noopener noreferrer'><GitHub/></a>
      </div>
      <nav className='Nav-a'>
        <Link id={idAbout}>About</Link> 
        <Link id={idExperience}>Experience</Link> 
        <Link id={idProjects}>Projects</Link> 
        <Link id={idContact}>Contact</Link> 
        <a href={resume} target='_blank' rel='noopener noreferrer'>Resume</a>
      </nav>
    </div>
  )
}

export { Nav }

