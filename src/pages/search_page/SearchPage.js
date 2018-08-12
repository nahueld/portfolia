import React from "react";
import { observer, inject } from "mobx-react";
import SearchBar from "../../components/search_bar/SearchBar";
import ImageCard from "../../components/image_card/ImageCard";
import Pagination from "../../components/pagination/Pagination";
import EmptyState from "../../components/empty_state/EmptyState";
import ErrorState from "../../components/error_state/ErrorState";

const styles = {
  searchBarContainer: {
    padding: "2em 0 2em 0"
  },
  paginationContainer: {
    paddingTop: 30
  }
};

const SearchPage = inject("picturesStore")(
  observer(({ picturesStore, history }) => {
    const pagination = (
      <Pagination
        totalPages={picturesStore.totalPages}
        currentPage={picturesStore.currentPage}
        onPrevClick={() => picturesStore.loadPicturesOnPreviousPage()}
        onPageClick={idx => picturesStore.loadPictures(idx)}
        onNextClick={() => picturesStore.loadPicturesOnNextPage()}
      />
    );

    const errorState = <ErrorState errors={picturesStore.errors} />;

    const emptyState = (
      <EmptyState
        title="No search results."
        description="Perform a new search using the search bar."
      />
    );

    const searchBar = (
      <SearchBar
        query={picturesStore.search}
        onChange={event => (picturesStore.search = event.target.value)}
        onSearch={() => picturesStore.loadPictures()}
        isLoading={picturesStore.isLoading}
      />
    );

    const imageCard = picture => (
      <ImageCard
        picture={picture}
        key={picture.id}
        isFavorite={picture.isFavorite}
        makeFavorite={() =>
          !picture.error && picturesStore.makeFavorite(picture)
        }
        makeUnfavorite={() => picturesStore.makeUnfavorite(picture)}
        moreDetails={() => {
          picturesStore.selectedPicture = picture;
          history.push("/details");
        }}
      />
    );

    return (
      <div className="container h-100">
        <div className="d-flex flex-column">
          <div style={styles.searchBarContainer}>{searchBar}</div>
          <div className="d-flex flex-wrap justify-content-center">
            {picturesStore.errors.length > 0
              ? errorState
              : picturesStore.picturesRegistry.length === 0
                ? emptyState
                : picturesStore.picturesRegistry.map(picture =>
                    imageCard(picture)
                  )}
          </div>
          <div
            className="d-flex justify-content-center"
            style={styles.paginationContainer}
          >
            {pagination}
          </div>
        </div>
      </div>
    );
  })
);

export default SearchPage;
