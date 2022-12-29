import React, { useState } from "react";
import { FiArrowLeft, FiEyeOff } from "react-icons/fi";
import VerificationInput from "react-verification-input";

const ForgotPasswordForm = ({ changeView }) => {
  const backToLogin = () => {
    changeView(1);
  };

  const resetPassword = () => {
    //forgot password functionality goes here
    changeView(4);
  };

  return (
    <div className="login-form">
      <h1>Password Reset</h1>

      <div className="login-input-container">
        <label htmlFor="email">Email Address</label>
        <input type="email" name="email" placeholder="admin@email.com" />
      </div>

      <div className="login-input-container">
        <button className="primary-btn" onClick={resetPassword}>
          Continue
        </button>
        <button className="transparent-btn" onClick={backToLogin}>
          Cancel
        </button>
      </div>
    </div>
  );
};

export default ForgotPasswordForm;
