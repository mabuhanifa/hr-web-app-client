import axios from "axios";
import React, { useEffect } from "react";
import { useEmployees } from "../context/Context";
import useLocal from "../utils/useLocal";
import NavBar from "./NavBar";
import SideBar from "./SideBar";

export default function Dashboard() {
  const {
    state: { employees },
    dispatch,
  } = useEmployees();

  
  useLocal();

  useEffect(() => {
    const fetchEmployees = async () => {
      const res = await axios.get("http://localhost:5000/users");
      const data = res.data.data;
      dispatch({
        type: "employees",
        payload: data,
      });
    };

    fetchEmployees();
  }, [dispatch]);
  return (
    <div>
      <NavBar />
      <div className="flex">
        <SideBar />
        <div>
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
}
