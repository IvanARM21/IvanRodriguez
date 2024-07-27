import { projects } from "@/data";
import { ProjectItem } from "./ProjectItem";

export const ProjectGrid = () => {
  return (
    <div className="grid gap-3 min-[480px]:grid-cols-2 xl:grid-cols-3  ">
      {projects.map((project) => (
        <ProjectItem key={project.id} project={project} />
      ))}
    </div>
  );
};
