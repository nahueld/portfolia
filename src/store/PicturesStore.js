import { observable, action, computed, toJS } from "mobx";
import * as _ from "lodash";

class PictureStore {
  rootStore;
  transportLayer;

  @observable
  isLoading = false;

  @observable
  page = 0;

  @observable
  totalPagesCount = 0;

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
  loadPictures() {
    this.isLoading = true;
    return this.transportLayer
      .search(this.search, 1)
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
          this.totalPagesCount = total_pages;
        })
      )
      .finally(action(() => (this.isLoading = false)));
  }

  @action
  loadPicturesOnPage(pageNumber) {
    return this.transportLayer.search(this.search, pageNumber);
  }

  @action
  loadPicturesOnNextPage() {
    this.page++;
    return this.loadPicturesOnPage(this.page);
  }
}

export default PictureStore;
