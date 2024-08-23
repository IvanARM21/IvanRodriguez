import { Technology } from "./tecnologies.interface";

export interface Project {
    id: number | null;
    title: string;
    image: string;
    url?: string;
    status: boolean
    description: {
        es: string;
        us: string;
    };
    technologies: number[];
}

export interface ProjectFormatted {
    id: number | null;
    title: string;
    image: string;
    url?: string;
    status: boolean
    description: Project["description"];
    technologies: Technology[];
}

export interface ProjectDraft {
    id?: number;
    title: string;
    image: string | File;
    url?: string;
    status: boolean
    description: Project["description"];
    technologies: number[];
}