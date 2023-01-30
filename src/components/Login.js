import React from "react";
import NavBar from "./NavBar";
import SideBar from "./SideBar";

export default function Login() {
  return (
    <div>
      <NavBar />
      <div className="flex">
        <SideBar />
        <div>login</div>
      </div>
    </div>
  );
}
