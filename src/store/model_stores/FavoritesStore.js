import { observable, action } from "mobx";

class FavoritesStore {
  @observable
  favoritesRegistry = observable.array();

  @action
  addFavorite(favorite) {
    this.favoritesRegistry.replace(this.favoritesRegistry.concat([favorite]));
  }

  @action
  removeFavorite(favorite) {
    this.favoritesRegistry.replace(
      this.favoritesRegistry.filter(f => f.id !== favorite.id)
    );
  }
}

export default FavoritesStore;
