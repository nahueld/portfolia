import FavoritesStore from "./FavoritesStore";

describe("FavoritesStore", () => {
  let favoritesStore;

  beforeEach(() => {
    favoritesStore = new FavoritesStore();
  });

  it("adds a favorite", () => {
    favoritesStore.addFavorite({ id: 1 });
    expect(favoritesStore.favoritesRegistry[0]).to.be.eqls({ id: 1 });
  });

  it("removes a favorite", () => {
    favoritesStore.addFavorite({ id: 1 });
    favoritesStore.addFavorite({ id: 2 });

    favoritesStore.removeFavorite({ id: 1 });
    expect(favoritesStore.favoritesRegistry[0]).to.be.eqls({ id: 2 });
  });
});
