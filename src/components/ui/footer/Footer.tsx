import { SocialNetworks } from '../social-networks/SocialNetworks';

export const Footer = () => {
  return (
    <footer className="fade-in text-indigo-600 py-4 border-t-2 border-indigo-600 max-w-screen-xl w-full mx-auto">
        <div className="flex justify-between items-center flex-col-reverse md:flex-row gap-3 px-2">
            <p className="text-center text-xl text-gray-400">  <span className="block md:inline ">&copy; {new Date().getFullYear()} <span>{"<IvanRodriguez />"}</span></span> <span className="block md:inline">All Rights Reserverd.</span></p>
            <SocialNetworks />
        </div>
    </footer>
  )
}
