import education from "../data/education";
import EducationCard from "../components/EducationCard";

function EducationPage() {
  return (
    <section className="education">
      <h2 className="section-title">Education</h2>

      <div className="education-list">
        {education.map((edu) => (
          <EducationCard key={edu.id} edu={edu} />
        ))}
      </div>
    </section>
  );
}

export default EducationPage;
