"use client";

import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { FaTimesCircle } from "react-icons/fa";
import { projects } from "@/data";
import { formattProject } from "@/utils";
import Image from "next/image";
import clsx from "clsx";
import { useEffect, useMemo, useState } from "react";

export const ProjectModal = () => {

    const searchParams = useSearchParams();
    const router = useRouter();
    const pathname = usePathname();
    const params = new URLSearchParams(searchParams);

    const [isActive, setIsActive] = useState(false);

    const projectId = Number(params.get("viewProject")) || 0;

    useEffect(() => {
        setIsActive(params.has("viewProject"));
        if(params.has("viewProject")) {
            document.body.style.overflow = 'hidden';
        } else {
            if(!project) {
                router.push(pathname, { scroll: false });
                document.body.style.overflow = 'auto';
            }
        }
    }, [params.has("viewProject")]);
 
    const project = projects.find(projectData => projectData.id === projectId);

    const projectTechnologies = formattProject(project);

    

    const closeModal = () => {
        setIsActive(false);
        document.body.style.overflow = 'auto';
        setTimeout(() => {
            router.push(pathname, {
                scroll: false
            });
        }, 300);
    }

  return (
    <>
        {isActive && <div 
            className="fade-in fixed inset-0 bg-indigo-600 backdrop-blur-sm bg-opacity-10 z-30 transition-all duration-500 cursor-pointer"
            onClick={closeModal}
        />  }
        <div className={clsx(
            "fixed top-1/2 left-1/2 z-40 -translate-x-1/2 -translate-y-1/2 -tra max-w-7xl w-full px-2 transition-all duration-300 max-h-[80vh] overflow-y-auto",
            {
                "close-modal": !isActive,
                "show-modal": isActive
            }
        )}>
            {project && (
                <div className="bg-slate-950 w-full rounded-xl py-6 px-4 sm:p-10 relative flex flex-col items-center lg:flex-row gap-5 overflow-y-auto">
                    <FaTimesCircle 
                        onClick={closeModal}
                        className="absolute right-4 top-4 text-red-600 h-7 w-7 cursor-pointer"
                    />
                    <Image 
                        width={600}
                        height={600}
                        src={project.image}
                        alt={project.title}
                        className="rounded-md w-full max-w-[600px] mt-10 lg:mt-0"
                    />
                    <div className="flex flex-col max-w-[600px]">
                        <div className="flex-1 flex flex-col gap-5 mb-6">
                            <div>
                                <h3 className="font-bold text-3xl sm:text-4xl">{project.title}</h3>
                                <p className="sm:text-xl mt-3">{project.description}</p>
                            </div>
                            <div className="flex gap-5 ">
                                {
                                    projectTechnologies.map(technologie => (
                                        <technologie.icon key={technologie.id} className={`${technologie.color} h-8 w-8 sm:h-12 sm:w-12 `}/>
                                    ))
                                }
                            </div>
                        </div>
                        <a href={project.url} className="btn-primary w-fit ml-auto px-4 py-3">
                            View Project
                        </a>
                    </div>
                </div>
            )}
        </div>
    </>
  )
}
