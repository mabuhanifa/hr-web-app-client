import React from "react";
import NavBar from "./NavBar";
import SideBar from "./SideBar";

export default function Dashboard() {
  return (
    <div>
      <NavBar />
      <div className="flex">
        <SideBar />
        <div>hello world</div>
      </div>
    </div>
  );
}