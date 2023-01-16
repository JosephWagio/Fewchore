import React, { useState } from "react";
import { FiArrowLeft, FiEyeOff } from "react-icons/fi";
import VerificationInput from "react-verification-input";

const VerificationForm = ({ changeView }) => {
  const [pwdVisible, setPwdVisible] = useState(false);
  const revealPassword = () => {
    setPwdVisible(!pwdVisible);
  };

  const backToLogin = () => {
    changeView(1);
  };

  return (
    <div className="login-form auth">
      <FiArrowLeft
        id="btn-back"
        size={24}
        color={"#3D5059"}
        onClick={backToLogin}
        style={{ cursor: "pointer" }}
      />

      <h1>Login Authentication</h1>
      <p>Enter the verification code that was sent to yourname@email.com</p>

      <div className="login-input-container auth">
        <label htmlFor="email">Authentication Code</label>
        <VerificationInput
          classNames={{
            container: "verify-container",
            character: "verify-character",
            characterInactive: "verify-character--inactive",
            characterSelected: "verify-character--selected",
          }}
        />
      </div>

      <div className="login-input-container">
        <button className="primary-btn">Confirm</button>
        <button className="transparent-btn" onClick={backToLogin}>
          Cancel
        </button>
      </div>
    </div>
  );
};

export default VerificationForm;
