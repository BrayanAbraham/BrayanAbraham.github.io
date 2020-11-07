import React, { useState } from "react";
import color from "../../../assets/images/ColorPhoto.jpg";
import black from "../../../assets/images/B&WPhoto.jpg";

const Photo = () => {
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

export default Photo;
