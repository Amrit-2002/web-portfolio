function EducationCard({ edu }) {
  return (
    <div className="education-card">
      <h3>{edu.degree}</h3>
      <h4>{edu.field}</h4>

      <p className="institute">{edu.institute}</p>
      <p className="duration">{edu.duration}</p>
      <p className="score">{edu.score}</p>

      <ul>
        {edu.highlights.map((point, index) => (
          <li key={index}>{point}</li>
        ))}
      </ul>
    </div>
  );
}

export default EducationCard;
