import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Login from "./components/auth/Login";
import SignUp from "./components/auth/SignUp";
import { ProtectedRoute } from "./components/ProtectedRoute";
import AdminDashboard from "./components/AdminDashboard";
// import UserDashboard from "./components/user/Dashboard";
import "./App.scss";
import CustomComponent from "./components/CustomComponent";
import Profile from "./components/client/Profile";
import Header from "./components/CustomComponent/Header";
import PhotoUpload from "./components/PhotoUpload.jsx";
import PricingPlans from "./components/Pricing/index.jsx";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<CustomComponent />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Register" element={<SignUp />} />
        <Route path="/Upload" element={<PhotoUpload />} />
        <Route path="/Plans" element={<PricingPlans />} />
        {/* 
      <Route
        path="/"
        element={
          <ProtectedRoute allowedRoles={["client"]}>
            <UserDashboard />
          </ProtectedRoute>
        }
      /> */}
        <Route
          path="/profile"
          element={
            <ProtectedRoute allowedRoles={["client"]}>
              <Profile />
            </ProtectedRoute>
          }
        />

        <Route
          path="/admin/*"
          element={
            <ProtectedRoute allowedRoles={["admin"]}>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />

        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}

export default App;
