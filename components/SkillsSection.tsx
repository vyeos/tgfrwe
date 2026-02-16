import "@/styles/skills.css";
import type { PersonalInfo, Skill, SkillCategory } from "../types/portfolio";
import { Layers, Code2, Wrench, Database } from "lucide-react";

type SkillsSectionProps = {
  personalInfo: PersonalInfo;
  skills: Skill[];
};

export default function SkillsSection({
  personalInfo,
  skills,
}: SkillsSectionProps) {
  const isCategory = (category: SkillCategory) => (skill: Skill) =>
    skill.category === category;

  return (
    <section className="skills-section">
      <div className="skills-sidebar">
        <h3>Frontend Developer with Full-Stack Capabilities</h3>
        <p>{personalInfo.bio}</p>
      </div>
      <div className="skills-grid">
        <div className="skill-category">
          <div className="skill-category-title">
            <Layers size={16} strokeWidth={2} />
            Primary Stack
          </div>
          <div className="skill-list">
            {skills
              .filter(isCategory("primary"))
              .map((skill: Skill, idx: number) => (
                <span key={idx} className="skill-tag">
                  {skill.name}
                </span>
              ))}
          </div>
        </div>
        <div className="skill-category">
          <div className="skill-category-title">
            <Code2 size={16} strokeWidth={2} />
            Languages
          </div>
          <div className="skill-list">
            {skills
              .filter(isCategory("language"))
              .map((skill: Skill, idx: number) => (
                <span key={idx} className="skill-tag">
                  {skill.name}
                </span>
              ))}
          </div>
        </div>
        <div className="skill-category">
          <div className="skill-category-title">
            <Wrench size={16} strokeWidth={2} />
            Tools & Frameworks
          </div>
          <div className="skill-list">
            {skills
              .filter(isCategory("tool"))
              .map((skill: Skill, idx: number) => (
                <span
                  key={idx}
                  className={`skill-tag ${skill.name === "Neovim" ? "accent" : ""}`}
                >
                  {skill.name}
                </span>
              ))}
          </div>
        </div>
        <div className="skill-category">
          <div className="skill-category-title">
            <Database size={16} strokeWidth={2} />
            Databases
          </div>
          <div className="skill-list">
            {skills
              .filter(isCategory("database"))
              .map((skill: Skill, idx: number) => (
                <span key={idx} className="skill-tag">
                  {skill.name}
                </span>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
}
