import React from "react";
import PropTypes from "prop-types";
import image from "./empty.png";
import { observer } from "mobx-react";

const EmptyState = observer(({ title, description }) => (
  <div className="d-flex flex-column">
    <img src={image} alt="" className="img-responsive align-self-center" />
    <h4 className="text-center mt-5 text-muted">{title}</h4>
    <p className="text-center text-muted">{description}</p>
  </div>
));

EmptyState.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string
};

EmptyState.defaultProps = {
  title: "",
  description: ""
};

export default EmptyState;
