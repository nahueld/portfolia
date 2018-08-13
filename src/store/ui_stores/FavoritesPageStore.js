import { action } from "mobx";

class FavoritesPageStore {
  rootStore;
  transportLayer;
  localStorageClient;

  constructor(rootStore, transportLayer, localStorageClient) {
    this.rootStore = rootStore;
    this.transportLayer = transportLayer;
    this.localStorageClient = localStorageClient;
  }

  @action
  loadFavorites() {
    this.rootStore.favoritesStore.favoritesRegistry.replace(
      this.localStorageClient.readAll()
    );
  }

  @action
  makeUnfavorite(favorite) {
    this.rootStore.picturesStore.makeUnfavorite(favorite.id);
    this.rootStore.favoritesStore.removeFavorite(favorite);
    this.localStorageClient.remove(favorite.id);
  }
}

export default FavoritesPageStore;