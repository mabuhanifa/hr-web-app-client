import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useEmployees } from "../context/Context";
import useLocal from "../utils/useLocal";
import NavBar from "./NavBar";
import SideBar from "./SideBar";

export default function Login() {
  useLocal();
  const { dispatch } = useEmployees();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const goTo = () => {
    navigate("/");
  };

  const formSubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post(`http://localhost:5000/login/${email}`, {
      password,
    });
    const data = res.data.data;
    const local = { ...data, password: "null" };

    if (res.data.login) {
      toast.success("Successfully Logged in");
      setTimeout(goTo, 1000);
      setEmail("");
      setPassword("");
      await dispatch({
        type: "login",
        payload: {
          ...data,
        },
      });
      localStorage.setItem("loggedUser", JSON.stringify(local));
    } else {
      setError("Login Failed");
      toast.error("Login Failed");
    }
  };

  return (
    <div>
      <NavBar />
      <ToastContainer />
      <div className="flex">
        <SideBar />
        <div className="p-10">
          <div>
            <form onSubmit={formSubmit}>
              <div>
                <label htmlFor="email">Email</label>
                <br />
                <input
                  type="text"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="px-5 py-2 bg-gray-200 my-3 rounded-sm focus:outline-blue-700"
                  required
                />
              </div>
              <div>
                <label htmlFor="password">Password</label>
                <br />
                <input
                  type="password"
                  name="password"
                  onChange={(e) => setPassword(e.target.value)}
                  value={password}
                  className="px-5 py-2 bg-gray-200 my-3 rounded-sm focus:outline-blue-700"
                  required
                />
              </div>
              <button className="bg-indigo-600 px-10 py-3 text-white rounded">
                Log In
              </button>
            </form>
          </div>
          <h4 className="text-red-600 font-bold my-5">{error && error}</h4>
        </div>
      </div>
    </div>
  );
}
