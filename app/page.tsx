import Hero from "@/app/components/Hero";
import ProjectsGrid from "@/app/components/ProjectsGrid";
import NeovimSection from "@/app/components/NeovimSection";
import {
  neovimHighlight,
  personalInfo,
  projects,
  skills,
} from "@/data/portfolio";
import SectionHeader from "@/app/components/SectionHeader";
import SkillsSection from "@/app/components/SkillsSection";
import FooterSection from "@/app/components/FooterSection";

export default function HomePage() {
  return (
    <main>
      <Hero personalInfo={personalInfo} />

      <SectionHeader id="about" number="01" title="About & Expertise" />
      <SkillsSection personalInfo={personalInfo} skills={skills} />

      <ProjectsGrid projects={projects} />

      <NeovimSection neovimHighlight={neovimHighlight} />

      <SectionHeader id="contact" number="03" title="Get in Touch" />
      <FooterSection personalInfo={personalInfo} variant="full" />
    </main>
  );
}
