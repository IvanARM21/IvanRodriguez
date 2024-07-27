import { authMiddleware } from "@/actions";
import { HeaderLogo } from "@/components/ui/header/HeaderLogo";
import { redirect } from "next/navigation";

export default async function AuthLayout({
 children
}: {
 children: React.ReactNode;
}) {

  const isAuth = await authMiddleware();

  if(!isAuth.error) {
    redirect("/dashboard");
  }
  
  return (
    <div className="w-full h-screen flex flex-col justify-center items-center">
          <div className="text-center space-y-3">
            <HeaderLogo 
              fontSize="text-3xl sm:text-4xl"
            />
            <p className="text-xl">Access exclusively for administrators</p>
          </div>
        <main className="mt-5 px-2 sm:px-10 max-w-screen-md w-full">
          {children}
        </main>
    </div>
  );
}