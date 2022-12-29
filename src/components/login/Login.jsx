import React, { useState } from "react";
import logo from "../../assets/logo_1.png";
import { FiEye, FiEyeOff } from "react-icons/fi";
import VerificationInput from "react-verification-input";
import {
  LoginForm,
  VerificationForm,
  ForgotPasswordForm,
  ResetPasswordForm,
} from "./form-views";

import "./login.css";

const Login = () => {
  // login = 1
  // verification = 2
  // forgot password = 3
  // reset password = 4

  const [pwdVisible, setPwdVisible] = useState(false);
  const [view, setView] = useState(1);
  const revealPassword = () => {
    setPwdVisible(!pwdVisible);
  };
  const changeView = (view) => {
    setView(view);
  };

  return (
    <div className="login">
      <div className="login-container">
        <div className="login-row">
          <div className="login-col left">
            <img className="logo" src={logo} alt="logo" />
          </div>
          <div className="login-col right">
            {view == 1 && <LoginForm changeView={changeView} />}
            {view == 2 && <VerificationForm changeView={changeView} />}
            {view == 3 && <ForgotPasswordForm changeView={changeView} />}
            {view == 4 && <ResetPasswordForm changeView={changeView} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
