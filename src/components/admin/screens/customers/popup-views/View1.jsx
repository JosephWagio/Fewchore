import React from "react";
import { IoMdClose } from "react-icons/io";
import { BsChatDots } from "react-icons/bs";
import { MdMailOutline } from "react-icons/md";
import dummyImage from "../../../../../assets/user_image.png";

const View1 = ({ changePopupView, popupData, hidePopup }) => {
  return (
    <>
      <div>
        <IoMdClose
          size={24}
          className="close-btn"
          onClick={() => hidePopup()}
        />
      </div>

      <img src={dummyImage} alt="customer" className="user-image" />

      <h1>{popupData.fullName}</h1>
      <span>1 Account</span>

      <div className="btn-group">
        <button className="primary-btn">
          <BsChatDots size={24} /> Send Message
        </button>
        <button className="transparent-border-btn">
          <MdMailOutline size={24} /> Send Email
        </button>
      </div>

      <div className="divider"></div>

      <div className="user-detail-list">
        <div className="item">
          <p className="heading">Email Address</p>
          <p className="info">{popupData.email}</p>
        </div>
        <div className="item">
          <p className="heading">Phone number</p>
          <p className="info">0908765431</p>
        </div>
        <div className="item">
          <p className="heading">Date of Birth</p>
          <p className="info">09 - 12 - 1993</p>
        </div>
        <div className="item">
          <p className="heading">Gender</p>
          <p className="info">Male</p>
        </div>
        <div className="item">
          <p className="heading">Level</p>
          <p className="info">{popupData.levels}</p>
        </div>
        <div className="item">
          <p className="heading">Account Upgrade</p>
          <p className="info">
            <button
              className="transparent-border-btn"
              onClick={() => changePopupView(2)}
            >
              View Request
            </button>
          </p>
        </div>
      </div>

      <div className="suspend-user">
        <label htmlFor="reason">Reason for Suspension</label>
        <input
          type="text"
          name="reason"
          id="reason"
          placeholder="Enter reason for Suspension"
        />

        <button className="danger-border-btn">Suspend Customer</button>
        <button className="other-btn">Cancel</button>
      </div>
    </>
  );
};

export default View1;
