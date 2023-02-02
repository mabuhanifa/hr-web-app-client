import React, { useEffect } from "react";
import { useEmployees } from "../context/Context";
import NavBar from "./NavBar";
import SideBar from "./SideBar";
const user = { name: "Mohammed Abu Hanifa" };
export default function Home() {
  const { state, dispatch } = useEmployees();
  console.log(state);
  useEffect(() => {
    dispatch({
      type: "login",
      payload: user,
    });
    localStorage.setItem("loggedUser", JSON.stringify(user));
  }, [dispatch]);
  return (
    <div>
      <NavBar />
      <div className="flex">
        <SideBar />
      </div>
    </div>
  );
}
