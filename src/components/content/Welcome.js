import React from "react";

const Welcome = () => {
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
                <button className="btn btn-outline-primary">Resume</button>
              </div>
              <div className="col-md-1 col-lg-2"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
