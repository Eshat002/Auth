import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../actions/auth";

const Home = ({ isAuthenticated, logout }) => {
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
export default connect(mapStateToProps, { logout })(Home);
