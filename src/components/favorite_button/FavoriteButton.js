import React from "react";
import { observer } from "mobx-react";

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

export default FavoriteButton;
