import PicturesStore from "./model_stores/PicturesStore";
import FavoritesStore from "./model_stores/FavoritesStore";
import SearchPageStore from "./ui_stores/SearchPageStore";
import FavoritesPageStore from "./ui_stores/FavoritesPageStore";
import UnsplashClient from "../services/unsplash/UnsplashClient";
import LocalStorageClient from "../services/local_storage/LocalStorageClient";
import DetailsPageStore from "./ui_stores/DetailsPageStore";

class RootStore {
  constructor() {
    this.favoritesStore = new FavoritesStore(this);
    this.picturesStore = new PicturesStore(this);
    this.searchPageStore = new SearchPageStore(
      this,
      UnsplashClient(),
      LocalStorageClient()
    );
    this.favoritesPageStore = new FavoritesPageStore(
      this,
      null,
      LocalStorageClient()
    );
    this.detailsPageStore = new DetailsPageStore(
      this,
      null,
      LocalStorageClient()
    );
  }
}

export default RootStore;
