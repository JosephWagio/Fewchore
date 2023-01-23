import React, { useState } from "react";
import HeaderComponent from "../../HeaderComponent";
import { BiExport } from "react-icons/bi";
import { FiFilter } from "react-icons/fi";
import { BsChatDots } from "react-icons/bs";
import "./customers.css";
import PopupView1 from "./popup-views/View1";
import PopupView2 from "./popup-views/View2";
import PopupView3 from "./popup-views/View3";
import PopupImage from "../../../../assets/popup-success-icon.png";

const Customers = () => {
  const [view, setview] = useState(1);
  const changeView = (view) => {
    setview(view);
  };

  const customerData = [
    {
      id: "1",
      fullName: "Louis John Cena",
      email: "louis.cena21@gmail.com",
      accountNum: 1234567890,
      levels: "Tier 1",
      status: "active",
    },
    {
      id: "2",
      fullName: "Louis John Cena",
      email: "louis.cena21@gmail.com",
      accountNum: 1234567890,
      levels: "Tier 2",
      status: "active",
    },
  ];

  const sortData = [
    {
      id: "1",
      text: "Newest",
    },
    // {
    //   id: "2",
    //   text: "Other Banks",
    // },
  ];

  const [dropdownVisible, setdropdownVisible] = useState(false);
  const [sort, setsort] = useState(sortData[0]);
  const [popupVisible, setpopupVisible] = useState(false);
  const [popupVisible2, setpopupVisible2] = useState(false);
  const [popupData, setpopupData] = useState(null);
  const showPopupDialog = (data) => {
    setpopupVisible(true);

    setpopupData(data);
  };
  const [popupView, setpopupView] = useState(1);
  const changePopupView = (view) => {
    setpopupView(view);
  };
  const hidePopup = () => {
    setpopupVisible(false);
  };
  return (
    <>
      <header>
        <div className="heading">
          <h1>Customers</h1>
        </div>

        <HeaderComponent />
      </header>

      <div className="customers-content">
        <div className="customers-category">
          <div
            className={view === 1 ? "category-card active" : "category-card"}
            onClick={() => changeView(1)}
          >
            <h6>All Customers</h6>
            <p>843</p>
          </div>

          <div
            className={view === 2 ? "category-card active" : "category-card"}
            onClick={() => changeView(2)}
          >
            <h6>Active Customers </h6>
            <p>843</p>
          </div>

          <div
            className={view === 3 ? "category-card active" : "category-card"}
            onClick={() => changeView(3)}
          >
            <h6>Inactive Customers</h6>
            <p>843</p>
          </div>

          <div
            className={view === 4 ? "category-card active" : "category-card"}
            onClick={() => changeView(4)}
          >
            <h6>Suspended Customers</h6>
            <p>843</p>
          </div>
        </div>

        <div className="customer-search">
          <input
            type="text"
            placeholder="Search Customers, Account Numbers, etc."
          />

          <button className="action-btn">
            <BiExport size={24} />
            Export as CSV
          </button>

          <div className="dropdown">
            <button
              onClick={() => {
                setdropdownVisible(!dropdownVisible);
              }}
            >
              <FiFilter size={24} />
              Filter: {sort.text}
            </button>

            <div
              className={
                dropdownVisible === true
                  ? "dropdown-options visible"
                  : "dropdown-options"
              }
            >
              <p>Sort By:</p>

              {sortData.map((data) => (
                <button
                  className={sort.id === data.id ? "active" : ""}
                  onClick={() => {
                    setsort(data);
                    setdropdownVisible(!dropdownVisible);
                  }}
                >
                  {data.text}
                </button>
              ))}
            </div>
          </div>

          <button className="action-btn light">
            <BsChatDots size={24} />
            Message All
          </button>
        </div>

        <div className="customer-table">
          <div className="header">
            <div className="full-name">Full name</div>
            <div className="status">Status</div>
            <div className="levels">Levels</div>
            <div className="email">Email address</div>
            <div className="account-num">Account number</div>
          </div>
          {customerData.map((item) => (
            <div className="item" onClick={() => showPopupDialog(item)}>
              <div className="full-name">{item.fullName}</div>
              <div className="status" status={item.status}>
                {item.status}
              </div>
              <div className="levels">{item.levels}</div>
              <div className="email">{item.email}</div>
              <div className="account-num">{item.accountNum}</div>
            </div>
          ))}
        </div>
      </div>

      {popupVisible === true && (
        <div className="customer-popup">
          <div className="popup-content">
            {popupView === 1 && (
              <PopupView1
                changePopupView={changePopupView}
                popupData={popupData}
                hidePopup={hidePopup}
              />
            )}

            {popupView === 2 && (
              <PopupView2
                changePopupView={changePopupView}
                popupData={popupData}
                hidePopup={hidePopup}
              />
            )}

            {popupView === 3 && (
              <PopupView3
                changePopupView={changePopupView}
                popupData={popupData}
                hidePopup={hidePopup}
              />
            )}
          </div>
        </div>
      )}

      {popupVisible2 === true && (
        <div className="account-upgraded-popup">
          <div className="popup-content">
            <h1>Account Upgrade</h1>

            <img src={PopupImage} alt="" />

            <p>
              Account Upgrade has been successfully approved for Aloma Isaac
              Junior
            </p>

            <button
              className="primary-btn"
              onClick={() => {
                setpopupVisible2(false);
                setpopupVisible(false);
              }}
            >
              Return to Dashboard
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Customers;
