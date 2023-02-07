import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useEmployees } from "../context/Context";
import useLocal from "./useLocal";

export default function PrivateRoutes() {
  useLocal();
  const {
    state: { loggedUser },
  } = useEmployees();
  return loggedUser.email ? <Outlet /> : <Navigate to="/login" />;
}
