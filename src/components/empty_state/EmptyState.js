import React from "react";
import image from "./empty.png";

const EmptyState = ({ title, description }) => (
  <div className="d-flex flex-column">
    <img src={image} alt="" className="img-responsive align-self-center" />
    <h4 className="text-center mt-5 text-muted">{title}</h4>
    <p className="text-center text-muted">{description}</p>
  </div>
);

export default EmptyState;
