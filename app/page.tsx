import { personalInfo } from "@/data/portfolio";
import Link from "next/link";

export default function HomePage() {
  const github = personalInfo.socials.find(
    (social) => social.platform === "GitHub",
  );
  const twitter = personalInfo.socials.find(
    (social) => social.platform === "X",
  );

  return (
    <main className="h-screen w-screen flex items-center justify-center">
      <section className="flex flex-col gap-12">
        <header className="">
          <h1 className="text-4xl font-semibold text-primary">
            {personalInfo.name}
          </h1>
          <p className="text-secondary">{personalInfo.title}</p>
        </header>

        <nav className="flex flex-col gap-4 text-lg" aria-label="Primary">
          <Link className="hover:text-accent-2" href="/projects">
            Projects
          </Link>
          <Link className="hover:text-accent-2" href="/blog">
            Blogs
          </Link>
          <a
            className="hover:text-accent-2"
            href="https://youtube.com/@vyeos"
            target="_blank"
            rel="noreferrer"
          >
            YouTube
          </a>
          <a
            className="hover:text-accent-2"
            href={personalInfo.resume ?? "/resume.pdf"}
            target="_blank"
            rel="noreferrer"
          >
            Resume
          </a>
        </nav>

        <div
          className="flex gap-4 items-center text-muted-foreground decoration-none lowercase transition-colors duration-300"
          aria-label="Contact"
        >
          {github?.url && (
            <a
              className="hover:text-accent"
              href={github.url}
              target="_blank"
              rel="noreferrer"
            >
              gh
            </a>
          )}
          {twitter?.url && (
            <a
              className="hover:text-accent"
              href={twitter.url}
              target="_blank"
              rel="noreferrer"
            >
              x
            </a>
          )}
        </div>
      </section>
    </main>
  );
}
