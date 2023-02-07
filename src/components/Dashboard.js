import axios from "axios";
import React, { useEffect } from "react";
import { toast } from "react-toastify";
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

  const fetchEmployees = async () => {
    const res = await axios.get("http://localhost:5000/users");
    const data = res.data.data;
    dispatch({
      type: "employees",
      payload: data,
    });
  };

  const updateStatus = async (e, status) => {
    const body = {
      ...e,
      leavestatus: status,
    };
    const res = await axios.put(`http://localhost:5000/user/${e.email}`, {
      body,
    });
    console.log(res);
    fetchEmployees();
    toast.success("Leave status updated")
  };

  useEffect(() => {
    fetchEmployees();
  }, []);

  return (
    <div>
      <NavBar />
      <div className="flex">
        <SideBar />
        <div className="p-10">
          <div>
            <div className="flex justify-center">
              <table className="border border-slate-500 ">
                <thead>
                  <tr className="tbl">
                    <th>Image</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Department</th>
                    <th>Leave Status</th>
                    <th>Operation</th>
                  </tr>
                </thead>
                <tbody>
                  {employees &&
                    employees.map((e) => (
                      <tr key={e.id} className="tbl">
                        <th>
                          <img
                            src={e.img}
                            alt="employee_pic"
                            className="h-10 w-10"
                          />
                        </th>
                        <th>{e.name}</th>
                        <th>{e.email}</th>
                        <th>{e.department}</th>
                        <th>{e.isadmin ? "" : e.leavestatus}</th>
                        <th>
                          {e.isadmin ? (
                            ""
                          ) : (
                            <div className="text-sm text-gray-700">
                              <button
                                className="bg-green-500 px-3 py-1 mr-2"
                                onClick={() =>
                                  updateStatus(e, "Approved")
                                }
                              >
                                Approve
                              </button>
                              <button
                                className="bg-red-500 px-3 py-1"
                                onClick={() =>
                                  updateStatus(e, "Declined")
                                }
                              >
                                Decline
                              </button>
                            </div>
                          )}
                        </th>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
}
