import React, { useState } from "react";
import { FiArrowLeft, FiEyeOff } from "react-icons/fi";
import VerificationInput from "react-verification-input";

const ResetPasswordForm = ({ changeView }) => {
  const backToLogin = () => {
    changeView(1);
  };

  return (
    <div className="login-form">
      <h1>Password Reset</h1>

      <div className="login-input-container">
        <label htmlFor="code">Reset Code</label>
        <input
          type="password"
          name="code"
          placeholder="• • • • • • •
                •"
        />
      </div>

      <div className="login-input-container">
        <button className="primary-btn">Reset Password</button>
        <button className="transparent-btn" onClick={backToLogin}>
          Cancel
        </button>
      </div>
    </div>
  );
};

export default ResetPasswordForm;
