import { SocialNetworks } from '../social-networks/SocialNetworks';
import { Copy } from './Copy';

export const Footer = () => {
  return (
    <footer className="fade-in text-indigo-600 py-4 border-t-2 border-indigo-600 max-w-screen-xl w-full mx-auto">
        <div className="flex justify-between items-center flex-col-reverse md:flex-row gap-3 px-2">
          <Copy />
          <SocialNetworks />
        </div>
    </footer>
  )
}
