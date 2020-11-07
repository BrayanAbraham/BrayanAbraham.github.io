import React from "react";
import PropTypes from "prop-types";

const Experience = ({ experience }) => {
  const data = experience.map((ex) => {
    return (
      <div className="experience-item" key={ex.id}>
        <div className="row">
          <div className="col-md-6">
            <h3>{ex.company}</h3>
            <h5>{ex.position}</h5>
            <h6>
              {ex.start.date}
              <sup>{ex.start.super}</sup> {ex.start.month} {ex.start.year} to{" "}
              {ex.end.date}
              <sup>{ex.end.super}</sup> {ex.end.month} {ex.end.year}
            </h6>
          </div>
          <div className="col-md-6">
            <p>{ex.desc}</p>
          </div>
        </div>
      </div>
    );
  });

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
