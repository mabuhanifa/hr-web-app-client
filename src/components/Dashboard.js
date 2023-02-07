import React from "react";
import NavBar from "./NavBar";
import SideBar from "./SideBar";

export default function Dashboard() {
  return (
    <div>
      <NavBar />
      <div className="flex">
        <SideBar />
        <div>
          <div>
            
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
}
