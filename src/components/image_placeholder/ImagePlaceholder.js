import React from "react";

const ImagePlaceholder = ({ children }) => (
  <div
    className="d-flex bg-dark justify-content-center align-items-center"
    style={{ height: 300 }}
  >
    {children}
  </div>
);

export default ImagePlaceholder;
