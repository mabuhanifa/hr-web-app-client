import React from "react";
import { AiFillHome, AiFillIdcard } from "react-icons/ai";
import { FcLeave } from "react-icons/fc";
import { MdOutlineContactSupport } from "react-icons/md";
import { RxDashboard } from "react-icons/rx";
import { Link } from "react-router-dom";

export default function SideBar() {
  return (
    <div className="bg-gray-800 text-gray-100 h-screen p-10 w-1/6 text-lg font-semibold">
      <div className="home text-xl">
        <Link to={"/"}>
          <p>
            <AiFillHome className="inline pb-1 text-2xl mr-1" />
            Home
          </p>
        </Link>
      </div>
      <div className="flex flex-col gap-y-12 justify-center  side_bar">
        <Link to={"/profile"}>
          <p><AiFillIdcard  className="inline pb-1 text-2xl mr-1" />Profile</p>
        </Link>
        <Link to={"/employees"}>
          <p><RxDashboard  className="inline pb-1 text-2xl mr-1" />Dashboard</p>
        </Link>
        <Link to={"/leave"}>
          <p><FcLeave className="inline pb-1 text-2xl mr-1" />Leave Applications</p>
        </Link>
        <Link to={"/contact"}>
          <p><MdOutlineContactSupport  className="inline pb-1 text-2xl mr-1" />Contact</p>
        </Link>
      </div>
    </div>
  );
}
