function ExperienceCard({ exp }) {
  return (
    <div className="experience-card">
      <h3>{exp.role}</h3>
      <h4>{exp.company}</h4>

      <p className="duration">{exp.duration}</p>
      {/* <p className="product">
        <strong>Product:</strong> {exp.product}
      </p> */}

      <h5>Key Responsibilities</h5>
      <ul>
        {exp.responsibilities.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>

      <h5>Impact</h5>
      <ul className="impact-list">
        {exp.impact.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default ExperienceCard;
