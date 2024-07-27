import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';

export const SocialNetworks = () => {
  return (
    <div className="flex gap-2 items-center">
        <a 
            href="https://www.linkedin.com/in/iván-rodríguez-moreira-b9848628b/"
            target="_blank"
            aria-label="Link to my Linkedin"
            className="cursor-pointer hover:text-white hover:bg-indigo-600 text-indigo-600 p-2 rounded-full transition-all duration-500 hover:scale-110"
        >
        <FaLinkedin className="h-8 w-8"/>
        </a>
        <a 
            href="https://github.com/IvanARM21"
            target="_blank"
            aria-label="Link to my GitHub"
            className="cursor-pointer hover:text-white hover:bg-indigo-600 text-indigo-600 p-2 rounded-full transition-all duration-500 hover:scale-110"
        >
        <FaGithub className="h-8 w-8"/>
        </a>
        <a 
            href="https://www.instagram.com/ivanrm021/" 
            target="_blank"
            aria-label="Link to my Instagram"
            className="cursor-pointer hover:text-white hover:bg-indigo-600 text-indigo-600 p-2 rounded-full transition-all duration-500 hover:scale-110"
        >
        <FaInstagram className="h-8 w-8"/>
        </a>
    </div>
  )
}
