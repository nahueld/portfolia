import {
  makeFavorite,
  makeUnfavorite,
  listPictures,
  setSelectedPicture,
  getSelectedPicture,
  listFavorites
} from "./CommonActions";

describe("CommonActions", () => {
  let rootStore, localStorageClient;

  beforeEach(() => {
    rootStore = {
      picturesStore: {
        makeFavorite: sinon.spy(),
        makeUnfavorite: sinon.spy()
      },
      favoritesStore: {
        addFavorite: sinon.spy(),
        removeFavorite: sinon.spy()
      }
    };
    localStorageClient = {
      save: sinon.spy(),
      remove: sinon.spy()
    };
  });

  it("makeFavorite", () => {
    makeFavorite(rootStore, localStorageClient)({ id: 1 });
    expect(rootStore.picturesStore.makeFavorite.args[0]).to.be.eqls([1]);
    expect(rootStore.favoritesStore.addFavorite.args[0]).to.be.eqls([
      { id: 1 }
    ]);
    expect(localStorageClient.save.args[0]).to.be.eqls([{ id: 1 }]);
  });

  it("makeUnfavorite", () => {
    makeUnfavorite(rootStore, localStorageClient)({ id: 1 });
    expect(rootStore.picturesStore.makeUnfavorite.args[0]).to.be.eqls([1]);
    expect(rootStore.favoritesStore.removeFavorite.args[0]).to.be.eqls([
      { id: 1 }
    ]);
    expect(localStorageClient.remove.args[0]).to.be.eqls([1]);
  });
});
