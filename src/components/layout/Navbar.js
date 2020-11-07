import React, { Fragment, useEffect, useState } from "react";
import PropTypes from "prop-types";
import SideNav from "./SideNav";
import TopNav from "./TopNav";

const Navbar = ({ links }) => {
  const [width, setwidth] = useState(window.innerWidth);
  const [side, setside] = useState(false);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setwidth(window.innerWidth);
      if (window.innerWidth > 767) {
        setside(false);
      }
    });
  }, []);

  return (
    <Fragment>
      <TopNav
        links={links}
        setside={() => {
          setside(true);
        }}
      />
      {width <= 767 && side ? (
        <SideNav
          links={links}
          setside={() => {
            setside(false);
          }}
        />
      ) : null}
    </Fragment>
  );
};

Navbar.propTypes = {
  links: PropTypes.array.isRequired,
};

export default Navbar;
