import { observable, action, computed, toJS } from "mobx";
import * as _ from "lodash";

class PictureStore {
  rootStore;
  transportLayer;

  @observable
  isLoading = false;

  @observable
  currentPage = 1;

  @observable
  totalPages = 0;

  @observable
  search = "";

  @observable
  selectedPicture = observable.object();

  @observable
  picturesRegistry = observable.array();

  constructor(rootStore, transportLayer) {
    this.rootStore = rootStore;
    this.transportLayer = transportLayer;
  }

  @computed
  get pictures() {
    return toJS(this.picturesRegistry);
  }

  @action
  loadPictures(page = this.currentPage) {
    this.isLoading = true;
    return this.transportLayer
      .search(this.search, page)
      .then(
        action(({ results, total_pages }) => {
          this.picturesRegistry.replace(
            _(results)
              .map(({ id, description, urls, user }) => ({
                id,
                description,
                urls,
                user
              }))
              .map(picture => ({
                ...picture,
                isFavorite: this.isItFavorite(picture)
              }))
              .value()
          );
          this.currentPage = page;
          this.totalPages = total_pages;
        })
      )
      .finally(action(() => (this.isLoading = false)));
  }

  @action
  makeFavorite(picture) {
    _(this.picturesRegistry).forEach(p => {
      if (p.id === picture.id) p.isFavorite = true;
    });
    return this.rootStore.favoritesStore.saveFavorite(picture);
  }

  @action
  makeUnfavorite(picture) {
    _(this.picturesRegistry).forEach(p => {
      if (p.id === picture.id) p.isFavorite = false;
    });
    return this.rootStore.favoritesStore.removeFavorite(picture);
  }

  @action
  loadPicturesOnPreviousPage() {
    this.currentPage = this.currentPage - 1 >= 1 ? this.currentPage - 1 : 1;
    return this.loadPictures(this.currentPage);
  }

  @action
  loadPicturesOnNextPage() {
    this.currentPage =
      this.currentPage + 1 <= this.totalPages
        ? this.currentPage + 1
        : this.totalPages;
    return this.loadPictures(this.currentPage);
  }

  isItFavorite(picture) {
    return (
      _(this.rootStore.favoritesStore.favorites)
        .filter(f => f.id === picture.id)
        .first() !== undefined
    );
  }
}

export default PictureStore;
