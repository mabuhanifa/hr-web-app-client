import React from "react";
import { Link } from "react-router-dom";
import { useEmployees } from "../context/Context";
import useLocal from "../utils/useLocal";
import NavBar from "./NavBar";
import SideBar from "./SideBar";
export default function Home() {
  useLocal();
  const {
    state: { employees, loggedUser },
    dispatch,
  } = useEmployees();
  return (
    <div>
      <NavBar />
      <div className="flex">
        <SideBar />
        <div className="p-10">
          <div>
            {!loggedUser.passreset && (
              <h2 className="text-red-500 font-bold text-xl">Please Reset your Password to make a leave request <span className=" underline">
                <Link to='/profile'>Go to your Profile</Link></span> </h2>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
