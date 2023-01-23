import React from "react";
import { FiArrowLeft } from "react-icons/fi";

const View3 = ({ changePopupView, popupData, togglePopup }) => {
  return (
    <>
      <div className="topbar">
        <FiArrowLeft size={24} onClick={() => changePopupView(2)} />
        Uploaded Documents
      </div>

      <div className="uploaded-docs">
        <div className="item">
          <h6>Vaild ID</h6>

          <img
            src={
              "https://media.istockphoto.com/id/1073597286/vector/driver-license-with-male-photo-identification-or-id-card-template-vector-illustration.jpg?s=612x612&w=0&k=20&c=WkW7yo2wPw9HEfLAqyXqiDMX4Apditfd-bDuf8ENXcU="
            }
            alt="uploaded id"
          />

          <div className="actions">
            <button className="dark-border-btn">Download</button>
            <button className="danger-border-btn">Decline</button>
            <button className="transparent-border-btn">Accept</button>
          </div>
        </div>
      </div>

      <div className="uploaded-doc-actions">
        <button className="transparent-border-btn">Done</button>
      </div>
    </>
  );
};

export default View3;
