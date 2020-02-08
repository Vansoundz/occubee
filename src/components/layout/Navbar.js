import React, { useEffect, Fragment } from "react";
import { NavLink, Link } from "react-router-dom";
import M from "materialize-css";

const Navbar = () => {
  useEffect(() => {
    var elems = document.querySelectorAll(".sidenav");
    // eslint-disable-next-line no-unused-vars
    var instances = M.Sidenav.init(elems);
  });
  return (
    <Fragment>
      <div className="navbar-fixed">
        <nav className="green accent-4">
          <div className="nav-wrapper container">
            <Link exact="true" to="/" className="brand-logo">
              OccuBee
            </Link>
            <a href="#!" data-target="mobile" className="sidenav-trigger">
              <i className="material-icons">menu</i>
            </a>
            <ul className="right hide-on-med-and-down">
              <li>
                <NavLink exact={true} to="/">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  exact={true}
                  to={`/usr/${Math.floor(Math.random() * 100) + 1}`}
                >
                  Account
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <ul className="sidenav" id="mobile">
        <li>
          <NavLink exact={true} to="/" className="sidenav-close">
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            exact={true}
            to={`/usr/${Math.floor(Math.random() * 100) + 1}`}
            className="sidenav-close"
          >
            Account
          </NavLink>
        </li>
      </ul>
    </Fragment>
  );
};

export default Navbar;
