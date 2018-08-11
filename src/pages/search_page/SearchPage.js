import React from "react";
import { observer, inject } from "mobx-react";
import SearchBar from "../../components/search_bar/SearchBar";
import ImageCard from "../../components/image_card/ImageCard";
import Pagination from "../../components/pagination/Pagination";

const styles = {
  searchBarContainer: {
    padding: "2em 0 2em 0"
  },
  paginationContainer: {
    paddingTop: 30
  }
};

const SearchPage = inject("picturesStore")(
  observer(({ picturesStore }) => (
    <div className="container h-100">
      <div className="d-flex flex-column">
        <div style={styles.searchBarContainer}>
          <SearchBar
            onChange={event => (picturesStore.search = event.target.value)}
            onSearch={() => picturesStore.loadPictures()}
            isLoading={picturesStore.isLoading}
          />
        </div>
        <div className="d-flex flex-wrap justify-content-center">
          {picturesStore.pictures.map(picture => (
            <ImageCard
              picture={picture}
              key={picture.id}
              isFavorite={picture.isFavorite}
              makeFavorite={() => picturesStore.makeFavorite(picture)}
              makeUnfavorite={() => picturesStore.makeUnfavorite(picture)}
            />
          ))}
        </div>
        <div
          className="d-flex justify-content-center"
          style={styles.paginationContainer}
        >
          {picturesStore.currentPage > 0 && (
            <Pagination
              totalPages={picturesStore.totalPages}
              currentPage={picturesStore.currentPage}
              onPrevClick={() => picturesStore.loadPicturesOnPreviousPage()}
              onPageClick={idx => picturesStore.loadPictures(idx)}
              onNextClick={() => picturesStore.loadPicturesOnNextPage()}
            />
          )}
        </div>
      </div>
    </div>
  ))
);

export default SearchPage;
