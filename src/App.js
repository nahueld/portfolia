import React from "react";
import NavBar from "./components/navbar/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SearchPage from "./pages/search_page/SearchPage";
import FavoritesPage from "./pages/favorites_page/FavoritesPage";
import DetailsPage from "./pages/details_page/DetailsPage";
import { Provider } from "mobx-react";
import RootStore from "./store/RootStore";

class App extends React.Component {
  stores = new RootStore();

  componentDidMount() {
    this.stores.favoritesStore.loadFavorites();
  }

  render() {
    return (
      <Provider {...this.stores}>
        <Router>
          <div>
            <NavBar />
            <Switch>
              <Route path="/search" component={SearchPage} />
              <Route path="/favorites" component={FavoritesPage} />
              <Route path="/details" component={DetailsPage} />
              <Route component={SearchPage} />
            </Switch>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
