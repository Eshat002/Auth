import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { connect } from "react-redux";
import { login } from "../actions/auth";

const Login = ({ login, isAuthenticated }) => {
  const [FormData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { email, password } = FormData;
  const onChange = (e) =>
    setFormData({ ...FormData, [e.target.name]: e.target.value });
  const onSubmit = (e) => {
    e.preventDefault();
    login(email, password);
  };

  if (isAuthenticated) {
    return <Navigate to="/" />;
  }
  return (
    <div className="container mt-5">
      <h1>Sign In</h1>
      <p>Sign into your accounts</p>
      <form onSubmit={(e) => onSubmit(e)}>
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
        <button className="btn btn-dark" type="submit">
          Sign In
        </button>
        <p className="mt-3">
          Don't have a button?{" "}
          <Link className="link-dark link-offset-2" to="/signup">
            Sign Up
          </Link>
        </p>
        <p className="mt-3">
          Forgot password?{" "}
          <Link className="link-dark link-offset-2" to="/reset-password">
            Reset Password
          </Link>
        </p>
      </form>
    </div>
  );
};
const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { login })(Login);
// export default Login;
