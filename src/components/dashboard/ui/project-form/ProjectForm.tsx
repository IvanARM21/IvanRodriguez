"use client";

import { useState } from "react";
import { technologies } from "@/data";
import { ProjectDraft } from "@/interfaces";
import { Alert } from "@/components";
import { ImageInput } from "./ImageInput";

interface Props {
    project?: ProjectDraft | null
}
const statusOptions = [ { id: 1, label: "Development" }, { id: 2, label: "Production" } ]

export const ProjectForm = ({project = null} : Props) => {
    const initialValues : ProjectDraft = {
        id: project?.id || null,
        title: project?.title || "",
        image: project?.image || new File([""], ""),
        url: project?.url || "",
        status: project?.status || false,
        description: project?.description || "",
        technologies: project?.technologies || []
    }
    const [projectForm, setProjectForm] = useState(initialValues);
    const [fieldTouched, setFieldTouched] = useState({
        title: false,
        image: false,
        url: false,
        status: false,
        description: false,
        technologies: false
    });
    const onInput = (e : React.FormEvent<HTMLInputElement> | React.FormEvent<HTMLTextAreaElement>) => {
        setProjectForm({
            ...projectForm,
            [e.currentTarget.name]: e.currentTarget.value
        });
    }
    const onBlur = (e : React.FormEvent<HTMLInputElement> | React.FormEvent<HTMLTextAreaElement>) => {
        setFieldTouched({
            ...fieldTouched,
            [e.currentTarget.name]: true
        });
    }
    const onClick = (id : number) => {
        const technologyExists = projectForm.technologies.findIndex(technologyId => technologyId === id);
        if(technologyExists === -1) {
            setProjectForm({
                ...projectForm,
                technologies: [...projectForm.technologies, id]
            });
            return
        }
        setProjectForm({
            ...projectForm,
            technologies: projectForm.technologies.filter(technology => technology !== id)
        });
    }

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const { id, ...rest } = projectForm;
        if(Object.values(rest).includes("")) {
            setFieldTouched({
                title: true,
                image: true,
                url: true,
                status: true,
                description: true,
                technologies: true
            });
            return;
        }
        const formData = new FormData();
    }

  return (
    <form 
        onSubmit={onSubmit}
        className="mt-1 w-full lg:w-10/12 2xl:w-8/12 flex flex-col gap-2 bg-slate-900 px-6 py-8 sm:px-8 sm:py-10 rounded-xl mx-auto"
    >
        <div className="flex flex-col gap-2">
            <label 
                htmlFor="title"
                className="text-lg sm:text-xl"
            >Name</label>
            <input 
                value={projectForm.title}
                type="text"
                id="title"
                name="title"
                onInput={onInput}
                onBlur={onBlur}
                placeholder="Name of Project"
                className="bg-slate-800 p-3 rounded-md"
            />

            {projectForm.title === "" && fieldTouched.title && <Alert 
                isError={true}
                message="The name of project cannot be empty"
            />}
        </div>

        <div className="flex flex-col gap-2 mt-3">
            <label 
                htmlFor="url"
                className="text-lg sm:text-xl"
            >Link</label>
            <input 
                value={projectForm.url}
                type="text"
                id="url"
                name="url"
                onInput={onInput}
                onBlur={onBlur}
                placeholder="Url of Project"
                className="bg-slate-800 p-3 rounded-md"
            />

            {projectForm.url === "" && fieldTouched.url && <Alert 
                isError={true}
                message="The link of project cannot be empty"
            />}
        </div>

        <div className="flex flex-col gap-2 mt-3">
            <label htmlFor="description" className="text-lg sm:text-xl">
                Description
            </label>
            <textarea 
                name="description" 
                id="description"
                value={project?.description}
                onInput={onInput}
                onBlur={onBlur}
                placeholder="Description Project"
                rows={3}
                className="bg-slate-800 p-3 rounded-md resize-none"
            ></textarea>

            {projectForm.description === "" && fieldTouched.description && <Alert 
                isError={true}
                message="The description of project cannot be empty"
            />}
        </div>

        <div className="flex flex-col gap-2 mt-3">
            <label 
                htmlFor="status"
                className="text-lg sm:text-xl"
            >Status</label>
            <div className="flex flex-wrap gap-2">
                {statusOptions.map(option => (
                    <div className="flex items-center gap-2" key={option.id}>
                        <label>
                            <input 
                                type="radio" 
                                value={option.label} 
                                id={`${option.id}`}
                                className="peer hidden" 
                                name="status" 
                                onChange={onInput}
                            />
                            
                            <div className="bg-slate-900 hover:bg-slate-800 gap-2 transition-colors duration-300 flex items-center justify-between px-4 py-2 border-2 rounded-lg cursor-pointer text-sm border-gray-200 group peer-checked:border-indigo-600">
                                {option.label}
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-9 h-9 text-indigo-600 invisible group-[.peer:checked+&]:visible">
                                    <path strokeLinecap="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                            </div>
                        </label>
                    </div>
                ))}
            </div>
        </div>

        <div className="flex flex-col gap-2 mt-3">
            <p 
                className="text-lg sm:text-xl"
            >Technologies</p>
            <div className="flex flex-wrap gap-3">
                {technologies.map(technology => (
                    <button
                        key={technology.id}
                        type="button"
                        onClick={() => onClick(technology.id)}
                        className={`${projectForm.technologies.findIndex(technologyState => technologyState === technology.id) > -1 ? "bg-indigo-600 hover:bg-indigo-700" : "bg-slate-800 hover:text-indigo-600"} text-sm px-2 py-1  rounded-md text-center  transition-colors duration-300`}
                    >
                        {technology.name}
                    </button>
                ))}
            </div>

            {projectForm.technologies.length === 0 && fieldTouched.technologies && <Alert 
                isError={true}
                message="The technologies used in project cannot be empty"
            />}
        </div>

        <ImageInput 
            project={projectForm}
            setProject={setProjectForm}
        />

        <input 
            type="submit" 
            className="btn-primary px-4 py-3 mt-6 cursor-pointer"
            value="Add Project"
        />
    </form>
  )
}
