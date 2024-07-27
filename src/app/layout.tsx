import { Poppins } from "next/font/google";
import "./globals.css";
import { authMiddleware } from "@/actions";
import { SessionProvider } from "@/components";


const poppins = Poppins({ subsets: ["latin"], weight: ["400", "700", "900"] });

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const isAuth = await authMiddleware();

  return (
    <html lang="en">
      <body className={`${poppins.className} bg-slate-950 text-gray-300 min-h-screen flex flex-col`}>
        <SessionProvider user={isAuth.user}>
          {children}
        </SessionProvider>
      </body>
    </html>
  );
}
