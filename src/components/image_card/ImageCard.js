import React from "react";
import { Link } from "react-router-dom";
import FavoriteButton from "../favorite_button/FavoriteButton";

const styles = {
  card: {
    width: "18rem"
  }
};

const ImageCard = props => (
  <div className="card mr-2 mb-2" style={styles.card}>
    <img
      className="card-img-top"
      src="https://source.unsplash.com/collection/212915/286x180"
      alt="ImageCard"
    />
    <div className="card-body text-center" style={styles.cardBody}>
      <h5 className="card-title">John Doe</h5>
      <p className="card-text">Image description</p>
      <p className="card-text">
        <Link to={`/details/${props.id}`}>more...</Link>
      </p>
      <FavoriteButton isFavorited={props.isFavorited} />
    </div>
  </div>
);

export default ImageCard;
