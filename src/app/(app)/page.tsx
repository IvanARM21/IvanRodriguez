import { ContactSection, Section, TechnologiesGrid, AboutMeSection, ProjectGrid } from "@/components";
import { Lang } from "@/interfaces";
import { projectsLang, stackLang } from "@/lang";
import { existsLang } from "@/utils";
import { redirect } from "next/navigation";

export const metadata = {
 title: '<IvanRodriguez/>',
};


interface Props {
  searchParams: {
    lang: string | null;
  }
}

export default function Home({searchParams} : Props) {
  
  if(!existsLang(searchParams.lang)) redirect("/?lang=us");
  const lang = searchParams.lang as Lang;

  return (
    <>
      <AboutMeSection 
        lang={lang}
      />
      
      <Section
        id="projects"
        title={projectsLang[lang].projectsTag ?? projectsLang["us"].projectsTag}
      >
        <ProjectGrid 
          lang={lang}
        />
      </Section>

      <Section
        id="stack"
        title={stackLang[lang].stackTag ?? stackLang["us"].stackTag}
      >
        <TechnologiesGrid />
      </Section>
      
      <ContactSection 
        lang={lang}
      />
    </>
  );
}
