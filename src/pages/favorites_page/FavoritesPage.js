import React from "react";
import ImageCard from "../../components/image_card/ImageCard";
import { observer, inject } from "mobx-react";
import EmptyState from "../../components/empty_state/EmptyState";

const FavoritesPage = inject(
  "picturesStore",
  "favoritesStore",
  "favoritesPageStore"
)(
  observer(({ picturesStore, favoritesStore, favoritesPageStore, history }) => (
    <div className="container">
      <div className="d-flex flex-wrap justify-content-center pt-5">
        {favoritesStore.favoritesRegistry.length === 0 ? (
          <EmptyState
            title="No favorites."
            description="After searching click on the heart to save your favorite pictures."
          />
        ) : (
          favoritesStore.favoritesRegistry.map(favorite => (
            <ImageCard
              picture={favorite}
              key={favorite.id}
              isFavorite={true}
              makeUnfavorite={() => favoritesPageStore.makeUnfavorite(favorite)}
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
