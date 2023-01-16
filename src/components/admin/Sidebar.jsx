import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo_sidebar.png";
import {
  RiDashboardFill,
  RiFundsFill,
  RiArrowRightLine,
  RiSettings5Fill,
} from "react-icons/ri";
import { MdOutlineAppSettingsAlt, MdAssignmentInd } from "react-icons/md";
import { BsFillCreditCardFill } from "react-icons/bs";
import { FaUserCircle } from "react-icons/fa";
import { BiCaretDown } from "react-icons/bi";
import { RiFileList2Fill } from "react-icons/ri";
import "./sidebar.css";

const Sidebar = () => {
  return (
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
            <RiDashboardFill size={24} />
            <span>Loans</span>
            <BiCaretDown size={24} />
          </div>

          <div className="sidebar-link">
            <RiDashboardFill size={24} />
            <span>Collections</span>
            <BiCaretDown size={24} />
          </div>

          <div className="sidebar-link">
            <BsFillCreditCardFill size={24} />
            <span>Cards</span>
          </div>

          <NavLink
            to="/admin/transactions"
            className={({ isActive }) =>
              isActive ? "sidebar-link active" : "sidebar-link"
            }
          >
            <RiFileList2Fill size={24} />
            <span>Transactions</span>
          </NavLink>

          <div className="sidebar-link">
            <FaUserCircle size={24} />
            <span>Customers</span>
          </div>

          <div className="sidebar-link">
            <MdAssignmentInd size={24} />
            <span>Admin Users</span>
          </div>

          <div className="sidebar-link">
            <RiSettings5Fill size={24} />
            <span>Settings</span>
          </div>

          <div className="sidebar-link logout">
            <span>Log Out</span>
            <RiArrowRightLine size={24} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
