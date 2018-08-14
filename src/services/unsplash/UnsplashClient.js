import { toJson } from "unsplash-js";

const LIMIT = 30;

const UnsplashClient = unsplash => ({
  search: (query, page) => {
    return new Promise((resolve, reject) => {
      unsplash.search.photos(query, page, LIMIT).then(res => {
        let response =
          res.status === 200
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
