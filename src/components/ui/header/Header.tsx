import { MenuButton } from './MenuButton'
import { HeaderLogo } from './HeaderLogo'
import { HeaderNav } from './HeaderNav'

export const Header = () => {
    
  return (
    <>
        <header className="fade-in h-20 top-0 z-20 bg-slate-950 w-full fixed bg-opacity-50  backdrop-blur-sm ">
            <div className="flex flex-row max-w-screen-xl h-full w-full justify-between items-center mx-auto border-b-2 px-2 border-indigo-600 gap-1 py-4  text-white">
                <HeaderLogo 
                    fontSize="text-2xl"
                />

                <HeaderNav />

                <MenuButton />
            </div>
        </header>
    </>
  )
}
