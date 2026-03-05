import Hero from "@/components/Hero";
import ProjectsGrid from "@/components/ProjectsGrid";
import {
  personalInfo,
  projects,
  skills,
} from "@/data/portfolio";
import SectionHeader from "@/components/SectionHeader";
import SkillsSection from "@/components/SkillsSection";
import FooterSection from "@/components/FooterSection";

export default function HomePage() {
  return (
    <main>
      <Hero personalInfo={personalInfo} />

      <SectionHeader id="about" number="01" title="About & Expertise" />
      <SkillsSection personalInfo={personalInfo} skills={skills} />

      <SectionHeader id="work" number="02" title="Selected Work" />
      <ProjectsGrid projects={projects} />

      <SectionHeader id="contact" number="03" title="Get in Touch" />
      <FooterSection personalInfo={personalInfo} variant="full" />
    </main>
  );
}
