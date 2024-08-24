import React, { useState } from "react";
import { useParams, Navigate } from "react-router-dom";
import { connect } from "react-redux";
import { verify } from "../actions/auth";

const Activate = ({ verify }) => {
  const [verified, setVerified] = useState(false);
  const { uid, token } = useParams();

  const verify_account = () => {
    verify(uid, token);
    setVerified(true);
  };

  if (verified) {
    return <Navigate to="/" />;
  }

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-lg-2"></div>
        <div className="col-lg-8">
          <h2>Verify Account</h2>
          <button
            type="button"
            onClick={verify_account}
            className="btn btn-dark mt-4 btn-lg"
          >
            Verify
          </button>
        </div>
        <div className="col-lg-2"></div>
      </div>
    </div>
  );
};

export default connect(null, { verify })(Activate);
