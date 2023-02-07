import React from "react";
import NavBar from "./NavBar";
import SideBar from "./SideBar";

export default function Contact() {
  return (
    <div>
      <NavBar />
      <div className="flex">
        <SideBar />
        <div className="p-5">
          www.astha.group
        </div>
      </div>
    </div>
  );
}
