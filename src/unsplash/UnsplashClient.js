import Unsplash, { toJson } from "unsplash-js";

const unsplash = new Unsplash({
  applicationId:
    "e70d0a75a78f9c17905101410d5b73591f1aa11f82b5207e7ed3da9ef0cab584"
});

const LIMIT = 1;

const UnsplashClient = () => ({
  search: (query, page) =>
    unsplash.search.photos(query, page, LIMIT).then(toJson)
});

export default UnsplashClient;
