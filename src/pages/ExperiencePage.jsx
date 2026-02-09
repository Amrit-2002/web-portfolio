import experience from "../data/experience";
import ExperienceCard from "../components/ExperienceCard";

function ExperiencePage() {
  return (
    <section className="experience">
      <h2 className="section-title">Experience</h2>

      <div className="experience-list">
        {experience.map((exp) => (
          <ExperienceCard key={exp.id} exp={exp} />
        ))}
      </div>
    </section>
  );
}

export default ExperiencePage;
