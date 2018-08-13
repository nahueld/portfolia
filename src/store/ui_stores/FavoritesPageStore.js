import { action } from "mobx";
import {
  makeUnfavorite,
  setSelectedPicture,
  listFavorites
} from "./CommonActions";

class FavoritesPageStore {
  rootStore;
  transportLayer;
  localStorageClient;

  constructor(rootStore, transportLayer, localStorageClient) {
    this.rootStore = rootStore;
    this.transportLayer = transportLayer;
    this.localStorageClient = localStorageClient;
    this.makeUnfavorite = makeUnfavorite(rootStore, localStorageClient);
    this.setSelectedPicture = setSelectedPicture(rootStore);
    this.listFavorites = listFavorites(rootStore);
  }

  @action
  loadFavorites() {
    this.rootStore.favoritesStore.favoritesRegistry.replace(
      this.localStorageClient.readAll()
    );
  }
}

export default FavoritesPageStore;
