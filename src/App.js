import React from "react";
import { Route, Routes } from "react-router-dom";

import Content from "./components/Content";

import Header from "./components/Header";
import Login from "./components/auth/Login";
import "./App.css";

function App() {
  return (
    <div className="app">
      <Routes>
        <Route>
          <Route path="/" element={<Content />} />
          <Route path="/Login" element={<Login />} />
          {/* <Route path="/upload" element={<PhotoUpload />} />
            <Route path="/contest/:id" element={<ContestDetail />} />
            <Route path="/profile" element={<UserProfile />} />

            <Route path="/admin/*" element={<AdminDashboard />} /> */}
        </Route>
      </Routes>
    </div>
  );
}

export default App;
