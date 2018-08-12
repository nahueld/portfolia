import React from "react";
import { observer } from "mobx-react";
import PropTypes from "prop-types";

const styles = {
  favoriteIcon: {
    cursor: "pointer"
  }
};

const FavoriteButton = observer(
  ({ isFavorite, makeFavorite, makeUnfavorite }) => (
    <i
      onClick={isFavorite ? makeUnfavorite : makeFavorite}
      style={{
        ...styles.favoriteIcon
      }}
      className={`fa fa-3x ${
        isFavorite ? "fa-heart text-danger" : "fa-heart-o text-dark"
      }`}
      aria-hidden="true"
    />
  )
);

FavoriteButton.propTypes = {
  isFavorite: PropTypes.bool,
  makeFavorite: PropTypes.func,
  makeUnfavorite: PropTypes.func
};

FavoriteButton.defaultProps = {
  isFavorite: false,
  makeFavorite: () => console.error("callback is undefined"),
  makeUnfavorite: () => console.error("callback is undefined")
};

export default FavoriteButton;
