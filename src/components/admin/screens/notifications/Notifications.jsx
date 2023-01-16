import React, { useState } from "react";
import HeaderComponent from "../../HeaderComponent";
import { BiChevronDown } from "react-icons/bi";
import { BsFillCircleFill } from "react-icons/bs";
import { IoMdClose } from "react-icons/io";
import moment from "moment";
import vector1 from "../../../../assets/ri_funds-fill.png";
import "./notifications.css";

const Notifications = () => {
  const sortData = [
    {
      id: "1",
      text: "Most Recent",
    },
    {
      id: "2",
      text: "Unread First",
    },
  ];

  const notificationData = [
    {
      id: "1",
      name: "Setup Biometric Capture",
      description:
        "Setup biometric capture to simplify login and transaction confirmation",
      readStatus: true,
      createdAt: 1672776320,
    },
    {
      id: "2",
      name: "Investment Maturity Update",
      description:
        "Your INV0046 investment has matured and is ready for turn over or withdrawal",
      readStatus: false,
      createdAt: 1673121920,
    },
  ];

  const [dropdownVisible, setdropdownVisible] = useState(false);
  const [sort, setsort] = useState(sortData[0]);
  const sortItems = sortData.map((data) => (
    <button
      className={sort.id == data.id ? "active" : ""}
      onClick={() => {
        setsort(data);
        setdropdownVisible(!dropdownVisible);
      }}
    >
      {data.text}
    </button>
  ));

  const [popupVisible, setpopupVisible] = useState(false);
  const [popupData, setpopupData] = useState(null);
  const showPopupDialog = (data) => {
    setpopupVisible(true);

    setpopupData(data);
  };

  return (
    <>
      <header>
        <div className="heading">
          <h1>Notifications</h1>
        </div>

        <HeaderComponent />
      </header>

      <div className="notificaion-content">
        <div className="notification-actions">
          <div className="dropdown">
            <button
              onClick={() => {
                setdropdownVisible(!dropdownVisible);
              }}
            >
              {sort.text}
              <BiChevronDown size={24} color="#1F613E" />
            </button>

            <div
              className={
                dropdownVisible == true
                  ? "dropdown-options visible"
                  : "dropdown-options"
              }
            >
              <p>Sort By:</p>

              {sortItems}
            </div>
          </div>

          <button className="light-btn">Mark all as read</button>
        </div>

        <div className="notication-list">
          {notificationData.map((item) => (
            <div
              className={
                item.readStatus == true
                  ? "notication-item read"
                  : "notication-item unread"
              }
              onClick={() => showPopupDialog(item)}
            >
              <BsFillCircleFill size={16} />
              <div className="text">
                <h6>{item.name}</h6>
                <p>{item.description}</p>
                <span>{moment(item.createdAt).format("LLLL")}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {popupVisible == true && (
        <div className="notification-popup">
          <div className="popup-content">
            <IoMdClose
              size={24}
              className="close-btn"
              onClick={() => setpopupVisible(false)}
            />

            <img src={vector1} alt="" className="popup-image" />
            <h1>{popupData.name}</h1>
            <span>{moment(popupData.createdAt).format("LLLL")}</span>
            <p>{popupData.description}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default Notifications;
