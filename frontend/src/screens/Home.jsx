import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
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
        <Link className="btn btn-dark btn-lg" to="/login" role="button">
          Log In
        </Link>
      </div>
    </div>
  );
};

export default Home;
