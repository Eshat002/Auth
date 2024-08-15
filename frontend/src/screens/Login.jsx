import React, { useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

const Login = () => {
  const [FormData, setFormData] = useState({
    email: "",
    password: "",
  });
  const { email, password } = FormData;
  const onChange = (e) =>
    setFormData({ ...FormData, [e.target.name]: e.target.value });
  const onSubmit = (e) => {
    e.preventDefault();
  };
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
        <button className="btn btn-primary" type="submit">
          Login
        </button>
        <p className="mt-3">
          Don't have a button?<Link to="/signup">Sign Up</Link>
        </p>
        <p className="mt-3">
          Forgot password?<Link to="/reset-password">Reset Password</Link>
        </p>
      </form>
    </div>
  );
};
// const mapStatetoProps =()=> state({

// })
export default connect(null, {})(Login);
// export default Login;
