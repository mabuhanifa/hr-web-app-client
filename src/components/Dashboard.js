import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useEmployees } from "../context/Context";
import useLocal from "../utils/useLocal";
import NavBar from "./NavBar";
import SideBar from "./SideBar";

export default function Dashboard() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [dept, setDept] = useState("");
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
    toast.success("Leave status updated");
  };
  const formSubmit = async (e) => {
    e.preventDefault();
    const newEmployees = {
      name: name,
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/User-avatar.svg/2048px-User-avatar.svg.png",
      email: email,
      password: "astha123321",
      department: dept,
      leavestatus: "no request",
      isadmin: false,
      passreset: false,
    };
    const res = await axios.post(`http://localhost:5000/users`, {
      ...newEmployees,
    });
    fetchEmployees();
    toast.success("Account created successfully");
    setName("")
    setEmail("")
    setDept("")
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
                                onClick={() => updateStatus(e, "Approved")}
                              >
                                Approve
                              </button>
                              <button
                                className="bg-red-500 px-3 py-1"
                                onClick={() => updateStatus(e, "Declined")}
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
          <div>
            <div className="my-20">
              <h1 className="text-2xl font-bold my-5">
                Create a New Employee Account
              </h1>
              <div>
                <form onSubmit={formSubmit}>
                  <div>
                    <label htmlFor="name">Name</label>
                    <br />
                    <input
                      type="text"
                      name="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="px-5 py-2 bg-gray-200 my-3 rounded-sm focus:outline-blue-700"
                      required={true}
                    />
                  </div>
                  <div>
                    <label htmlFor="email">Email</label>
                    <br />
                    <input
                      type="text"
                      name="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="px-5 py-2 bg-gray-200 my-3 rounded-sm focus:outline-blue-700"
                      required={true}
                    />
                  </div>
                  <div>
                    <label htmlFor="password">Department</label>
                    <br />
                    <input
                      type="text"
                      name="dept"
                      onChange={(e) => setDept(e.target.value)}
                      value={dept}
                      className="px-5 py-2 bg-gray-200 my-3 rounded-sm focus:outline-blue-700"
                      required={true}
                    />
                  </div>
                  <button className="bg-indigo-600 px-10 py-3 text-white rounded">
                    Create Account
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
