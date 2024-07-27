import { ContactSection, Section, TechnologiesGrid, AboutMeSection, ProjectGrid } from "@/components";


export const metadata = {
 title: '<IvanRodriguez/> | Home',
};

export default function Home() {
  return (
    <>
      <AboutMeSection />
      
      <Section
        title='Projects'
      >
        <ProjectGrid />
      </Section>

      <Section
        title='Stack'
      >
        <TechnologiesGrid />
      </Section>
      
      <ContactSection />
    </>
  );
}
