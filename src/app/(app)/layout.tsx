import { Footer, Header, MenuMobileSuspense, ProjectModalSuspense } from "@/components";

export const metadata  = {
  title: '<IvanRodriguez/>',
  description: "Iván - Full Stack Web Developer specialized in frontend. Explore my portfolio to see modern and efficient projects using technologies like HTML, CSS, JavaScript, React, Next.js and more.",
};

interface Props {
  children: React.ReactNode
}

export default async function AppLayout({
 children
}: Props ) {
  return (
    <>
        <Header />
        <MenuMobileSuspense />
        <ProjectModalSuspense />
        <main className="flex-1 max-w-screen-xl mx-auto px-2 mt-10 w-full">
          {children}
        </main>
        <Footer />
    </>
  );
}