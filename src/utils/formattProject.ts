import { technologies } from "@/data";
import { Project } from "@/interfaces";

// Formatt Project
export const formattProject = (project : Project | undefined) => {
    if(!project) return [];
    const projectFormatted = project.technologies.map(technologie => {
        const thisTechnologieExists = technologies.findIndex(element => element.id === technologie);
        if(thisTechnologieExists !== -1) {
            return technologies[thisTechnologieExists];
        }
    }).filter(element => element !== undefined);

    return projectFormatted;
}