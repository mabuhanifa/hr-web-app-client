import React from "react";
import NavBar from "./NavBar";
import SideBar from "./SideBar";

export default function Home() {
 
  return (
    <div>
      <NavBar />
      <div className="flex">
        <SideBar />
        
      </div>
    </div>
  );
}
