import Hero from "@/components/Hero";
import ProjectsGrid from "@/components/ProjectsGrid";
import NeovimSection from "@/components/NeovimSection";
import {
  neovimHighlight,
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

      <ProjectsGrid projects={projects} />

      <NeovimSection neovimHighlight={neovimHighlight} />

      <SectionHeader id="contact" number="03" title="Get in Touch" />
      <FooterSection personalInfo={personalInfo} variant="full" />
    </main>
  );
}
