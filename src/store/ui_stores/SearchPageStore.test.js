import SearchPageStore from "./SearchPageStore";
import { observable } from "mobx";

describe("SearchPageStore", () => {
  let rootStore, transportLayer, localStorageClient;

  it("loadPictures", done => {
    rootStore = {
      picturesStore: {
        picturesRegistry: observable.array()
      }
    };
    localStorageClient = {
      readAll: () => [{ id: "1" }]
    };
    transportLayer = {
      search: () =>
        Promise.resolve({
          results: [
            {
              id: "1",
              description: "desc",
              urls: {
                thumb: "thumb",
                regular: "regular"
              },
              user: {
                name: "john",
                bio: "some bio"
              }
            },
            {
              id: "2",
              description: "desc 2",
              urls: {
                thumb: "thumb 2",
                regular: "regular 2"
              },
              user: {
                name: "jane",
                bio: "some bio 2"
              }
            }
          ],
          total_pages: 10
        })
    };
    let searchPageStore = new SearchPageStore(
      rootStore,
      transportLayer,
      localStorageClient
    );
    searchPageStore.loadPictures("1").then(() => {
      expect(rootStore.picturesStore.picturesRegistry[0]).to.be.eqls({
        id: "1",
        description: "desc",
        urls: {
          thumb: "thumb",
          regular: "regular"
        },
        user: {
          name: "john",
          bio: "some bio"
        },
        isFavorite: true,
        error: false
      });

      expect(rootStore.picturesStore.picturesRegistry[1]).to.be.eqls({
        id: "2",
        description: "desc 2",
        urls: {
          thumb: "thumb 2",
          regular: "regular 2"
        },
        user: {
          name: "jane",
          bio: "some bio 2"
        },
        isFavorite: false,
        error: false
      });

      expect(searchPageStore.currentPage).to.be.eqls(1);
      expect(searchPageStore.totalPages).to.be.eqls(10);
      expect(searchPageStore.errors).to.be.eqls([]);
      expect(searchPageStore.isLoading).to.be.eqls(false);
      done();
    });
  });

  it("loadPictures with error", done => {
    rootStore = {
      picturesStore: {
        picturesRegistry: observable.array()
      }
    };
    localStorageClient = {
      readAll: () => [{ id: "1" }]
    };
    transportLayer = {
      search: () =>
        Promise.reject({
          errors: ["Some error"]
        })
    };
    let searchPageStore = new SearchPageStore(
      rootStore,
      transportLayer,
      localStorageClient
    );
    searchPageStore.loadPictures("1").then(() => {
      expect(rootStore.picturesStore.picturesRegistry).to.be.eqls([]);
      expect(searchPageStore.currentPage).to.be.eqls(1);
      expect(searchPageStore.totalPages).to.be.eqls(0);
      expect(searchPageStore.errors).to.be.eqls(["Some error"]);
      expect(searchPageStore.isLoading).to.be.eqls(false);
      done();
    });
  });

  it("loadPicturesOnPreviousPage when current page is 1", () => {
    let searchPageStore = new SearchPageStore({}, {}, {});
    searchPageStore.loadPictures = () => {};
    searchPageStore.currentPage = 1;
    searchPageStore.loadPicturesOnPreviousPage();
    expect(searchPageStore.currentPage).to.be.eqls(1);
  });

  it("loadPicturesOnPreviousPage when current page is 2", () => {
    let searchPageStore = new SearchPageStore({}, {}, {});
    searchPageStore.loadPictures = () => {};
    searchPageStore.currentPage = 2;
    searchPageStore.loadPicturesOnPreviousPage();
    expect(searchPageStore.currentPage).to.be.eqls(1);
  });

  it("loadPicturesONextPage when current page is 1 and total pages 2", () => {
    let searchPageStore = new SearchPageStore({}, {}, {});
    searchPageStore.loadPictures = () => {};
    searchPageStore.currentPage = 1;
    searchPageStore.totalPages = 2;
    searchPageStore.loadPicturesOnNextPage();
    expect(searchPageStore.currentPage).to.be.eqls(2);
  });

  it("loadPicturesONextPage when current page is 2 and total pages 2", () => {
    let searchPageStore = new SearchPageStore({}, {}, {});
    searchPageStore.loadPictures = () => {};
    searchPageStore.currentPage = 2;
    searchPageStore.totalPages = 2;
    searchPageStore.loadPicturesOnNextPage();
    expect(searchPageStore.currentPage).to.be.eqls(2);
  });
});
