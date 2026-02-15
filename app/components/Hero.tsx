import "@/app/styles/hero.css";
import { PersonalInfo } from "@/types/portfolio";

export default function Hero({ personalInfo }: { personalInfo: PersonalInfo }) {
  return (
    <section className="hero">
      <div className="hero-left">
        <h1 className="hero-headline">{personalInfo.name}</h1>
        <p className="hero-subhead">aka vyeos</p>

        <a href="#work" className="hero-cta">
          View Selected Work
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </a>
      </div>

      <div className="hero-right">
        <div className="hero-stats">
          <div className="stat-item">
            <div className="stat-number">{personalInfo.title}</div>
            <div className="stat-label">Role</div>
          </div>

          <div className="stat-item">
            <div className="stat-number">2nd</div>
            <div className="stat-label">Year at Adani University</div>
          </div>
        </div>

        <div className="location-badge">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
            <circle cx="12" cy="10" r="3" />
          </svg>

          {personalInfo.location.full}
        </div>
      </div>
    </section>
  );
}
