import skills from "../data/skills";
import SkillCard from "./SkillCard";

function Skills() {
  return (
    <section id="skills" className="skills">
      <h2 className="section-title">Skills</h2>

      <div className="skills-container">
        {skills.map((category, index) => (
          <div key={index} className="skill-category">
            <h3>{category.category}</h3>
            <div className="skills-grid">
              {category.items.map((skill, idx) => (
                <SkillCard
                  key={idx}
                  name={skill.name}
                  level={skill.level}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
