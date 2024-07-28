import { authMiddleware } from "@/actions";
import { DashboardHeader, SidebarDashboard } from "@/components";
import { redirect } from "next/navigation";

export default async function DashboardLayout({
 children
}: {
 children: React.ReactNode;
}) {

    const isAuth = await authMiddleware();

    if(isAuth.error) {
        redirect(isAuth.redirect);
    }

  return (
    <>
        <DashboardHeader />
        <SidebarDashboard />
        <main className="lg:ml-80 px-2 sm:px-10 gap-1 py-4 max-w-screen-xl">
          {children}
        </main>
    </>
  );
}