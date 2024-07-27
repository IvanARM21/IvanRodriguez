import { IconType } from "react-icons";

export interface Technology {
    id: number;
    name: string;
    category: number;
    icon: IconType;
    color: string;
}

export interface Category {
    id: number;
    name: string;
    icon: IconType;
    color: string;
}

// export interface Type {
//     id: number;
//     name: string;
// }

export interface TechnologyFormatted {
    category: Category;
    technologies: Technology[];
}