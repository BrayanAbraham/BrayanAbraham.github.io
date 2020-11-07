import React, { Fragment, useEffect, useState } from "react";
import Description from "./Description";
import Photo from "./Photo";

const About = () => {
  const [order, setorder] = useState(
    <Fragment>
      <Description />
      <Photo />
    </Fragment>
  );

  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth >= 992) {
        setorder(
          <Fragment>
            <Description />
            <Photo />
          </Fragment>
        );
      } else {
        setorder(
          <Fragment>
            <Photo />
            <Description />
          </Fragment>
        );
      }
    });

    if (window.innerWidth >= 992) {
      setorder(
        <Fragment>
          <Description />
          <Photo />
        </Fragment>
      );
    } else {
      setorder(
        <Fragment>
          <Photo />
          <Description />
        </Fragment>
      );
    }
  }, []);

  return (
    <div id="about">
      <div id="wrapper">
        <div className="container clearfix">
          <div id="about-title" className="text-center">
            <h2>ABOUT ME</h2>
          </div>
          <div className="row">{order}</div>
        </div>
      </div>
    </div>
  );
};

export default About;
