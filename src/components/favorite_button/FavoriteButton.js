import React from "react";

const styles = {
  favoriteIcon: {
    cursor: "pointer"
  }
};

const FavoriteButton = props => (
  <i
    style={{
      ...styles.favoriteIcon
    }}
    className={`fa fa-heart-o fa-3x ${
      props.isFavorited ? "text-danger" : "text-dark"
    }`}
    aria-hidden="true"
  />
);

export default FavoriteButton;
