import { Link } from "react-router-dom";

function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <h3>{project.title}</h3>
      <p>{project.description}</p>

      <div className="tech-stack">
        {project.tech.map((t, index) => (
          <span key={index}>{t}</span>
        ))}
      </div>

      <Link to={`/projects/${project.id}`} className="btn-sm">
        View Details
      </Link>
    </div>
  );
}

export default ProjectCard;
