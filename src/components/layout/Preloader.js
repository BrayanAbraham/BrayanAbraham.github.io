import React from "react";
import logo from "../../assets/images/Logo.svg";
import { ReactSVG } from "react-svg";
import classnames from "classnames";

const Preloader = ({ opacity, hide }) => {
  return (
    <div
      id="preloader"
      className={classnames({
        opacity,
        hide,
      })}
    >
      <div className="load-logo">
        <svg viewBox="0 0 200 200" className="logo-border">
          <circle className="logo-border-circle" cx="100" cy="100" r="90" />
        </svg>
        <ReactSVG src={logo} className="logo-svg" />
      </div>
    </div>
  );
};

export default Preloader;
