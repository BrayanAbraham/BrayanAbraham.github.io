import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

const TopNav = ({ links, setside }) => {
  const [sticky, setsticky] = useState(false);

  const navLinks = links.map((link) => {
    return (
      <li key={link.id}>
        <a href={link.link}>
          <div>{link.name}</div>
        </a>
      </li>
    );
  });

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setsticky(window.scrollY > 50 ? true : false);
    });
  }, []);

  return (
    <header
      id="header"
      className={`dark transparent ${classnames({ "sticky-nav": sticky })}`}
    >
      <div id="header-wrap">
        <div className="container clearfix">
          <div id="logo">
            <a href="#root" className="brayan-logo">
              LOGO
            </a>
          </div>
          <div id="primary-menu-trigger" onClick={setside}>
            <i className="fas fa-align-right"></i>
          </div>
          <nav id="primary-menu">
            <ul className="nav-list">{navLinks}</ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

TopNav.propTypes = {
  links: PropTypes.array.isRequired,
  setside: PropTypes.func.isRequired,
};

export default TopNav;
