import React from "react";
import { useEmployees } from "../context/Context";
import useLocal from "../utils/useLocal";
import NavBar from "./NavBar";
import SideBar from "./SideBar";

export default function Leaves() {
  useLocal();
  const {
    state: { employees },
  } = useEmployees();

  useLocal();

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
                  </tr>
                </thead>
                <tbody>
                  {employees &&
                    employees.map((e) => (
                      <tr key={e.id} className={e.isadmin ?  `hidden tbl` : "tbl" }>
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
