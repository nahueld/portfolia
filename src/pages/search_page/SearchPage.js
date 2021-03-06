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

const SearchPage = inject("searchPageStore")(
  observer(({ searchPageStore, history }) => {
    const pagination = (
      <Pagination
        totalPages={searchPageStore.totalPages}
        currentPage={searchPageStore.currentPage}
        isLoading={searchPageStore.isLoading}
        onPrevClick={() => searchPageStore.loadPicturesOnPreviousPage()}
        onPageClick={idx => searchPageStore.loadPictures(idx)}
        onNextClick={() => searchPageStore.loadPicturesOnNextPage()}
      />
    );

    const errorState = <ErrorState errors={searchPageStore.errors} />;

    const emptyState = (
      <EmptyState
        title="No search results."
        description="Perform a new search using the search bar."
      />
    );

    const searchBar = (
      <SearchBar
        query={searchPageStore.search}
        onChange={event => searchPageStore.setSearchQuery(event.target.value)}
        onSearch={() => searchPageStore.loadPictures()}
        isLoading={searchPageStore.isLoading}
      />
    );

    const imageCard = picture => (
      <ImageCard
        picture={picture}
        key={picture.id}
        isFavorite={picture.isFavorite}
        makeFavorite={() =>
          !picture.error && searchPageStore.makeFavorite(picture)
        }
        makeUnfavorite={() => searchPageStore.makeUnfavorite(picture)}
        moreDetails={() => {
          searchPageStore.setSelectedPicture(picture);
          history.push("/details");
        }}
      />
    );

    return (
      <div className="container h-100">
        <div className="d-flex flex-column">
          <div style={styles.searchBarContainer}>{searchBar}</div>
          <div className="d-flex flex-wrap justify-content-center">
            {searchPageStore.errors.length > 0
              ? errorState
              : searchPageStore.listPictures().length === 0
                ? emptyState
                : searchPageStore
                    .listPictures()
                    .map(picture => imageCard(picture))}
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
