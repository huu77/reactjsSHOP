import React from "react";
import {NavLink} from "react-router-dom"
const NavBar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow-sm py-3">
        <div className="container">
          <NavLink className="navbar-brand fw-bold fs-4 w-25" to="/">
            IT HOUSE SHOP
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0 ">
              <li className="nav-item">
                <NavLink
                  className="nav-link active text-center fs-5 fw-900 link-secondary  menu-item  "
                  aria-current="page"
                  to="/"
                >
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link text-center fs-5 fw-900 link-secondary menu-item"
                  to="/products"
                >
                  Products
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link text-center fs-5 fw-900 link-secondary menu-item"
                  to="/about"
                >
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink
                  className="nav-link text-center fs-5 fw-900 link-secondary menu-item"
                  to="/contact"
                >
                  Contact
                </NavLink>
              </li>
            </ul>
            <div className="d-flex mx-2 group_btn">
              <NavLink className="btn btn-outline-dark d-flex " to="/login">
                <i className="fa fa-sign-in me-2 w-50 my-auto"></i>
                Login
              </NavLink>
              <NavLink className="btn btn-outline-dark d-flex mx-3" to="/register">
                <i className="fa fa-user-plus me-2 w-50 my-auto "></i>
                Register
              </NavLink>
              <NavLink className="btn btn-outline-dark d-flex" to="/carts">
                <i className="fa fa-shopping-cart me-2 w-50 my-auto"></i>
                Carts(0)
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
