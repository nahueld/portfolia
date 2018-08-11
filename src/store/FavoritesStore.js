import { observable, action, computed, toJS } from "mobx";

class FavoritesStore {
  rootStore;
  transportLayer;

  @observable
  favoritesRegistry = observable.array();

  constructor(rootStore, transportLayer) {
    this.rootStore = rootStore;
    this.transportLayer = transportLayer;
  }

  @computed
  get favorites() {
    return toJS(this.favoritesRegistry);
  }

  @action
  loadFavorites() {
    return this.transportLayer.readAll().then(
      action(results => {
        this.favoritesRegistry.replace(results);
      })
    );
  }

  @action
  saveFavorite(favorite) {
    return this.transportLayer
      .save(favorite)
      .then(() => this.transportLayer.readAll())
      .then(action(results => this.favoritesRegistry.replace(results)));
  }
}

export default FavoritesStore;
