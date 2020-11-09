import React from "react";
import PropTypes from "prop-types";

const Project = ({ project }) => {
  return (
    <div className="col-lg-4 col-md-6 col-sm-12 project">
      <div className="card h-100 mb-3">
        <div className="card-header">
          <div className="project-links">
            {project.link ? (
              <span className="project-link">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-link"></i>
                </a>
              </span>
            ) : null}
            {project.github ? (
              <span className="project-github">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa fa-github"></i>
                </a>
              </span>
            ) : null}
          </div>
          <h5>{project.name}</h5>
        </div>
        <div className="card-body">
          <p>{project.desc}</p>
        </div>
        <div className="card-footer">
          <ul>
            {project.tech
              ? project.tech.map((t, i) => (
                  <li key={i}>
                    <span>{t}</span>
                  </li>
                ))
              : null}
          </ul>
        </div>
      </div>
    </div>
  );
};

Project.propTypes = {
  project: PropTypes.object.isRequired,
};

export default Project;
