import { React } from "react";
import AuthStore from "./Store/AuthStore";
import { Navigate } from "react-router-dom";

const ProtectedRoutes = ({ children, allowedRole }) => {
  const token = AuthStore((state) => state.token);
  const user = AuthStore((state) => state.user);

  if (!token) {
    return <Navigate to="/Login" />;
  }
  if (!user || user.role !== allowedRole) {
    return <Navigate to="/NotAuth" />;
  }

  return children;
};

export default ProtectedRoutes;
