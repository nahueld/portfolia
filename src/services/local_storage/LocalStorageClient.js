import * as _ from "lodash";

const localStorage = window.localStorage;

const LocalStorageClient = () => ({
  save: picture =>
    Promise.resolve(
      localStorage.setItem(`portfolia-${picture.id}`, JSON.stringify(picture))
    ),
  remove: pictureId =>
    Promise.resolve(localStorage.removeItem(`portfolia-${pictureId}`)),
  read: pictureId =>
    Promise.resolve(JSON.parse(localStorage.getItem(`portfolia-${pictureId}`))),
  readAll: () =>
    Promise.resolve(
      _(localStorage)
        .keys()
        .filter(k => _.startsWith(k, "portfolia"))
        .map(key => JSON.parse(localStorage.getItem(key)))
        .value()
    )
});

export default LocalStorageClient;
