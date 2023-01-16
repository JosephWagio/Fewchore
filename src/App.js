import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { Login, Admin } from "./components";
import {
  Overview,
  Transactions,
  Notifications,
} from "./components/admin/screens";

const App = () => {
  return (
    <Routes>
      <Route path="login" element={<Login />}></Route>
      <Route path="admin" element={<Admin />}>
        <Route path="overview" element={<Overview />}></Route>
        <Route path="transactions" element={<Transactions />}></Route>
        <Route path="notifications" element={<Notifications />}></Route>
        <Route path="*" element={<Login />}></Route>
      </Route>
      <Route path="/*" element={<Admin />}></Route>
    </Routes>
  );
};

export default App;
