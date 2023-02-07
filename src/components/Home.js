import React from "react";
import { Link } from "react-router-dom";
import { useEmployees } from "../context/Context";
import useLocal from "../utils/useLocal";
import NavBar from "./NavBar";
import SideBar from "./SideBar";
export default function Home() {
  useLocal();
  const {
    state: {  loggedUser },
  } = useEmployees();
  return (
    <div>
      <NavBar />
      <div className="flex">
        <SideBar />
        <div className="p-10">
          <div>
            {loggedUser.name && !loggedUser.passreset && (
              <h2 className="text-red-500 font-bold text-xl">Please Reset your Password to make a leave request <span className=" underline">
                <Link to='/profile'>Go to your Profile</Link></span> </h2>
            )}
          </div>
          <div className="my-20">
            {loggedUser.name && loggedUser.passreset && (
              <h2 className="text-red-500 font-bold text-xl">Welcome to Astha Group <span className=" underline">
                <Link to='/profile'>Go to your Profile</Link></span> </h2>
            )}
          </div>
          <div>
            {loggedUser.isadmin && (
              <h2 className="text-green-500 font-bold text-xl">Welcome Admin. Go to your DashBoard to Manage Employees and their leave request <span className=" underline">
                <Link to='/dashboard'>Dashboard</Link></span> </h2>
            )}
          </div>
          <div>
            {!loggedUser.name && (
              <h2 className="text-red-500 font-bold text-xl">Login to see your profile and manage your leave request . <span className=" underline">
                <Link to='/login'>Go to Login Page</Link></span> </h2>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
