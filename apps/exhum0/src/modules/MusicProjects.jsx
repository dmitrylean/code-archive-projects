// src/components/MusicProjects.jsx
import "./MusicProjects.css";
import ProjectLinks from "./ProjectLinks";
import projects from "../data/musicprojects.json";

function MusicProjects() {
  return (
    <section className="projects">
      <div className="container">
        <h2 className="projects-title">Projects</h2>
        <div className="projects-content">
          {projects.map((project, index) => (
            <div className="project-block" key={project.id || index}>
              <div className="projects-image">
                <img src={project.cover} alt={project.imagetitle} />
              </div>

              <div className="projects-list">
                <div className="projects-item">
                  <div className="projects-text">
                    <h3>{project.title}</h3>
                    <p className="project-subtitle">{project.genre}</p>
                    <p>{project.year}</p>
                    <ProjectLinks links={project.links} />
                    <p>{project.description}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default MusicProjects;
