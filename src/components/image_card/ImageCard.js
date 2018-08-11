import React from "react";
import { Link } from "react-router-dom";
import FavoriteButton from "../favorite_button/FavoriteButton";

const styles = {
  card: {
    width: "18rem"
  }
};

const ImageCard = ({ picture, isFavorite }) => (
  <div className="card mr-2 mb-2" style={styles.card}>
    <img className="card-img-top" src={picture.urls.thumb} alt="ImageCard" />
    <div className="card-body text-center" style={styles.cardBody}>
      <h5 className="card-title">{picture.user.name}</h5>
      <p className="card-text">{picture.description}</p>
      <p className="card-text">
        <Link to={`/details/${picture.id}`}>more...</Link>
      </p>
      <FavoriteButton isFavorite={isFavorite} />
    </div>
  </div>
);

export default ImageCard;
