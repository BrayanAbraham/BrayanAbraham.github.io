import React from "react";
import PropTypes from "prop-types";
import icons from "../../../assets/icons/icons";

const IndividualSkill = ({ skill }) => {
  return (
    <div className="col-6 col-sm-4 col-md-3 col-lg-2">
      <div className="skill">
        <div className="skill-icon">
          <img src={icons[skill]} alt={skill} />
        </div>
        <div className="skill-name">{skill}</div>
      </div>
    </div>
  );
};

IndividualSkill.propTypes = { skill: PropTypes.string.isRequired };

export default IndividualSkill;
