import React from "react";
import ImageCard from "../../components/image_card/ImageCard";
import { observer, inject } from "mobx-react";

const FavoritesPage = inject("favoritesStore")(
  observer(({ favoritesStore }) => (
    <div className="d-flex justify-content-center">
      {favoritesStore.favorites.map(favorite => (
        <ImageCard
          picture={favorite}
          key={favorite.id}
          makeFavorite={() => favoritesStore.saveFavorite(favorite)}
        />
      ))}
    </div>
  ))
);

export default FavoritesPage;
