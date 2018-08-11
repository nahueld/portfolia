import React from "react";
import ImageCard from "../../components/image_card/ImageCard";
import { observer, inject } from "mobx-react";

const FavoritesPage = inject("picturesStore", "favoritesStore")(
  observer(({ picturesStore, favoritesStore }) => (
    <div className="container">
      <div className="d-flex flex-wrap justify-content-center pt-5">
        {favoritesStore.favorites.map(favorite => (
          <ImageCard
            picture={favorite}
            key={favorite.id}
            makeFavorite={() => picturesStore.makeFavorite(favorite)}
            isFavorite={true}
            makeUnfavorite={() => picturesStore.makeUnfavorite(favorite)}
          />
        ))}
      </div>
    </div>
  ))
);

export default FavoritesPage;
