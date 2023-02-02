import React, { useState } from "react";
import NavBar from "./NavBar";
import SideBar from "./SideBar";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const formSubmit = (e) => {
    e.preventDefault();
    setEmail("");
    setPassword("");
    setError("login failed");
  };
  return (
    <div>
      <NavBar />
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
