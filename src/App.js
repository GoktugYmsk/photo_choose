import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

import Login from "./components/auth/Login";
import SignUp from "./components/auth/SignUp";
import { ProtectedRoute } from "./components/ProtectedRoute";
import AdminDashboard from "./components/AdminDashboard";
// import UserDashboard from "./components/user/Dashboard";
import "./App.scss";
import CustomComponent from "./components/CustomComponent";

function App() {
  return (
    <Routes>
      <Route path="/" element={<CustomComponent />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Register" element={<SignUp />} />
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
        path="/admin/*"
        element={
          <ProtectedRoute allowedRoles={["admin"]}>
            <AdminDashboard />
          </ProtectedRoute>
        }
      />

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}

export default App;
