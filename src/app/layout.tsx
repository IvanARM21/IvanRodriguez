import { Rubik } from "next/font/google";
import { GeistSans } from 'geist/font/sans';

import "./globals.css";

const outfit = Rubik({ subsets: ["latin"], weight: ["400", "500", "700"] });

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  return (
    <html lang="en">
      <body className={`${GeistSans.className} bg-slate-950 text-gray-300 min-h-screen flex flex-col`}>
          {children}
      </body>
    </html>
  );
}
