import React from "react";
import NavBar from "./components/navbar/Navbar";
import { BrowserRouter as Router, Route } from "react-router-dom";
import SearchPage from "./pages/search_page/SearchPage";
import FavoritesPage from "./pages/favorites_page/FavoritesPage";
import DetailsPage from "./pages/details_page/DetailsPage";

const App = props => (
  <Router>
    <div>
      <NavBar />
      <Route exact path="/" component={SearchPage} />
      <Route path="/favorited" component={FavoritesPage} />
      <Route path="/details/:id" component={DetailsPage} />
    </div>
  </Router>
);

export default App;
