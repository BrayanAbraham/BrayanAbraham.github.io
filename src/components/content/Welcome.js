import React from "react";
import PropTypes from "prop-types";

const Welcome = ({ resume, social }) => {
  return (
    <div id="home">
      <div id="wrapper">
        <div className="container clearfix">
          <div className="welcome-content">
            <div className="row">
              <div className=" col-md-1 col-lg-2"></div>
              <div className="col-md-10 col-lg-8">
                <h3>Hello there, I'm</h3>
                <h1>BRAYAN ABRAHAM</h1>
                <p>
                  Web Developer | Application Developer | Software Engineer |
                  Occasional Poet | Footballer
                </p>
                <a href={`mailto:${social[4].link}`}>
                  <button className="btn btn-outline-primary">
                    Get In Touch
                  </button>
                </a>
                {resume ? (
                  <a href={resume} target="_blank" rel="noopener noreferrer">
                    <button className="btn btn-outline-primary">Resume</button>
                  </a>
                ) : null}
              </div>
              <div className="col-md-1 col-lg-2"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Welcome.propTypes = {
  resume: PropTypes.string,
  social: PropTypes.array.isRequired,
};

export default Welcome;
