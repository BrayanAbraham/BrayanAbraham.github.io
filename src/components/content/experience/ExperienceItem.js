import React, { Fragment } from "react";
import PropTypes from "prop-types";

const ExperienceItem = ({ experience }) => {
  const positionItem = (name, start, end) => {
    return (
      <Fragment>
        <h4>{name}</h4>
        {start ? (
          <h5>
            {start.date}
            <sup>{start.super}</sup>
            {start.month} {start.year} to{" "}
            {end ? (
              <Fragment>
                {end.date}
                <sup>{end.super}</sup>
                {end.month} {end.year}
              </Fragment>
            ) : (
              <Fragment>Present</Fragment>
            )}
          </h5>
        ) : null}
      </Fragment>
    );
  };

  var position;
  if (Array.isArray(experience.position)) {
    position = experience.position.map((position, index) => {
      const { name, start, end } = position;
      return (
        <div key={index} className="mb-4">
          {positionItem(name, start, end)}
        </div>
      );
    });
  } else {
    const { name, start, end } = experience.position;
    position = positionItem(name, start, end);
  }

  console.log(position);

  return (
    <div className="experience-item">
      <div className="row">
        <div className="col-md-6">
          <h3>{experience.company}</h3>
          {position}
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
