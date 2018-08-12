import React from "react";
import LazyImage from "../lazy_image/LazyImage";

const PictureDetails = ({ picture }) => (
  <div className="card bg-dark text-white">
    <LazyImage
      imageClass="card-img"
      src={picture.urls.regular}
      picture={picture}
      onError={() => (picture.error = true)}
    />
    <div className="card-img-overlay">
      <h5 className="card-title bg-dark">{picture.user.name}</h5>
      <p className="card-text bg-dark">{picture.user.location}</p>
      <p className="card-text bg-dark">{picture.user.bio}</p>
    </div>
  </div>
);

export default PictureDetails;
