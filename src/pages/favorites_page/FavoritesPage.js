import React from "react";
import ImageCard from "../../components/image_card/ImageCard";
import { observer, inject } from "mobx-react";
import EmptyState from "../../components/empty_state/EmptyState";

const FavoritesPage = inject("picturesStore", "favoritesStore")(
  observer(({ picturesStore, favoritesStore, history }) => (
    <div className="container">
      <div className="d-flex flex-wrap justify-content-center pt-5">
        {favoritesStore.favorites.length === 0 ? (
          <EmptyState
            title="No favorites."
            description="After searching click on the heart to save your favorite pictures."
          />
        ) : (
          favoritesStore.favorites.map(favorite => (
            <ImageCard
              picture={favorite}
              key={favorite.id}
              makeFavorite={() => picturesStore.makeFavorite(favorite)}
              isFavorite={true}
              makeUnfavorite={() => picturesStore.makeUnfavorite(favorite)}
              moreDetails={() => {
                picturesStore.selectedPicture = favorite;
                history.push("/details");
              }}
            />
          ))
        )}
      </div>
    </div>
  ))
);

export default FavoritesPage;
