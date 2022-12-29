import React from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import { Login } from "./components";

const App = () => {
  return (
    <Routes>
      <Route path="login" element={<Login />}></Route>
      <Route path="/*" element={<Login />}></Route>
    </Routes>
  );
};

export default App;
