import React from "react";
import ImageCard from "../../components/image_card/ImageCard";
import { observer, inject } from "mobx-react";

const FavoritesPage = inject("favoritesStore")(
  observer(({ favoritesStore }) => (
    <div className="container">
      <div className="d-flex flex-wrap justify-content-center pt-5">
        {favoritesStore.favorites.map(favorite => (
          <ImageCard
            picture={favorite}
            key={favorite.id}
            makeFavorite={() => favoritesStore.saveFavorite(favorite)}
          />
        ))}
      </div>
    </div>
  ))
);

export default FavoritesPage;
