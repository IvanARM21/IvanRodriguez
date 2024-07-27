
export interface Project {
    id: number | null;
    title: string;
    image: string;
    url?: string;
    status: boolean
    description: string;
    technologies: number[];
}

export interface ProjectDraft {
    id: number | null;
    title: string;
    image: string | File;
    url?: string;
    status: boolean
    description: string;
    technologies: number[];
}