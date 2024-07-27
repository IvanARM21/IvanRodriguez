import { categories, technologies } from "@/data";
import { TechnologyFormatted } from "@/interfaces";



export const formattTecnologies = () : TechnologyFormatted[] => {
    const formattTecnologies  = categories.map(category => ({
        category: category,
        technologies: technologies.filter(technology => technology.category === category.id)
    }));
    return formattTecnologies
}