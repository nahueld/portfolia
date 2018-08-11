import React from "react";
import NavBar from "./components/navbar/Navbar";
import { BrowserRouter as Router, Route } from "react-router-dom";
import SearchPage from "./pages/search_page/SearchPage";
import FavoritesPage from "./pages/favorites_page/FavoritesPage";
import DetailsPage from "./pages/details_page/DetailsPage";
import { Provider } from "mobx-react";
import RootStore from "./store/RootStore";

const App = props => (
  <Provider {...new RootStore()}>
    <Router>
      <div>
        <NavBar />
        <Route exact path="/" component={SearchPage} />
        <Route path="/favorites" component={FavoritesPage} />
        <Route path="/details/:id" component={DetailsPage} />
      </div>
    </Router>
  </Provider>
);

export default App;
