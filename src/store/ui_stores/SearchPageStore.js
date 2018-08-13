import { observable, action } from "mobx";
import * as _ from "lodash";

class SearchPageStore {
  rootStore;
  transportLayer;
  localStorageClient;

  @observable
  isLoading = false;

  @observable
  currentPage = 1;

  @observable
  totalPages = 0;

  @observable
  search = "";

  @observable
  errors = observable.array();

  constructor(rootStore, transportLayer, localStorageClient) {
    this.rootStore = rootStore;
    this.transportLayer = transportLayer;
    this.localStorageClient = localStorageClient;
  }

  @action
  loadPictures(page = this.currentPage) {
    this.isLoading = true;
    this.transportLayer
      .search(this.search, page)
      .then(
        action(({ results, total_pages }) => {
          let pictures = _(results)
            .map(({ id, description, urls, user }) => ({
              id,
              description,
              urls,
              user,
              isFavorite: this.isItFavorite(id),
              error: false
            }))
            .value();
          this.rootStore.picturesStore.picturesRegistry.replace(pictures);
          this.currentPage = page;
          this.totalPages = total_pages;
          this.errors.replace([]);
        }),
        action(({ errors }) => {
          this.rootStore.picturesStore.picturesRegistry.replace([]);
          this.currentPage = 1;
          this.totalPages = 0;
          this.errors.replace(errors);
        })
      )
      .finally(action(() => (this.isLoading = false)));
  }

  @action
  loadPicturesOnPreviousPage() {
    this.currentPage = this.currentPage - 1 >= 1 ? this.currentPage - 1 : 1;
    this.loadPictures(this.currentPage);
  }

  @action
  loadPicturesOnNextPage() {
    this.currentPage =
      this.currentPage + 1 <= this.totalPages
        ? this.currentPage + 1
        : this.totalPages;
    this.loadPictures(this.currentPage);
  }

  @action
  makeFavorite(picture) {
    this.rootStore.picturesStore.makeFavorite(picture.id);
    this.rootStore.favoritesStore.addFavorite(picture);
    this.localStorageClient.save(picture);
  }

  @action
  makeUnfavorite(picture) {
    this.rootStore.picturesStore.makeUnfavorite(picture.id);
    this.rootStore.favoritesStore.removeFavorite(picture);
    this.localStorageClient.remove(picture.id);
  }

  isItFavorite(pictureId) {
    return (
      _(this.localStorageClient.readAll())
        .filter(f => f.id === pictureId)
        .first() !== undefined
    );
  }
}

export default SearchPageStore;
