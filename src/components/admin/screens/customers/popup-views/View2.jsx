import React from "react";
import { FiArrowLeft } from "react-icons/fi";
import dummyImage from "../../../../../assets/user_image.png";

const View2 = ({ changePopupView, popupData, togglePopup }) => {
  return (
    <>
      <div className="topbar">
        <FiArrowLeft size={24} onClick={() => changePopupView(1)} />
        Account Upgrade
      </div>

      <img src={dummyImage} alt="customer" className="user-image" />

      <h1>{popupData.fullName}</h1>
      <span style={{ marginBottom: 0 }}>{popupData.accountNum}</span>

      <div className="uploaded-doc-heading">
        <h6>Uploaded Documents</h6>

        <button className="primary-btn" onClick={() => changePopupView(3)}>
          View All
        </button>
      </div>

      <div className="uploaded-doc-content">
        <div className="item">
          <div className="text">
            <p>Vaild ID (Nat'l ID, Voter's Card, Drivers License)</p>
            <span>Tuesday, June 14, 2022 18:16:1</span>
          </div>

          <button className="light-btn">Accepted</button>
        </div>

        <div className="item">
          <div className="text">
            <p>Vaild ID (Nat'l ID, Voter's Card, Drivers License)</p>
            <span>Tuesday, June 14, 2022 18:16:1</span>
          </div>

          <button className="danger-btn">Declined</button>
        </div>
      </div>

      <div className="uploaded-doc-actions">
        <button className="danger-border-btn">Decline</button>
        <button className="transparent-border-btn">Approve</button>
      </div>
    </>
  );
};

export default View2;
