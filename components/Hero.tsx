import "../styles/hero.css";
import { PersonalInfo } from "../types/portfolio";
import { ArrowRight, MapPin, Briefcase, GraduationCap } from "lucide-react";

export default function Hero({ personalInfo }: { personalInfo: PersonalInfo }) {
  return (
    <section className="hero">
      <div className="hero-left">
        <h1 className="hero-headline">{personalInfo.name}</h1>
        <p className="hero-subhead">aka vyeos</p>

        <a href="#work" className="hero-cta">
          View Selected Work
          <ArrowRight size={20} strokeWidth={2.5} />
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
          <MapPin size={12} strokeWidth={2.5} />
          {personalInfo.location.full}
        </div>
      </div>
    </section>
  );
}
