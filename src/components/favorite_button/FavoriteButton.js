import React from "react";

const styles = {
  favoriteIcon: {
    cursor: "pointer"
  }
};

const FavoriteButton = ({ isFavorite, makeFavorite }) => (
  <i
    onClick={makeFavorite}
    style={{
      ...styles.favoriteIcon
    }}
    className={`fa fa-heart-o fa-3x ${
      isFavorite ? "text-danger" : "text-dark"
    }`}
    aria-hidden="true"
  />
);

export default FavoriteButton;
