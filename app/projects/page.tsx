import "@/styles/projects-page.css";
import ProjectsGrid from "@/components/ProjectsGrid";
import { projects } from "@/data/portfolio";

export default function ProjectsPage() {
  return (
    <main className="projects-page">
      <section className="projects-main">
        <header className="projects-header">
          <h1>Projects</h1>
        </header>
        <ProjectsGrid projects={projects} />
      </section>
    </main>
  );
}
