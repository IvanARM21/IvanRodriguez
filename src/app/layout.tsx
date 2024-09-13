import { GeistSans } from 'geist/font/sans';

import "./globals.css";

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
