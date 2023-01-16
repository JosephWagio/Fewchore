import React from "react";
import { Link, NavLink } from "react-router-dom";
import { BsChatDots, BsChatDotsFill } from "react-icons/bs";
import { IoNotificationsOutline, IoNotificationsSharp } from "react-icons/io5";
import "./headercomponent.css";

const HeaderComponent = () => {
  return (
    <div className="header-component">
      <div className="search">
        <input type="text" placeholder="Search" />
      </div>

      <NavLink to="/admin/chat" className="support-chat">
        {({ isActive }) =>
          isActive ? (
            <BsChatDotsFill size={24} color="#4A7F63" />
          ) : (
            <BsChatDots size={24} color="#4A7F63" />
          )
        }
      </NavLink>

      <NavLink to="/admin/notifications" className="notification">
        {({ isActive }) =>
          isActive ? (
            <IoNotificationsSharp size={24} color="#4A7F63" />
          ) : (
            <IoNotificationsOutline size={24} color="#4A7F63" />
          )
        }
      </NavLink>
    </div>
  );
};

export default HeaderComponent;
