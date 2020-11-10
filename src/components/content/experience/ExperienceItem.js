import React from "react";
import PropTypes from "prop-types";

const ExperienceItem = ({ experience }) => {
  return (
    <div className="experience-item">
      <div className="row">
        <div className="col-md-6">
          <h3>{experience.company}</h3>
          <h5>{experience.position}</h5>
          <h6>
            {experience.start.date}
            <sup>{experience.start.super}</sup> {experience.start.month}{" "}
            {experience.start.year} to {experience.end.date}
            <sup>{experience.end.super}</sup> {experience.end.month}{" "}
            {experience.end.year}
          </h6>
        </div>
        <div className="col-md-6">
          <p>{experience.desc}</p>
        </div>
      </div>
    </div>
  );
};

ExperienceItem.propTypes = {
  experience: PropTypes.object.isRequired,
};

export default ExperienceItem;
