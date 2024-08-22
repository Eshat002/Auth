import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import { connect } from "react-redux";
import { password_reset } from "../actions/auth";

const ResetPassword = ({ password_reset }) => {
  const [RequestSent, setRequestSent] = useState(false);
  const [FormData, setFormData] = useState({
    email: "",
  });
  const { email } = FormData;
  const onChange = (e) =>
    setFormData({ ...FormData, [e.target.name]: e.target.value });
  const onSubmit = (e) => {
    e.preventDefault();
    password_reset(email);
    setRequestSent(true);
  };

  if (RequestSent) {
    return <Navigate to="/" />;
  }
  return (
    <div className="container mt-5">
      <h1>Reset Your Password</h1>

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
        <button className="btn btn-dark" type="submit">
          Reset Password
        </button>
      </form>
    </div>
  );
};

export default connect(null, { password_reset })(ResetPassword);
