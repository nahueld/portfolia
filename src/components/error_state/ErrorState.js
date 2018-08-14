import React from "react";
import image from "./error.png";
import PropTypes from "prop-types";
import { observer } from "mobx-react";

const ErrorState = observer(({ errors }) => (
  <div className="d-flex flex-column">
    <img alt="" src={image} className="img-responsive align-self-center" />
    <h4 className="text-center mt-5 text-danger">Something went wrong</h4>
    <ul className="text-danger">
      {errors.map((e, idx) => (
        <li key={idx}>{e}</li>
      ))}
    </ul>
  </div>
));

ErrorState.propTypes = {
  errors: PropTypes.array
};

ErrorState.defaultProps = {
  errors: []
};

export default ErrorState;
