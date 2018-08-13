import { observable, action } from "mobx";
import {
  makeFavorite,
  makeUnfavorite,
  setSelectedPicture,
  listPictures
} from "./CommonActions";
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
    this.makeFavorite = makeFavorite(rootStore, localStorageClient);
    this.makeUnfavorite = makeUnfavorite(rootStore, localStorageClient);
    this.setSelectedPicture = setSelectedPicture(rootStore);
    this.listPictures = listPictures(rootStore);
  }

  @action
  loadPictures(page = this.currentPage) {
    this.isLoading = true;
    this.transportLayer
      .search(this.search, page)
      .then(
        action(({ results, total_pages }) => {
          let pictures = _(results)
            .map(result => this.convertResultToPicture(result))
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

  isItFavorite(pictureId) {
    return (
      _(this.localStorageClient.readAll())
        .filter(f => f.id === pictureId)
        .first() !== undefined
    );
  }

  convertResultToPicture({ id, description, urls, user }) {
    return {
      id,
      description,
      urls,
      user,
      isFavorite: this.isItFavorite(id),
      error: false
    };
  }
}

export default SearchPageStore;
