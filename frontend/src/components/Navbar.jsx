import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../actions/auth";

const Navbar = ({ logout, isAuthenticated }) => {
  const [navigate, setNavigate] = useState(false);
  const guestLinks = () => (
    <>
      <li className="nav-item">
        <Link className="nav-link" to="/signup">
          Signup
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/login">
          Login
        </Link>
      </li>
    </>
  );

  const authLinks = () => (
    <li className="nav-item">
      <a className="nav-link" onClick={logout_user} href="#!">
        Logout
      </a>
    </li>
  );

  const logout_user = () => {
    logout();
    setNavigate(true);
  };

  return (
    <>
      <div className="nav-container">
        <nav
          className="navbar navbar-expand-lg bg-body-tertiary"
          data-bs-theme="dark"
        >
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              Navbar
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to="/">
                    Home
                  </Link>
                </li>
                {isAuthenticated ? authLinks() : guestLinks()}
              </ul>
            </div>
          </div>
        </nav>
      </div>
      {navigate ? <Navigate to="/" /> : <></>}
    </>
  );
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { logout })(Navbar);
