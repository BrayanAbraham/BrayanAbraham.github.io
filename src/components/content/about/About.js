import React, { Fragment, useEffect, useState } from "react";
import Description from "./Description";
import Photo from "./Photo";
import colorBig from "../../../assets/images/ColorPhoto.jpg";
import blackBig from "../../../assets/images/B&WPhoto.jpg";
import colorSmall from "../../../assets/images/ColorSmall.jpg";
import blackSmall from "../../../assets/images/B&WSmall.jpg";
import colorSmallest from "../../../assets/images/ColorSmallest.jpg";
import blackSmallest from "../../../assets/images/B&WSmallest.jpg";

const About = () => {
  const [order, setorder] = useState(
    <Fragment>
      <Description />
      <Photo color={colorBig} black={blackBig} />
    </Fragment>
  );

  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth >= 992) {
        setorder(
          <Fragment>
            <Description />
            <Photo color={colorBig} black={blackBig} />
          </Fragment>
        );
      } else if (window.innerWidth < 992 && window.innerWidth >= 577) {
        setorder(
          <Fragment>
            <Photo color={colorSmall} black={blackSmall} />
            <Description />
          </Fragment>
        );
      } else {
        setorder(
          <Fragment>
            <Photo color={colorSmallest} black={blackSmallest} />
            <Description />
          </Fragment>
        );
      }
    });

    if (window.innerWidth >= 992) {
      setorder(
        <Fragment>
          <Description />
          <Photo color={colorBig} black={blackBig} />
        </Fragment>
      );
    } else if (window.innerWidth < 992 && window.innerWidth >= 577) {
      setorder(
        <Fragment>
          <Photo color={colorSmall} black={blackSmall} />
          <Description />
        </Fragment>
      );
    } else {
      setorder(
        <Fragment>
          <Photo color={colorSmallest} black={blackSmallest} />
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
