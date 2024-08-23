import { projects } from "@/data";
import { ProjectItem } from "./ProjectItem";
import { Lang } from "@/interfaces";

interface Props {
  lang: Lang
}

export const ProjectGrid = ({lang}: Props) => {
  return (
    <div className="grid gap-3 min-[480px]:grid-cols-2 xl:grid-cols-3  ">
      {projects.map((project) => (
        <ProjectItem 
          lang={lang}
          key={project.id} 
          project={project} 
        />
      ))}
    </div>
  );
};
