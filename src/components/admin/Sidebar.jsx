import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo_sidebar.png";
import {
  RiDashboardFill,
  RiFundsFill,
  RiArrowRightLine,
  RiSettings5Fill,
} from "react-icons/ri";
import { MdOutlineAppSettingsAlt, MdAssignmentInd } from "react-icons/md";
import { BsFillCreditCardFill, BsCollectionFill } from "react-icons/bs";
import { FaUserCircle, FaMoneyBillWave } from "react-icons/fa";
import { BiCaretDown } from "react-icons/bi";
import { RiFileList2Fill } from "react-icons/ri";
import "./sidebar.css";

const Sidebar = () => {
  const [popupVisible, setpopupVisible] = useState(false);

  return (
    <>
      <div className="sidebar">
        <div className="sidebar-container">
          <div className="sidebar-logo">
            <img src={logo} alt="Logo" />
          </div>

          <div className="sidebar-link-list">
            <NavLink
              to="/admin/overview"
              className={({ isActive }) =>
                isActive ? "sidebar-link active" : "sidebar-link"
              }
            >
              <RiDashboardFill size={24} />
              <span>Overview</span>
            </NavLink>

            <div className="sidebar-link">
              <MdOutlineAppSettingsAlt size={24} />
              <span>Mobile Ads</span>
            </div>

            <div className="sidebar-link">
              <RiFundsFill size={24} />
              <span>Investments</span>
              <BiCaretDown size={24} />
            </div>

            <div className="sidebar-link">
              <FaMoneyBillWave size={24} />
              <span>Loans</span>
              <BiCaretDown size={24} />
            </div>

            <div className="sidebar-link">
              <BsCollectionFill size={24} />
              <span>Collections</span>
              <BiCaretDown size={24} />
            </div>

            <NavLink
              to="/admin/cards"
              className={({ isActive }) =>
                isActive ? "sidebar-link active" : "sidebar-link"
              }
            >
              <BsFillCreditCardFill size={24} />
              <span>Cards</span>
            </NavLink>

            <NavLink
              to="/admin/transactions"
              className={({ isActive }) =>
                isActive ? "sidebar-link active" : "sidebar-link"
              }
            >
              <RiFileList2Fill size={24} />
              <span>Transactions</span>
            </NavLink>

            <NavLink
              to="/admin/customers"
              className={({ isActive }) =>
                isActive ? "sidebar-link active" : "sidebar-link"
              }
            >
              <FaUserCircle size={24} />
              <span>Customers</span>
            </NavLink>

            <div className="sidebar-link">
              <MdAssignmentInd size={24} />
              <span>Admin Users</span>
            </div>

            <div className="sidebar-link">
              <RiSettings5Fill size={24} />
              <span>Settings</span>
            </div>

            <div
              className="sidebar-link logout"
              onClick={() => setpopupVisible(!popupVisible)}
            >
              <span>Log Out</span>
              <RiArrowRightLine size={24} />
            </div>
          </div>
        </div>
      </div>

      {popupVisible === true && (
        <div className="logout-popup">
          <div className="popup-content">
            <h1>Confirm Log Out</h1>
            <p>Are you sure you want to log out?</p>

            <div className="actions">
              <button
                className="primary-btn"
                onClick={() => setpopupVisible(false)}
              >
                No
              </button>
              <button className="transparent-border-btn">Yes, Log Out</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Sidebar;
