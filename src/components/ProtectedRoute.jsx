import { Navigate } from "react-router-dom";

export const ProtectedRoute = ({ children, allowedRoles = [] }) => {
  const userStr = localStorage.getItem("user");
  const user = userStr ? JSON.parse(userStr) : null;
  const token = localStorage.getItem("token");

  if (!user || !token) {
    return <Navigate to="/Login" replace />;
  }

  if (allowedRoles.length > 0 && !allowedRoles.includes(user.role)) {
    return <Navigate to={user.role === "admin" ? "/admin" : "/"} replace />;
  }

  return children;
};
