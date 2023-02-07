import React from "react";
import useLocal from "../utils/useLocal";
import NavBar from "./NavBar";
import SideBar from "./SideBar";
export default function Home() {
  useLocal();

  return (
    <div>
      <NavBar />
      <div className="flex">
        <SideBar />
      </div>
    </div>
  );
}
