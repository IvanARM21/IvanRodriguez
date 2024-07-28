"use client";

import clsx from "clsx";
import { ProjectDraft } from "@/interfaces";
import { useState } from "react"
import { FiUpload } from "react-icons/fi"

interface Props {
    project: ProjectDraft
    setProject: React.Dispatch<React.SetStateAction<ProjectDraft>>
}

export const ImageInput = ({project, setProject} : Props) => {

    const [isDrag, setIsDrag] = useState(false);

    const onChange = (e : React.ChangeEvent<HTMLInputElement>) => {
        setIsDrag(false);
        if(e.currentTarget.files) {
            setProject({
                ...project,
                image: e.currentTarget.files[0]
            });
        }
    }

    return (
        <div className="flex flex-col gap-2 mt-3">
            <label 
                htmlFor="image"
                className="text-xl"
            >Image</label>

            <div 
                className={clsx("w-full h-28 border-2 border-dashed rounded-lg   flex flex-col items-center justify-center relative transition-colors duration-300",
                    {
                        "border-slate-800 text-slate-400": !isDrag,
                        "border-indigo-600 text-indigo-600": isDrag
                    }
                )}
            >
                <input
                    type="file"
                    id="image"
                    onDragEnter={() => setIsDrag(true)}
                    onDragLeave={() => setIsDrag(false)}
                    // onDrop={onDrop}
                    onChange={onChange}
                    className="absolute inset-0 opacity-0"
                />
                <FiUpload className="h-6 w-6 "/>
                <p>Drag and drop</p>
                <p>or</p>
                <p>Click to upload</p>
            </div>
        </div>
    )
}
