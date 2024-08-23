import { Outfit } from "next/font/google";
import "./globals.css";

const outfit = Outfit({ subsets: ["latin"], weight: ["400", "700", "900"] });

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {


  return (
    <html lang="en">
      <body className={`${outfit.className} bg-slate-950 text-gray-300 min-h-screen flex flex-col`}>
          {children}
      </body>
    </html>
  );
}
