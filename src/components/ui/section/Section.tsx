import React from 'react'
import { TitleSection } from './TitleSection';

interface Props {
    children: React.ReactNode;
    title: string;
}

export const Section = ({children, title} : Props) => {

  return (
    <section className={`fade-in my-20`}>
        <TitleSection title={title} />
        {children}
    </section>
  )
}

