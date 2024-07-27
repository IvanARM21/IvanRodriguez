import { ProjectGrid, Section } from "@/components";

export const metadata = {
  title: '<IvanRodriguez/> | Projects',
};

export default function ProjectsPage() {
  return (
    <Section
        title='MyProjects'
    >
        <ProjectGrid />
    </Section>
  );
}