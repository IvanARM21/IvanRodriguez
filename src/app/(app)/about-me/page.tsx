import { Section, TechnologiesGrid } from "@/components";

export const metadata = {
  title: '<IvanRodriguez/> | About Me',
 };

export default function AboutMePage() {
  return (
    <>
      <Section
          title='AboutMe'
      >
        <p className="text-xl text-gray-200">
          Hi, I&apos;m Ivan, a full stack web developer with specialization in frontend. I like to create modern and accessible web interfaces. I have solid knowledge in HTML, CSS, JavaScript and Frameworks like React and Next.js, I enjoy designing intuitive and functional interfaces. My focus is to create modern and efficient websites that not only meet, but exceed user expectations.
        </p>
      </Section>
      <Section
          title='MyStack'
      >
        <TechnologiesGrid />
      </Section>
    </>
  );
}