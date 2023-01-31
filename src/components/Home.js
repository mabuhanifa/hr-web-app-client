import React, { useEffect } from "react";
import { useEmployees } from "../context/Context";
import NavBar from "./NavBar";
import SideBar from "./SideBar";

export default function Home() {
  const { state, dispatch } = useEmployees();
  console.log(state)
  useEffect(() => {
    dispatch({
      type: "login",
      payload: { name: "Mohammed Abu Hanifa" },
    });
  },[dispatch]);
  return (
    <div>
      <NavBar />
      <div className="flex">
        <SideBar />
      </div>
    </div>
  );
}
