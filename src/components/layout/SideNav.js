import React, { useState } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

const SideNav = ({ links, setside }) => {
  const [close, setclose] = useState(false);

  const closeMenu = (e) => {
    setclose(true);
    setTimeout(setside, 600);
  };

  const navLinks = links.map((link) => {
    return (
      <li key={link.id} onClick={closeMenu}>
        <a href={link.link}>
          <div>{link.name}</div>
        </a>
      </li>
    );
  });

  return (
    <div className={`side-nav ${classnames({ "close-menu": close })}`}>
      <div className="row">
        <div className="col-4 col-sm-6">
          <div className="blur-overlay"></div>
        </div>
        <div className="col-8 col-sm-6">
          <div className="side-nav-section">
            <div className="side-primary-menu-trigger" onClick={closeMenu}>
              <i className="fa fa-times"></i>
            </div>
            <div className="side-primary-nav">
              <ul className="side-nav-list">{navLinks}</ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

SideNav.propTypes = {
  links: PropTypes.array.isRequired,
  setside: PropTypes.func.isRequired,
};

export default SideNav;
