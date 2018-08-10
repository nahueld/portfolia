import React from "react";
import ImageCard from "../../components/image_card/ImageCard";

const FavoritesPage = props => (
  <div className="d-flex p-2">
    <ImageCard id="1" isFavorited={true} />
    <ImageCard id="1" isFavorited={true} />
  </div>
);

export default FavoritesPage;
