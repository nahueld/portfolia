import { observable, action } from "mobx";
import Unsplash, { toJson } from "unsplash-js";

const unsplash = new Unsplash({
  applicationId:
    "e70d0a75a78f9c17905101410d5b73591f1aa11f82b5207e7ed3da9ef0cab584"
});

const LIMIT = 30;

class PictureStore {
  @observable
  isLoading = false;

  @observable
  page = 0;

  @observable
  totalPagesCount = 0;

  @observable
  picturesRegistry = observable.map();

  @action
  loadPictures() {
    unsplash.search
      .photos("nature", 1, LIMIT)
      .then(toJson)
      .then(f => console.log(JSON.stringify(f)));
  }
}

export default PictureStore;
