import React from "react";
import FavoriteButton from "../favorite_button/FavoriteButton";
import LazyImage from "../lazy_image/LazyImage";
import PropTypes from "prop-types";
import { observer } from "mobx-react";

const styles = {
  card: {
    width: "18rem"
  }
};

const ImageCard = observer(
  ({ picture, isFavorite, makeFavorite, makeUnfavorite, moreDetails }) => (
    <div className="card mr-2 mb-2" style={styles.card}>
      <LazyImage
        src={picture.urls.thumb}
        picture={picture}
        imageClass={"card-img-top"}
        onError={() => (picture.error = true)}
      />
      <div className="card-body text-center" style={styles.cardBody}>
        <h5 className="card-title">{picture.user.name}</h5>
        <p className="card-text">{picture.description}</p>
        <p className="card-text">
          <button type="button" onClick={moreDetails} className="btn btn-link">
            more...
          </button>
        </p>
        <FavoriteButton
          isFavorite={isFavorite}
          makeFavorite={makeFavorite}
          makeUnfavorite={makeUnfavorite}
        />
      </div>
    </div>
  )
);

ImageCard.propTypes = {
  picture: PropTypes.object,
  isFavorite: PropTypes.bool,
  makeFavorite: PropTypes.func,
  makeUnfavorite: PropTypes.func,
  moreDetails: PropTypes.func
};

ImageCard.defaultProps = {
  picture: {
    user: {
      name: ""
    },
    description: "",
    urls: {
      thumb: ""
    },
    error: true
  },
  isFavorite: false,
  makeFavorite: () => console.error("callback is undefined"),
  makeUnfavorite: () => console.error("callback is undefined")
};

export default ImageCard;
