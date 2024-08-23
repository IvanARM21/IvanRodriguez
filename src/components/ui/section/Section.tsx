import React from 'react'
import { TitleSection } from './TitleSection';

interface Props {
    children: React.ReactNode;
    title: string;
    id: string;
}

export const Section = ({children, title, id} : Props) => {

  return (
    <section 
      id={id}
      className={`fade-in my-20`}
    >
        <TitleSection title={title} />
        {children}
    </section>
  )
}

