import React from "react";
import LazyLoad from "react-lazyload";

const LazyImage = ({ src, imageClass }) => (
  <LazyLoad
    once
    placeholder={
      <div
        className="d-flex bg-dark justify-content-center align-items-center"
        style={{ height: 500 }}
      >
        <i className="fa fa-circle-o-notch fa-spin fa-3x fa-fw text-light" />
      </div>
    }
  >
    <img className={imageClass} src={src} alt="LazyImage" />
  </LazyLoad>
);

export default LazyImage;
