import UnsplashClient from "./UnsplashClient";

describe("UnsplashClient", () => {
  let unsplash;

  it("responds 200", done => {
    unsplash = {
      search: {
        photos: () =>
          Promise.resolve({ status: 200, json: () => ({ some: "property" }) })
      }
    };

    UnsplashClient(unsplash)
      .search("something", 1)
      .then(res => {
        expect(res).to.be.eqls({ some: "property" });
        done();
      });
  });

  it("responds 500", done => {
    unsplash = {
      search: {
        photos: () => Promise.resolve({ status: 500 })
      }
    };

    UnsplashClient(unsplash)
      .search("something", 1)
      .then(() => done.fail(new "The client didn't fail as expected."()))
      .catch(res => {
        expect(res).to.be.eqls({ errors: ["Service Unavailable (500)"] });
        done();
      });
  });

  it("responds 200 but has errors", done => {
    unsplash = {
      search: {
        photos: () =>
          Promise.resolve({
            status: 200,
            json: () => ({ errors: ["some error"] })
          })
      }
    };

    UnsplashClient(unsplash)
      .search("something", 1)
      .then(() => done.fail(new "The client didn't fail as expected."()))
      .catch(res => {
        expect(res).to.be.eqls({ errors: ["some error"] });
        done();
      });
  });
});
