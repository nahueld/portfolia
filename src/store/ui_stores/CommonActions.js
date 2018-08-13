import { action } from "mobx";

const listFavorites = rootStore => () =>
  rootStore.favoritesStore.favoritesRegistry;

const makeFavorite = (rootStore, localStorageClient) =>
  action(picture => {
    rootStore.picturesStore.makeFavorite(picture.id);
    rootStore.favoritesStore.addFavorite(picture);
    localStorageClient.save(picture);
  });

const makeUnfavorite = (rootStore, localStorageClient) =>
  action(picture => {
    rootStore.picturesStore.makeUnfavorite(picture.id);
    rootStore.favoritesStore.removeFavorite(picture);
    localStorageClient.remove(picture.id);
  });

const listPictures = rootStore => () =>
  rootStore.picturesStore.picturesRegistry;

const getSelectedPicture = rootStore => () =>
  rootStore.picturesStore.selectedPicture;

const setSelectedPicture = rootStore =>
  action(picture => (rootStore.picturesStore.selectedPicture = picture));

export {
  makeFavorite,
  makeUnfavorite,
  listPictures,
  setSelectedPicture,
  getSelectedPicture,
  listFavorites
};
