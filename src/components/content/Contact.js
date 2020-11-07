import React from "react";
import PropTypes from "prop-types";

const Contact = ({ social }) => {
  const links = social.map((link) => {
    return link.type === "link" ? (
      <a
        href={link.link}
        target="_blank"
        rel="noopener noreferrer"
        key={link.id}
      >
        <i className={link.icon}></i>
      </a>
    ) : (
      <a href={`mailto:${link.link}`} key={link.id}>
        <i className={link.icon}></i>
      </a>
    );
  });

  return (
    <div id="contact">
      <div id="wrapper">
        <div className="container clearfix">
          <div className="text-center">
            <div id="contact-title">
              <h2>LET'S CATCH UP!</h2>
            </div>
            <p>
              Need anything built, want to work together or simply want to have
              a chat? I'll buy coffee.
            </p>
            <button className="btn btn-outline-primary">Say Hello</button>
            <button className="btn btn-outline-primary">Resume</button>
            <div id="social-links">{links}</div>
            <div id="developed">
              <p>
                Designed &amp; Built by{" "}
                <a
                  href="https://brayanabraham.github.io"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Brayan Abraham
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Contact.propTypes = {
  social: PropTypes.array.isRequired,
};

export default Contact;
