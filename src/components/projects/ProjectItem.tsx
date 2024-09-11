import Image from "next/image";
import { FaExternalLinkAlt } from "react-icons/fa";
import { Project } from '@/interfaces'
import { Lang } from "@/interfaces";
import { formattProject } from "@/utils";
import { ButtonViewDetails } from "./ButtonViewDetails";

interface Props {
    project: Project;
    lang: Lang;
}

export const ProjectItem = ({project, lang} : Props) => {

  const projectTechnologies = formattProject(project);

  return (
    <article className="flex flex-col overflow-hidden bg-slate-900 bg-opacity-70 p-3 rounded-lg">
        <div className="overflow-hidden rounded">
        <a
            aria-label={"Link to Project " + project.title}
            target="_blank"
            href={project.url}
        >
            <Image 
                src={project.image}
                alt="Ensemble"
                height={300}
                width={300}
                sizes="(min-width: 480px) 45vw, (min-width: 1280px) 400px, 95vw"
                quality={70}
                className="w-full hover:scale-125 transition-all duration-500 cursor-pointer"
            />
        </a>
        </div>
        <div className="flex-1 flex flex-col">
            <div className="flex justify-between items-center flex-1 relative">
                <div>
                    <h3 className="mt-3 text-indigo-600 font-black text-3xl">{project.title}</h3>
                    {projectTechnologies.length && (
                        <div className="flex flex-wrap gap-3 mt-5">
                            {projectTechnologies.map(technologie => (
                                <span key={technologie.id} className="flex flex-col justify-center items-center gap-1">
                                    <technologie.icon  className={`${technologie.color} h-10 w-10`}/>
                                    {technologie.name}
                                </span>
                            ))}
                        </div>
                    )}
                </div>
                <a 
                    aria-label={"Link to Project " + project.title}
                    href={project.url}
                    target="_blank"
                    className="p-2 bg-slate-950 hover:bg-indigo-600 transition-colors duration-300 rounded-lg absolute right-0 top-3"
                ><FaExternalLinkAlt className="h-6 w-6 " /></a>
            </div>
            
            <ButtonViewDetails 
                lang={lang}
                id={project.id}
            />
        </div>
    </article>
  )
}
