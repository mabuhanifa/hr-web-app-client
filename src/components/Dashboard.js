import React from "react";
import useLocal from "../utils/useLocal";
import NavBar from "./NavBar";
import SideBar from "./SideBar";

export default function Dashboard() {
  useLocal();
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
