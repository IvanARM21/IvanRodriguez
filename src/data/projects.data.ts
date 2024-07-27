import { Project } from "@/interfaces";

export const projects : Project[] = [
    {
        id: 1,
        title: "Ensemble",
        image: "/ensemble.png",
        url: "https://splendorous-sundae-fd7159.netlify.app",
        status: true,
        technologies: [1, 2, 3],
        description: "Ensemble es una plataforma colaborativa que permite a los músicos trabajar juntos en composiciones en tiempo real."
    },
    {
        id: 2,
        title: "Buscador de Recetas",
        image: "/recipeFinder.png",
        url: "https://beautiful-taffy-8af4e5.netlify.app",
        status: true,
        technologies: [8, 6],
        description: "Buscador de Recetas es una aplicación que te ayuda a encontrar recetas deliciosas basadas en los ingredientes que tienes a mano."
    },
    {
        id: 3,
        title: "Teslo-Shop",
        image: "/teslo-shop.png",
        url: "https://teslo-ir.vercel.app",
        status: true,
        technologies: [5, 6, 9, 13],
        description: "Teslo-Shop es una tienda en línea moderna y eficiente construida con las últimas tecnologías para una experiencia de compra fluida."
    }
]
