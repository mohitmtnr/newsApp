import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../App.css";
import spinner from "../Ajax-loader.gif";
export default function Navbar() {
  const location = useLocation();
  const [activeLink, setActiveLink] = useState("");

  // Update the active link when the location changes
  React.useEffect(() => {
    setActiveLink(location.pathname);
  }, [location]);

  return (
    <nav className="navbar navbar-expand-lg  navbar-dark fixed-top bg-dark shadow p-1">
      <div className="container-fluid">
        <Link className="navbar-brand fw-bold" to="/">
          <i className="fa-solid fa-radio fa-xl"></i>
        </Link>
        <button
          className="navbar-toggler fs-6 my-2"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon fs-6"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 text-capitalize py-0">
            <li
              className={`nav-item text-center mx-2 ${
                activeLink === "/" ? " active-category" : ""
              }`}
            >
              <Link
                className="nav-link text-light"
                style={{}}
                aria-current="page"
                to="/"
              >
                General
              </Link>
            </li>
            <li
              className={`nav-item text-center mx-2 ${
                activeLink === "/business" ? " active-category" : ""
              }`}
            >
              <Link
                className="nav-link text-light "
                aria-current="page"
                to="/business"
              >
                business
              </Link>
            </li>
            <li
              className={`nav-item text-center mx-2 ${
                activeLink === "/entertainment" ? " active-category" : ""
              }`}
            >
              <Link
                className="nav-link text-light"
                aria-current="page"
                to="/entertainment"
              >
                entertainment
              </Link>
            </li>
            <li
              className={`nav-item text-center mx-2 ${
                activeLink === "/health" ? " active-category" : ""
              }`}
            >
              <Link
                className="nav-link text-light"
                aria-current="page"
                to="/health"
              >
                health
              </Link>
            </li>
            <li
              className={`nav-item text-center mx-2 ${
                activeLink === "/science" ? " active-category" : ""
              }`}
            >
              <Link
                className="nav-link text-light "
                aria-current="page"
                to="/science"
              >
                science
              </Link>
            </li>
            <li
              className={`nav-item text-center mx-2 ${
                activeLink === "/sports" ? " active-category" : ""
              }`}
            >
              <Link
                className="nav-link text-light"
                aria-current="page"
                to="/sports"
              >
                sports
              </Link>
            </li>
            <li
              className={`nav-item text-center mx-2 ${
                activeLink === "/technology" ? " active-category" : ""
              }`}
            >
              <Link
                className="nav-link text-light"
                aria-current="page"
                to="/technology"
              >
                technology
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export function NewsFooter() {
  return (
    <>
      <footer className="text-center my-5">
        <h4 className="my-5">
          <hr />
        </h4>
      </footer>
    </>
  );
}

export function Spinner() {
  return (
    <div
      className="container text-center"
      style={{ margin: "10em auto 5em auto" }}
    >
      <img src={spinner} alt="spinner" width="50em" height="50em" />
    </div>
  );
}

export function Alert(props) {
  return (
    <>
      <div
        className={`alert alert-${props.type} alert-dismissible fade show`}
        role="alert"
      >
        {props.closeButton && (
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="alert"
            aria-label="Close"
          ></button>
        )}
        <strong>{props.message}</strong> <br />
        Please try Again.
      </div>
    </>
  );
}
