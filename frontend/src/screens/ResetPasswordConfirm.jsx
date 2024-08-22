import React, { useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import { connect } from "react-redux";
import { password_reset_confirm } from "../actions/auth";

const ResetPasswordConfirm = ({ password_reset_confirm }) => {
  const [RequestSent, setRequestSent] = useState(false);
  const [FormData, setFormData] = useState({
    new_password: "",
    re_new_password: "",
  });

  const onChange = (e) =>
    setFormData({ ...FormData, [e.target.name]: e.target.value });

  const { new_password, re_new_password } = FormData;
  const { uid, token } = useParams();

  const onSubmit = (e) => {
    e.preventDefault();
    password_reset_confirm(uid, token, new_password, re_new_password);
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
            type="password"
            name="new_password"
            placeholder="New Password"
            className="form-control mb-3"
            value={new_password}
            onChange={(e) => onChange(e)}
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            name="re_new_password"
            placeholder="Confirm New Password"
            className="form-control mb-3"
            value={re_new_password}
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

export default connect(null, { password_reset_confirm })(ResetPasswordConfirm);
