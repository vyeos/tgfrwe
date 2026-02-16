import Image from "next/image";
import "../styles/projects.css";
import type { Project } from "../types/portfolio";
import { Github, ExternalLink } from "lucide-react";

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
                  alt={project.media.alt || project.name}
                  width={800}
                  height={450}
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
                  <Github size={12} />
                  GitHub
                </a>
              )}

              {project.deployedUrl && (
                <a
                  href={project.deployedUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink size={12} />
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
