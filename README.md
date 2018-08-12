# Porfolia

A react-mobx application to search and save your favorite images (powered by Unsplash).

[Live version](https://trusting-cray-107731.netlify.com)

## Requirements

- Should have 3 pages: "Search", "Saved" and "Details".
  - "Search" appears with a search bar at the top.
    - You should be able to enter text and get whatever results that the unsplash search returns to you.
    - You can restrict the list to 30 items max (lazy loading would be nice but not required).
    - Each item should display:
      - image thumbnail.
      - the users name.
      - image description if it exists.
      - there should be an option to save any item.
  - The "Saved" tab should display any images that the user has chosen to save (localStorage/sessionStorage).
    - A user should be able to remove items form the saved list.
  - The "Detail" screen that contains a larger version of the image and some extra associated information. You can chose what info to display yourself.

## Approach

- Used `create-react-app`
- Added `mobx mobx-react react-app-rewire-mobx`
- Followed [instructions](https://github.com/timarney/react-app-rewired#how-to-rewire-your-create-react-app-project) to rewire `create-react-app` to be able to use annotations.
- CI with [Netlify](https://www.netlify.com/).

## Instructions

- Run `npm install`
- Run `npm start`
- To run tests `npm test`

## Notes

- I'm using the unsplash library for simplicity however `npm audit` shows a high risk vulnerability, this lib should not be used in prod.
- I'm holding state in mobx, navigation does not hold any state.
- Local Storage is used to persist favorites.
- Navigation is not working properly, for example:
  - URL parameters are not read when loading a page.
  - As navigation was not a explicit requirement I assument that user can navigate by using links provided in the app.
