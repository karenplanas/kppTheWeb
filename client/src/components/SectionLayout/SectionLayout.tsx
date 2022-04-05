import React from 'react'
import clsx from 'clsx'
import './SectionLayout.css'

interface Props {
  className: string
}


const SectionLayout: React.FC<Props> = ({children, className}) => {
  return (
    <div className={clsx('SectionLayout-container', className)}>
      {children}
    </div>
  )
}

export { SectionLayout }