import React, { useEffect, useState } from "react";
import { ReactSVG } from "react-svg";
import PropTypes from "prop-types";
import classnames from "classnames";
import logo from "../../assets/images/Logo.svg";

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
      setsticky(window.scrollY > 50 && window.innerWidth > 767 ? true : false);
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
            <a href="#root" className="brayan-logo" aria-label="Brayan Logo">
              <div className="logo-set">
                {sticky ? (
                  <svg viewBox="0 0 40 40" className="logo-border">
                    <circle
                      className="logo-border-circle"
                      cx="20"
                      cy="20"
                      r="18"
                    />
                  </svg>
                ) : (
                  <svg viewBox="0 0 80 80" className="logo-border">
                    <circle
                      className="logo-border-circle"
                      cx="40"
                      cy="40"
                      r="36"
                    />
                  </svg>
                )}
                <ReactSVG src={logo} className="logo-svg" />
              </div>
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
