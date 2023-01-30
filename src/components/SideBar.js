import React from "react";
import { Link } from "react-router-dom";

export default function SideBar() {
  return (
    <div className="bg-gray-800 text-gray-100 h-screen p-10 w-1/6 text-lg font-semibold">
      <div className="home text-xl">
      <Link to={"/"}>
        <p>Home</p>
      </Link>
      </div>
      <div className="flex flex-col gap-y-12 justify-center  side_bar">
        <Link to={"/profile"}>
          <p>Profile</p>
        </Link>
        <Link to={"/employees"}>
          <p>Employees</p>
        </Link>
        <Link to={"/leave"}>
          <p>Leave Applications</p>
        </Link>
        <Link to={"/contact"}>
          <p>Contact</p>
        </Link>
      </div>
    </div>
  );
}
