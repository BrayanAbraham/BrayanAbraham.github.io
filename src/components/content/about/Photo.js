import React, { useState } from "react";
import PropTypes from "prop-types";

const Photo = ({ color, black }) => {
  const [photo, setphoto] = useState(black);

  return (
    <div className="col-lg-5">
      <div className="text-center">
        <img
          src={photo}
          alt="Profile"
          className="img-fluid rounded-circle profile-photo"
          onMouseOver={(e) => setphoto(color)}
          onMouseOut={(e) => setphoto(black)}
        />
      </div>
    </div>
  );
};

Photo.propTypes = {
  color: PropTypes.string.isRequired,
  black: PropTypes.string.isRequired,
};

export default Photo;
