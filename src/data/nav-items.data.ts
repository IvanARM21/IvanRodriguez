import { FaEnvelope, FaExternalLinkAlt, FaUser } from 'react-icons/fa';

export const navItems = [
    {
        label: 'Projects',
        url: '/projects',
        icon: FaExternalLinkAlt,
        size: 24
    },
    {
        label: 'About Me',
        url: '/about-me',
        icon: FaUser,
        size: 24
    },
    {
        label: 'Contact',
        url: '/contact',
        icon: FaEnvelope,
        size: 24
    }
]