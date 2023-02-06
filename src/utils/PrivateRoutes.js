import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useEmployees } from "../context/Context";

export default function PrivateRoutes() {
  const {
    state: { loggedUser },
  } = useEmployees();
  return loggedUser.email ? <Outlet /> : <Navigate to="/login" />;
}
