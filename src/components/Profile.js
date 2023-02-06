import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEmployees } from "../context/Context";
import NavBar from "./NavBar";
import SideBar from "./SideBar";

export default function Profile() {
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
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const formSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: "login",
      payload: {
        email,
        password,
      },
    });

    setEmail("");
    setPassword("");
    navigate("/");
  };
  useEffect(() => {
    if (localStorage.getItem("loggedUser")) {
      const user = JSON.parse(localStorage.getItem("loggedUser"));
      dispatch({
        type: "login",
        payload: {
          ...user,
        },
      });
    }
  }, [dispatch]);
  return (
    <div>
      <NavBar />
      <div className="flex">
        <SideBar />
        <div>
          <div>
            <h1>email: {loggedUser.email}</h1>
          </div>
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
        </div>
      </div>
    </div>
  );
}
