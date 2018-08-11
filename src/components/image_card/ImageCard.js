import React from "react";
import { Link } from "react-router-dom";
import FavoriteButton from "../favorite_button/FavoriteButton";
import LazyImage from "../lazy_image/LazyImage";

const styles = {
  card: {
    width: "18rem"
  }
};

const ImageCard = ({ picture, isFavorite, makeFavorite, makeUnfavorite }) => (
  <div className="card mr-2 mb-2" style={styles.card}>
    <LazyImage src={picture.urls.thumb} imageClass={"card-img-top"} />
    <div className="card-body text-center" style={styles.cardBody}>
      <h5 className="card-title">{picture.user.name}</h5>
      <p className="card-text">{picture.description}</p>
      <p className="card-text">
        <Link to={`/details/${picture.id}`}>more...</Link>
      </p>
      <FavoriteButton
        isFavorite={isFavorite}
        makeFavorite={makeFavorite}
        makeUnfavorite={makeUnfavorite}
      />
    </div>
  </div>
);

export default ImageCard;
