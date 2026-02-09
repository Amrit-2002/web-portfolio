import { useParams, Link } from "react-router-dom";
import projects from "../data/projects";

function ProjectDetails() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) return <div className="project-not-found"><h2>Project Not Found</h2><Link to="/projects" className="btn">Back to Projects</Link></div>;

  return (
    <section className="project-details">
      <div className="details-container">
        <Link to="/projects" className="back-link">← Back to Projects</Link>

        <div className="details-header">
          <h1>{project.title}</h1>
          <div className="tech-stack">
            {project.tech.map((t, i) => (
              <span key={i}>{t}</span>
            ))}
          </div>
        </div>

        <div className="details-content">
          <div className="description-section">
            <h3>Overview</h3>
            <p>{project.description}</p>
          </div>

          <div className="features-section">
            <h3>Key Features</h3>
            <ul>
              {project.features && project.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>

          <div className="links-section">
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="btn">
              View Code (GitHub)
            </a>
            {project.live !== "#" && (
              <a href={project.live} target="_blank" rel="noopener noreferrer" className="btn btn-outline">
                Live Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ProjectDetails;
