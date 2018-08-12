import React from "react";
import LazyLoad from "react-lazyload";
import ImagePlaceholder from "../image_placeholder/ImagePlaceholder";

const LazyImage = ({ src, imageClass, picture, onError }) =>
  picture.error ? (
    <ImagePlaceholder>
      <h1 className="text-light">it broke ;(</h1>
    </ImagePlaceholder>
  ) : (
    <LazyLoad
      once
      placeholder={
        <ImagePlaceholder>
          <i className="fa fa-circle-o-notch fa-spin fa-3x fa-fw text-light" />
        </ImagePlaceholder>
      }
    >
      <img onError={onError} className={imageClass} src={src} alt="LazyImage" />
    </LazyLoad>
  );

//

export default LazyImage;
