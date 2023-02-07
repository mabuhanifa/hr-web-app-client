import React, { useEffect } from "react";
import { useEmployees } from "../context/Context";
import NavBar from "./NavBar";
import SideBar from "./SideBar";
export default function Home() {
  const { state, dispatch } = useEmployees();
  
  useEffect(() => {
    if (localStorage.getItem("loggedUser")) {
      const user = JSON.parse(localStorage.getItem("loggedUser"));
      dispatch({
        type: "login",
        payload: {
          ...user,
        },
      });
    }
  }, [dispatch]);
  return (
    <div>
      <NavBar />
      <div className="flex">
        <SideBar />
      </div>
    </div>
  );
}
