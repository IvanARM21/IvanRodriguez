import Link from 'next/link'
import { navItems } from '@/data'
import { MenuButton } from './MenuButton'
import { HeaderLogo } from './HeaderLogo'
import { AuthMenu } from './AuthMenu'
import { DashboardMenu } from './DashboardMenu'


export const Header = () => {

  return (
    <>
        <header className="fade-in h-20 top-0 z-20 bg-slate-950 w-full fixed bg-opacity-50  backdrop-blur-sm ">
            <div className="flex flex-row max-w-screen-xl h-full w-full justify-between items-center mx-auto border-b-2 px-2 border-indigo-600 gap-1 py-4  text-white">
                <HeaderLogo 
                    fontSize="text-2xl"
                />

                <nav className="gap-3 hidden md:flex">
                    <DashboardMenu />
                    
                    {navItems.map(item => (
                        <Link 
                            key={item.url}
                            href={item.url}
                            className="text-indigo-600 font-bold text-xl hover:text-white hover:bg-indigo-600 px-4 py-2 rounded-lg hover:shadow-md hover:shadow-indigo-600 transition-all duration-500"
                        >{item.label}</Link>
                    ))}

                    <AuthMenu />
                </nav>

                <MenuButton />
            </div>
        </header>
    </>
  )
}
