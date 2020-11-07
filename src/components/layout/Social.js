import React from "react";
import PropTypes from "prop-types";

const Social = ({ links }) => {
  const social = links.map((link) => {
    return (
      <div className="social-icon" key={link.id}>
        {link.type === "link" ? (
          <a href={link.link} target="_blank" rel="noopener noreferrer">
            <i className={link.icon}></i>
          </a>
        ) : (
          <a href={`mailto:${link.link}`}>
            <i className={link.icon}></i>
          </a>
        )}
      </div>
    );
  });

  return (
    <div id="social-sticky" className="text-center">
      {social}
      <div className="line"></div>
    </div>
  );
};

Social.propTypes = {
  links: PropTypes.array.isRequired,
};

export default Social;
