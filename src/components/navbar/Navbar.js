import React from "react";
import { Link } from "react-router-dom";

const NavBar = props => (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
    <span className="navbar-brand">Portfolia</span>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav">
        <li className="nav-item">
          <Link className="nav-link" to="/">
            Search
          </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/favorites">
            Favorites
          </Link>
        </li>
      </ul>
    </div>
  </nav>
);

export default NavBar;
