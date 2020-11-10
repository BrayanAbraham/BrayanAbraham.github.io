import React from "react";
import PropTypes from "prop-types";
import ExperienceItem from "./ExperienceItem";

const Experience = ({ experience }) => {
  const data = experience.map((ex) => (
    <ExperienceItem key={ex.id} experience={ex} />
  ));

  return (
    <div id="experience">
      <div id="wrapper">
        <div className="container clearfix">
          <div id="experience-title" className="text-center">
            <h2>EXPERIENCE</h2>
          </div>
          <div id="experiences">{data}</div>
        </div>
      </div>
    </div>
  );
};

Experience.propTypes = {
  experience: PropTypes.array.isRequired,
};

export default Experience;
