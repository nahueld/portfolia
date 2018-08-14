import PicturesStore from "./PicturesStore";

describe("PicturesStore", () => {
  let store;

  beforeEach(() => {
    store = new PicturesStore();
    store.picturesRegistry.push({ id: 1, isFavorite: false });
    store.picturesRegistry.push({ id: 2, isFavorite: true });
  });

  it("makes a picture favorite", () => {
    store.makeFavorite(1);
    expect(store.picturesRegistry[0]).to.be.eqls({ id: 1, isFavorite: true });
  });

  it("removes a favorite", () => {
    store.makeUnfavorite(2);
    expect(store.picturesRegistry[1]).to.be.eqls({ id: 2, isFavorite: false });
  });
});
