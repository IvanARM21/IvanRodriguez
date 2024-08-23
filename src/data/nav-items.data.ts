
import { FaEnvelope, FaExternalLinkAlt, FaUser } from 'react-icons/fa';

export const navItems = [
    {   
        label: {
            es: "Sobre Mi",
            us: "About Me"
        },
        url: '#about-me',
        icon: FaUser,
        size: 24
    },
    {
        label: {
            es: "Proyectos",
            us: "Projects"
        },
        url: '#projects',
        icon: FaExternalLinkAlt,
        size: 24
    },
    {
        label: {
            es: "Tecnologías",
            us: "Stack"
        },
        url: '#stack',
        icon: FaExternalLinkAlt,
        size: 24
    },
    {
        label: {
            es: "Contacto",
            us: "Contact"
        },
        url: '#contact',
        icon: FaEnvelope,
        size: 24
    }
]