import PictureStore from "./PicturesStore";
import UnsplashClient from "../unsplash/UnsplashClient";

class RootStore {
  constructor() {
    this.picturesStore = new PictureStore(this, UnsplashClient());
  }
}

export default RootStore;
