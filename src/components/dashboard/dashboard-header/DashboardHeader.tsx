import { AuthMenu } from "../../ui/header/AuthMenu"
import { HeaderLogo } from "../../ui/header/HeaderLogo"
import { SidebarButton } from "../sidebar-button/SidebarButton"

export const DashboardHeader = () => {
  return (
    <header className="fade-in h-20 flex justify-end items-center max-w-[1920px] px-2 sm:px-10 gap-1 py-4  ">

      <div className="flex gap-2 items-center">
        <SidebarButton />
      </div>
    </header>
  )
}
