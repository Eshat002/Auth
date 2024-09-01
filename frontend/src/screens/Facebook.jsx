import React, { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { connect } from "react-redux";
import { facebookAuthenticate } from "../actions/auth";
import queryString from "query-string";
import { logout } from "../actions/auth";

const Facebook = ({ facebookAuthenticate, isAuthenticated, logout }) => {
  let location = useLocation();

  useEffect(() => {
    const values = queryString.parse(location.search);
    const state = values.state ? values.state : null;
    const code = values.code ? values.code : null;

    if (state && code) {
      facebookAuthenticate(state, code);
    }
  }, [location]);

  return (
    <div className="home">
      <div className="bg-light p-5 rounded-lg m-3">
        <h1>Hello, Mars!</h1>
        <p className="lead">
          It's an authentication system built on top of React and Django REST
          Framework
        </p>
        <hr className="my-4" />
        <p>Click the Login button to proceed </p>
        {isAuthenticated ? (
          <Link className="btn btn-dark btn-lg" onClick={logout} type="button">
            Logout
          </Link>
        ) : (
          <Link className="btn btn-dark btn-lg" to="/login" role="button">
            Log In
          </Link>
        )}
      </div>
    </div>
  );
};
const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { facebookAuthenticate, logout })(
  Facebook
);
