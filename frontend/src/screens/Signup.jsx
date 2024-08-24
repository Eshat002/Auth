import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { connect } from "react-redux";
import { signup } from "../actions/auth";

const Signup = ({ signup, isAuthenticated }) => {
  const [accountCreated, setAccountCreated] = useState(false);
  const [FormData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    re_password: "",
  });
  const { name, email, password, re_password } = FormData;
  const onChange = (e) =>
    setFormData({ ...FormData, [e.target.name]: e.target.value });
  const onSubmit = (e) => {
    e.preventDefault();
    if (password === re_password) {
      signup(name, email, password, re_password);
      setAccountCreated(true);
    }
  };

  if (accountCreated) {
    return <Navigate to="/login" />;
  }

  if (isAuthenticated) {
    return <Navigate to="/" />;
  }

  return (
    <div className="container mt-5">
      <h1>Sign Up</h1>

      <form onSubmit={(e) => onSubmit(e)}>
        <div className="form-group">
          <input
            type="text"
            name="name"
            placeholder="Name"
            className="form-control mb-3"
            value={name}
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
        <button className="btn btn-dark" type="submit">
          Sign Up
        </button>
        <p className="mt-3">
          Already have an account ?{" "}
          <Link className="link-dark link-offset-2" to="/login">
            Login
          </Link>
        </p>
      </form>
    </div>
  );
};
const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { signup })(Signup);
