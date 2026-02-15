import Image from "next/image";
import "@/app/styles/projects.css";
import type { Project } from "@/types/portfolio";

type ProjectsGridProps = {
  projects: Project[];
};

export default function ProjectsGrid({ projects }: ProjectsGridProps) {
  return (
    <section className="projects-grid">
      {projects.map((project: Project, index: number) => (
        <article className="project-card" key={project.name + index}>
          <div className="project-media">
            {project.media?.url ? (
              project.media.type === "video" ? (
                <video
                  className="project-media-asset"
                  src={project.media.url}
                  autoPlay
                  muted
                  loop
                  playsInline
                />
              ) : (
                <Image
                  className="project-media-asset"
                  src={project.media.url}
                  alt={project.media.alt}
                  loading="lazy"
                />
              )
            ) : (
              <span className="project-placeholder">
                {project.name.split(" ")[0]}
              </span>
            )}
          </div>

          <div className="project-content">
            <div className="project-number">
              Project {String(index + 1).padStart(2, "0")}
            </div>

            <h3 className="project-name">{project.name}</h3>

            <p
              className={`project-desc ${
                !project.description ? "placeholder" : ""
              }`}
            >
              {project.description ||
                "Project description coming soon. This space will showcase the problem solved, approach taken, and impact delivered."}
            </p>

            {project.techStack?.length ? (
              <div className="project-tech">
                {project.techStack.map((tech: string, i: number) => (
                  <span key={tech + i}>{tech}</span>
                ))}
              </div>
            ) : null}

            <div className="project-meta">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387..." />
                  </svg>
                  GitHub
                </a>
              )}

              {project.deployedUrl && (
                <a
                  href={project.deployedUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                  Live Site
                </a>
              )}
            </div>
          </div>
        </article>
      ))}
    </section>
  );
}
