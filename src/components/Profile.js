import axios from "axios";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { useEmployees } from "../context/Context";
import useLocal from "../utils/useLocal";
import NavBar from "./NavBar";
import SideBar from "./SideBar";

export default function Profile() {
  useLocal();

  const [password, setPassword] = useState("");
  const {
    state: { loggedUser },
  } = useEmployees();

  const changePassword = async (e) => {
    e.preventDefault();
    if (password.length > 5) {
      const body = {
        ...loggedUser,
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/2048px-User-avatar.svg.png",
        passreset: true,
      };
      const res = await axios.put(
        `http://localhost:5000/user/${loggedUser.email}`,
        {
          body,
        }
      );
      toast.success("Password updated");
      setPassword("");
    } else {
      toast.error("Password should be at least 6 characters");
    }
  };

  return (
    <div>
      <NavBar />
      <div className="flex">
        <SideBar />
        <div className=" p-10">
          <div>
            <img src={loggedUser.img} alt="" className="h-40 w-40 my-10" />
            <h1 className="text-xl font-bold">Name: {loggedUser.name}</h1>
            <h1 className="text-xl font-bold my-5">
              Email: {loggedUser.email}
            </h1>
            <h1 className="text-xl font-bold">
              Department: {loggedUser.department}
            </h1>
          </div>
          {!loggedUser.passreset && (
            <h2 className="text-red-500 font-bold text-xl my-10">
              Please Reset your Password to make a leave request
            </h2>
          )}
          <div>
            <form>
              <div className="my-10">
                <label htmlFor="password" className="font-bold">
                  Enter a new Password
                </label>
                <br />
                <input
                  type="password"
                  name="password"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  className="px-5 py-2 bg-gray-200 my-3 rounded-sm focus:outline-blue-700"
                  required={true}
                />
              </div>
              <button
                className="bg-indigo-600 px-10 py-3 text-white rounded"
                onClick={changePassword}
              >
                Change Password
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
