import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { connect } from "react-redux";
import { signup } from "../actions/auth";
import axios from "axios";

const Signup = ({ signup, isAuthenticated }) => {
  const [accountCreated, setAccountCreated] = useState(false);
  const [FormData, setFormData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    re_password: "",
  });
  const { first_name, last_name, email, password, re_password } = FormData;

  const onChange = (e) =>
    setFormData({ ...FormData, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    if (password === re_password) {
      signup(first_name, last_name, email, password, re_password);
      setAccountCreated(true);
    }
  };

  const continueWithGoogle = async () => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_API_URL}/auth/o/google-oauth2/?redirect_uri=http://127.0.0.1:8000`
      );
      window.location.replace(res.data.authorization_url);
    } catch (err) {}
  };

  if (accountCreated) {
    return <Navigate to="/login" />;
  }

  if (isAuthenticated) {
    return <Navigate to="/" />;
  }

  return (
    <div className="container mt-5">
      <h1 className="mb-4">Sign Up</h1>
      <form onSubmit={(e) => onSubmit(e)}>
        <div className="form-group">
          <input
            type="text"
            name="first_name"
            placeholder="Firstname"
            className="form-control mb-3"
            value={first_name}
            onChange={(e) => onChange(e)}
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            name="last_name"
            placeholder="Lastname"
            className="form-control mb-3"
            value={last_name}
            onChange={(e) => onChange(e)}
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="form-control mb-3"
            value={email}
            onChange={(e) => onChange(e)}
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="form-control mb-3"
            value={password}
            onChange={(e) => onChange(e)}
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            name="re_password"
            placeholder="Confirm Password"
            className="form-control mb-3"
            value={re_password}
            onChange={(e) => onChange(e)}
          />
        </div>
        <button className="btn-dark btn link-offset-3" type="submit">
          Sign Up
        </button>
      </form>{" "}
      <button
        className="btn btn-outline-dark mt-3"
        onClick={continueWithGoogle}
      >
        Continue With Google
      </button>{" "}
      <p className="mt-3 fw-bold">
        Already have an account ?{" "}
        <Link className="link-offset-3 text-decoration-none" to="/login">
          Login
        </Link>
      </p>
    </div>
  );
};
const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { signup })(Signup);
