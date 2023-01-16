import React, { useState } from "react";
import { FiEye, FiEyeOff } from "react-icons/fi";
import VerificationInput from "react-verification-input";

const LoginForm = ({ changeView }) => {
  const [pwdVisible, setPwdVisible] = useState(false);
  const revealPassword = () => {
    setPwdVisible(!pwdVisible);
  };

  const loginUser = () => {
    //login functionality goes here
    changeView(2);
  };

  const forgotPwd = () => {
    //login functionality goes here
    changeView(3);
  };

  return (
    <div className="login-form">
      <h1>Admin Login</h1>

      <div className="login-input-container">
        <label htmlFor="email">Email Address</label>
        <input type="email" name="email" placeholder="admin@email.com" />
      </div>

      <div className="login-input-container">
        <label htmlFor="pwd">Password</label>
        <input
          type={pwdVisible ? "visible" : "password"}
          name="pwd"
          placeholder="• • • • • • •
                •"
        />
        {pwdVisible ? (
          <FiEyeOff
            id="btn-reveal"
            size={16}
            color={"#ABB3B7"}
            onClick={revealPassword}
          />
        ) : (
          <FiEye
            id="btn-reveal"
            size={16}
            color={"#ABB3B7"}
            onClick={revealPassword}
          />
        )}
      </div>

      <button className="login-btn-fwd" onClick={forgotPwd}>
        Forgot password?
      </button>

      <div className="login-input-container">
        <button className="primary-btn" onClick={loginUser}>
          Log In
        </button>
      </div>
    </div>
  );
};

export default LoginForm;
