import React from "react";
import PropTypes from "prop-types";
import Project from "./Project";

const Projects = ({ projects }) => {
  const project = projects.map((project) => (
    <Project project={project} key={project.id} />
  ));

  return (
    <div id="projects">
      <div id="wrapper">
        <div className="container clearfix">
          <div id="project-title" className="text-center">
            <h2>MY WORK</h2>
          </div>
          <div id="projects-list" className="row">
            {project}
          </div>
          <div className="text-center">
            <a
              href="http://github.com/BrayanAbraham"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="btn btn-outline-primary">See More</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

Projects.propTypes = {
  projects: PropTypes.array.isRequired,
};

export default Projects;
