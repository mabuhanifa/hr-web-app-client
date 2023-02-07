import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
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
    dispatch,
  } = useEmployees();

  const [img, setImg] = useState();

  const uploadImg = () => {
    const formData = new FormData();
    formData.append("file", img);
    formData.append("upload_preset", "pqsu7umy");
    axios
      .post("https://api.cloudinary.com/v1_1/dw4ey8uzt/image/upload", formData)
      .then((res) =>
        axios.post("http://localhost:5000/users", { img: res.data.secure_url })
      );

    // <div>
    //     <input
    //       type="file"
    //       name=""
    //       id=""
    //       onChange={(e) => setImg(e.target.files[0])}
    //     />
    //     <button onClick={uploadImg}>upload</button>
    //   </div>
  };
  const changePassword = async (e) => {
    e.preventDefault();
    if (password.length > 5) {
      const body = {
        ...loggedUser,
        password: password,
        passreset: false,
      };
      const res = await axios.put(
        `http://localhost:5000/user/${loggedUser.email}`,
        {
          body,
        }
      );
      console.log(res);
      toast.success("Password updated");
    } else {
      toast.error("Password should be at least 6 characters");
    }
  };
  const navigate = useNavigate();

  const formSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: "login",
      payload: {
        password,
      },
    });
    setPassword("");
    navigate("/");
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
              <h2 className="text-red-500 font-bold text-xl my-10">Please Reset your Password to make a leave request</h2>
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
