import { Project } from "@/interfaces";

export const projects : Project[] = [
    {
        id: 1,
        title: "Ensemble",
        image: "/ensemble.png",
        url: "https://ensemble-shop.netlify.app",
        status: true,
        technologies: [1, 2, 3],
        description: {
            es: "Ensemble es una página web para una tienda de ropa que desarrollamos como proyecto final. Incluye un carrito de compras sencillo pero persistente, además de alertas interactivas. Actualmente, estoy rediseñando el proyecto para probar mis habilidades y nuevos conocimientos. Estoy mejorando tanto el diseño como la calidad, haciéndolo más accesible y escalable. Este rediseño abarca muchas más funcionalidades, como métodos de pago, conexión a una base de datos, un dashboard de administración, autenticación de usuarios con credenciales y Google, entre otras mejoras.",

            us: "Ensemble is a website for a clothing store that we developed as a final project. It includes a simple but persistent shopping cart and interactive alerts. Currently, I'm redesigning the project to test my skills and new knowledge. I'm improving both the design and the quality, making it more accesible and scalable. This redesign encompasses many more functionalities, payment methods with Mercado Pago, connection to a database, an administration dashboard, user authentication with credentials and Google, among other improvements."
        }
    },
    {
        id: 2,
        title: "Buscador de Recetas",
        image: "/recipeFinder.png",
        url: "https://beautiful-taffy-8af4e5.netlify.app",
        status: true,
        technologies: [8, 6],
        description: {
            es: "Buscador de Recetas es una aplicación que permite buscar bebidas, se conecta a una api externa y permite ver muchisimas recetas sobre bebidas",
            us: "Buscador de Recetas is an application that allows you to search for drinks, it connects to an external api and allows you to see many recipes about drinks."
        }
    },
    {
        id: 3,
        title: "Teslo-Shop",
        image: "/teslo-shop.png",
        url: "https://teslo-ir.vercel.app",
        status: true,
        technologies: [5, 6, 9, 13],
        description: {
            es: "Teslo-Shop es una aplicación web de eCommerce inspirada en el sitio de Tesla. Este proyecto lo desarrollamos bajo la guía de Fernando Herrera, donde aprendimos a montar una base de datos con Docker, crear sliders con Swiper, implementar una autenticación robusta, integrar métodos de pago con la API de PayPal, y mucho más. A través de este proyecto, dominamos el framework Next.js, que ahora estoy utilizando para rediseñar Ensemble y aplicar todo lo aprendido anteriormente y así practicar.",
            us: "Teslo-Shop is an eCommerce web application inspired bt the Tesla site. We developed this project under the guidance of Fernando Herrera, where we learned how to set up a database with Docker, create sliders with Swiper, implement payment methods with the PayPal API, and much more. Through this project, we mastered the Next.js framework, which I am now using to redesign Ensemble and apply everything we learned previously and practice.  "
        }
    }
]
