"use client";

import { useUiStore } from '@/store'
import { FaBars } from 'react-icons/fa'

export const MenuButton = () => {
    const showMenu = useUiStore(state => state.showMenu);

  return (
    <button
        type="button"
        onClick={showMenu}
        className="h-7 w-7 text-slate-100 cursor-pointer block md:hidden"
    >
        <FaBars 
            size={30}
        />
    </button>
  )
}
