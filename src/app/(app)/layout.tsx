import { Footer, Header, MenuMobile } from "@/components";
import { ProjectModal } from "@/components/ui/modal/ProjectModal";

export const metadata  = {
    title: '<IvanRodriguez/> | Layout',
    description: "Iván - Full Stack Web Developer specialized in frontend. Explore my portfolio to see modern and efficient projects using technologies like HTML, CSS, JavaScript, React, Next.js and more.",
   };

export default async function AppLayout({
 children
}: {
 children: React.ReactNode;
}) {

  return (
    <>
        <Header />
        <MenuMobile />
        <ProjectModal />
          <main className="flex-1 max-w-screen-xl mx-auto px-2 mt-10 w-full">
            {children}
          </main>
        <Footer />
    </>
  );
}