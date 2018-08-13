import Unsplash, { toJson } from "unsplash-js";

const unsplash = new Unsplash({
  applicationId:
    "e70d0a75a78f9c17905101410d5b73591f1aa11f82b5207e7ed3da9ef0cab584"
});

const LIMIT = 30;

const UnsplashClient = () => ({
  search: (query, page) => {
    return new Promise((resolve, reject) => {
      unsplash.search.photos(query, page, LIMIT).then(res => {
        let response =
          res.status == 200
            ? toJson(res)
            : { errors: [`Service Unavailable (${res.status})`] };
        return response.hasOwnProperty("errors")
          ? reject(response)
          : resolve(response);
      });
    });
  }
});

export default UnsplashClient;
