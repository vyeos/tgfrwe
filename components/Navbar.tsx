"use client";

import "@/app/styles/masthead.css";
import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const isActive = (path: string) => {
    if (path === "/") return pathname === "/";
    return pathname.startsWith(path);
  };

  const closeMenu = () => setIsOpen(false);

  return (
    <div className={`masthead-wrapper ${isOpen ? "is-open" : ""}`}>
      <header className="masthead">
        <div className="masthead-logo">
          <Image src="/vyeos.png" alt="VYEOS" fill className="logo-mark" />
        </div>

        {/* Desktop Nav */}
        <nav className="masthead-nav desktop-nav">
          <Link href="/" className={isActive("/") ? "active" : ""}>
            Home
          </Link>

          <Link href="/blog" className={isActive("/blog") ? "active" : ""}>
            Blog
          </Link>

          <a href="/resume.pdf" target="_blank" rel="noopener noreferrer">
            Resume
          </a>
        </nav>

        {/* Mobile Toggle */}
        <button
          className="masthead-toggle"
          type="button"
          aria-label="Toggle navigation"
          onClick={() => setIsOpen(!isOpen)}
        >
          <span></span>
        </button>

        <div className="masthead-theme">Rose Pine</div>
      </header>

      {/* Mobile Nav */}
      <nav className="masthead-nav mobile-nav">
        <Link
          href="/"
          className={isActive("/") ? "active" : ""}
          onClick={closeMenu}
        >
          Home
        </Link>

        <Link
          href="/blog"
          className={isActive("/blog") ? "active" : ""}
          onClick={closeMenu}
        >
          Blog
        </Link>

        <a
          href="/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          onClick={closeMenu}
        >
          Resume
        </a>
      </nav>
    </div>
  );
}
