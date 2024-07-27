import React from 'react'

interface Props {
    title: string;
    mb?: string;
}

export const TitleSection = ({title, mb = "mb-8"} : Props) => {
  return (
    <h2 
        className={`text-4xl font-black ${mb} bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-violet-600`}
    >
        <span className="text-gray-300">{"<"}</span>
        {title}
        <span className="text-gray-300">{" />"}</span>
    </h2>
  )
}
