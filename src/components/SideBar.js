/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";

export default function SideBar() {
  return (
    <div className="bg-gray-800 text-gray-100 h-screen p-10 w-1/6 ">
      <div className="flex flex-col gap-y-12 justify-center text-lg font-semibold side_bar">
      <Link to={"/"}>
          <a>Home</a>
        </Link>
        <Link to={"/profile"}>
          <a>Profile</a>
        </Link>
        <Link to={"/employees"}>
          <a>Employees</a>
        </Link>
        <Link to={"/leave"}>
          <a>Leave Applications</a>
        </Link>
        <Link to={"/contact"}>
          <a>Contact</a>
        </Link>
      </div>
    </div>
  );
}
