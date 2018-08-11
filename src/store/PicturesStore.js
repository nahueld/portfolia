import { observable, action, computed, toJS } from "mobx";
import * as _ from "lodash";

class PictureStore {
  rootStore;
  transportLayer;

  @observable
  isLoading = false;

  @observable
  currentPage = 0;

  @observable
  totalPages = 0;

  @observable
  search = "";

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
  loadPictures(page = 1) {
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
              .value()
          );
          this.currentPage = page;
          this.totalPages = total_pages;
        })
      )
      .finally(action(() => (this.isLoading = false)));
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
}

export default PictureStore;
