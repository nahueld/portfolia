import _ from "lodash";

const LocalStorageClient = localStorage => ({
  save: picture =>
    localStorage.setItem(`portfolia-${picture.id}`, JSON.stringify(picture)),
  remove: pictureId => localStorage.removeItem(`portfolia-${pictureId}`),
  read: pictureId => JSON.parse(localStorage.getItem(`portfolia-${pictureId}`)),
  readAll: () =>
    _(localStorage)
      .keys()
      .filter(k => _.startsWith(k, "portfolia"))
      .map(key => JSON.parse(localStorage.getItem(key)))
      .value()
});

export default LocalStorageClient;
