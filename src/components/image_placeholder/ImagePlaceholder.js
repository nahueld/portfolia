import React from "react";
import PropTypes from "prop-types";

const ImagePlaceholder = ({ children }) => (
  <div
    className="d-flex bg-dark justify-content-center align-items-center"
    style={{ height: 300 }}
  >
    {children}
  </div>
);

ImagePlaceholder.propTypes = {
  children: PropTypes.node
};

ImagePlaceholder.defaultProps = {
  children: <div />
};

export default ImagePlaceholder;
