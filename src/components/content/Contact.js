import React from "react";
import PropTypes from "prop-types";

const Contact = ({ social, resume }) => {
  const links = social.map((link) =>
    link.type === "link" ? (
      <a
        href={link.link}
        target="_blank"
        rel="noopener noreferrer"
        key={link.id}
        aria-label={link.name}
      >
        <i className={link.icon}></i>
      </a>
    ) : (
      <a href={`mailto:${link.link}`} key={link.id} aria-label={link.name}>
        <i className={link.icon}></i>
      </a>
    )
  );

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
              a chat? Drop a mail at{" "}
              <a href={`mailto:${social[4].link}`}>{social[4].link}</a> or say
              hello below. I'll buy coffee.
            </p>
            <a href={`mailto:${social[4].link}`}>
              <button className="btn btn-outline-primary">Say Hello</button>
            </a>
            {resume ? (
              <a href={resume} target="_blank" rel="noopener noreferrer">
                <button className="btn btn-outline-primary">Resume</button>
              </a>
            ) : null}
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
              <p>Copyright &copy; 2021</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Contact.propTypes = {
  social: PropTypes.array.isRequired,
  resume: PropTypes.string,
};

export default Contact;
