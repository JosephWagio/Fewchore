import React from "react";
import { Outlet } from "react-router-dom";

import Sidebar from "./Sidebar";
import { Overview } from "./screens";

import "./admin.css";

const Admin = () => {
  return (
    <div className="admin">
      <Sidebar />

      <div className="admin-container">
        <Outlet />
      </div>
    </div>
  );
};

export default Admin;
