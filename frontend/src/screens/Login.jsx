import React, { useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { connect } from "react-redux";
import { login } from "../actions/auth";
import axios from "axios";

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

  const continueWithGoogle = async () => {
    try {
      const res = await axios.get(
        `${process.env.REACT_APP_API_URL}/auth/o/google-oauth2/?redirect_uri=http://127.0.0.1:8000`
      );
      window.location.replace(res.data.authorization_url);
    } catch (err) {}
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
      </form>
      <br />
      <button
        className="btn btn-outline-dark mt-3"
        onClick={continueWithGoogle}
      >
        Continue With Google
      </button>
      <p className="mt-3 fw-bold">
        Don't have a button?{" "}
        <Link className="link-offset-2 text-decoration-none" to="/signup">
          Sign Up
        </Link>
      </p>
      <p className="mt-3 fw-bold">
        Forgot password?{" "}
        <Link
          className="link-offset-2 text-decoration-none"
          to="/reset-password"
        >
          Reset Password
        </Link>
      </p>
    </div>
  );
};
const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { login })(Login);
// export default Login;
