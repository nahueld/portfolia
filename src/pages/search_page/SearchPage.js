import React from "react";
import { observer, inject } from "mobx-react";
import SearchBar from "../../components/search_bar/SearchBar";
import ImageCard from "../../components/image_card/ImageCard";

const styles = {
  searchBarContainer: {
    padding: "2em 0 2em 0"
  }
};

const SearchPage = inject("picturesStore")(
  observer(({ picturesStore }) => (
    <div className="container h-100">
      <div className="d-flex flex-column">
        <div style={styles.searchBarContainer}>
          <SearchBar onSearch={() => picturesStore.loadPictures()} />
        </div>
        <div className="d-flex flex-wrap justify-content-center">
          <ImageCard id="1" />
          <ImageCard />
          <ImageCard />
        </div>
      </div>
    </div>
  ))
);

export default SearchPage;
