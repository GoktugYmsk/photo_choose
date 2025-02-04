import React from "react";
import { Route, Routes } from "react-router-dom";

import Content from "./components/CustomComponent/Content";

import Header from "./components/CustomComponent/Header";
import Login from "./components/auth/Login";
import "./App.scss";
import SignUp from "./components/auth/SignUp";
import CustomComponent from "./components/CustomComponent";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route>
          <Route path="/" element={<CustomComponent />} />
          <Route path="/Login" element={<Login />} />
          <Route path="/Register" element={<SignUp />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
