
import { projects } from "@/data"
import { TableProjectTr } from "./TableProjectTr"
import { formattProject } from "@/utils"

export const TableProjects = () => {
  return (
    <table className="mt-5 w-full text-left border-collapse mx-auto min-w-[1000px] overflow-x-scroll">
    <thead className="border-b border-indigo-600 ">
      <tr>
        <th className="px-4 py-3 text-slate-500 uppercase text-xs w-1/3">Project</th>
        <th className="px-4 py-3 text-slate-500 uppercase text-xs">Technologies</th>
        <th className="px-4 py-3 text-slate-500 uppercase text-xs">Link</th>
        <th className="px-4 py-3 text-slate-500 uppercase text-xs">Status</th>
        <th className="px-4 py-3 text-slate-500 uppercase text-xs">Actions</th>
      </tr>
    </thead>
    <tbody>
      {projects.map(project => (
        <TableProjectTr 
            key={project.id}
            project={project}
        />
      ))}
    </tbody>
  </table>
  )
}
