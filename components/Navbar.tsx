"use client";

import "@/styles/masthead.css";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Navbar() {
  const pathname = usePathname();

  if (pathname === "/") return null;

  const isActive = (path: string) => pathname.startsWith(path);

  return (
    <div className="masthead-wrapper">
      <header className="masthead">
        <nav className="masthead-nav" aria-label="Main navigation">
          <Link href="/" className={pathname === "/" ? "active" : ""}>
            Home
          </Link>
          <Link
            href="/projects"
            className={isActive("/projects") ? "active" : ""}
          >
            Projects
          </Link>
          <Link href="/blog" className={isActive("/blog") ? "active" : ""}>
            Blog
          </Link>
          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
            Resume
          </a>
        </nav>
      </header>
    </div>
  );
}
