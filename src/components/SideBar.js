import React from "react";
import { Link } from "react-router-dom";

export default function SideBar() {
  return (
    <div className="bg-gray-800 text-gray-100 h-screen p-10 w-1/6 ">
      <div className="flex flex-col gap-y-12 justify-center text-lg font-semibold side_bar">
        <Link to={"/profile"}>
          <a>Profile</a>
        </Link>
        <Link to={"/employees"}>
          <a>Users</a>
        </Link>
        <Link to={"/leaves"}>
          <a>Pending Leaves</a>
        </Link>
        <Link to={"/"}>
          <a>About</a>
        </Link>
        <Link to={"/"}>
          <a>Contact</a>
        </Link>
      </div>
    </div>
  );
}
