import React from "react";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { useEmployees } from "../context/Context";
export default function NavBar() {
  const {
    state: { loggedUser },
    dispatch,
  } = useEmployees();
  const logOut = () => {
    dispatch({
      type: "login",
      payload: {},
    });
    localStorage.removeItem("loggedUser");
  };
  return (
    <div>
      <ToastContainer />
      <div className="flex justify-center items-center gap-x-20 p-5 bg-gray-900 text-gray-200">
        <p>Home</p>
        <p>About</p>
        <p>Contact</p>
        {loggedUser.email ? (
          <p>
            <button className="bg-red-600 px-5 py-2 rounded" onClick={logOut}>
              Log Out
            </button>
          </p>
        ) : (
          <Link to={"/login"}>
            <button className="bg-indigo-600 px-5 py-2 rounded">Log In</button>
          </Link>
        )}
      </div>
    </div>
  );
}
