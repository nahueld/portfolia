import PictureStore from "./PicturesStore";
import UnsplashClient from "../services/unsplash/UnsplashClient";
import FavoritesStore from "./FavoritesStore";
import LocalStorageClient from "../services/local_storage/LocalStorageClient";

class RootStore {
  constructor() {
    this.picturesStore = new PictureStore(this, UnsplashClient());
    this.favoritesStore = new FavoritesStore(this, LocalStorageClient());
  }
}

export default RootStore;
