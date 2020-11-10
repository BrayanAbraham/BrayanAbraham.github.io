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
            <a href="#root" className="brayan-logo">
              <div className="logo-set">
                {sticky ? (
                  <svg viewBox="0 0 60 60" className="logo-border">
                    <circle
                      className="logo-border-circle"
                      cx="30"
                      cy="30"
                      r="27"
                    />
                  </svg>
                ) : (
                  <svg viewBox="0 0 100 100" className="logo-border">
                    <circle
                      className="logo-border-circle"
                      cx="50"
                      cy="50"
                      r="45"
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
