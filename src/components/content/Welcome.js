import React from "react";
import PropTypes from "prop-types";

const Welcome = ({ resume }) => {
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
                  I'm a software engineer, competitive coder and an occasional
                  poet. I love designing and developing beautiful applications.
                </p>
                <button className="btn btn-outline-primary">
                  Get in touch
                </button>
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
};

export default Welcome;
