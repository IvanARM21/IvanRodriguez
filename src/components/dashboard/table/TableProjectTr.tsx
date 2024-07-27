import { Project } from '@/interfaces';
import { formattProject } from '@/utils';
import clsx from 'clsx';
import Image from 'next/image'
import { FaEdit, FaEye, FaTrash } from 'react-icons/fa'

interface Props {
    project: Project
}

export const TableProjectTr = ({project} : Props) => {

    const technologies = formattProject(project);

  return (
    <tr className="border-b border-indigo-600 text-slate-300">
        <td className="px-4 py-3 flex gap-3 items-center text-xl">
          <Image
            src={project.image}
            alt="Ensemble"
            width={100}
            height={100}
          />
          <p>{project.title}</p>
        </td>
        <td className="px-4 py-3">
          <div className="flex flex-wrap gap-1">
            {technologies.map(technologie => (
                <p 
                  key={technologie.id}
                  className="text-xs px-2 py-1 bg-slate-800 rounded-md text-center"
                >
                    {technologie.name}
                </p>
            ))}
          </div>
        </td>
        <td className="px-4 py-3 text-sm">
            <a 
                href={project.url}
                target="_blank"
            >{project.url}</a>
        </td>
        <td className="px-4 py-3">
          <span
            className={clsx(
                "text-xs rounded-md   px-2 py-1 font-bold",
                {
                    "text-indigo-700 bg-indigo-200" : project.status,
                    "text-red-700 bg-red-200" : !project.status,
                }
            )}
          >
            {project.status ? "Production" : "Development"}
          </span>
        </td>
        <td className="px-4 py-3">
          <div className="flex items-center">
            <button
              type="button"
              className="text-slate-500 transition-colors duration-300 hover:text-indigo-600 mx-2"
            >
              <FaEye className="h-6 w-6" />
            </button>
            <button
              type="button"
              className="text-slate-500 transition-colors duration-300 hover:text-yellow-500 mx-2"
            >
              <FaEdit className="h-6 w-6" />
            </button>
            <button
              type="button"
              className="text-slate-500 transition-colors duration-300 hover:text-red-700 mx-2"
            >
              <FaTrash className="h-5 w-5" />
            </button>
          </div>
        </td>
      </tr>
  )
}
