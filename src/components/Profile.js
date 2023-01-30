import axios from "axios";
import React, { useState } from "react";
import NavBar from "./NavBar";
import SideBar from "./SideBar";

export default function Profile() {
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
  };
  return (
    <div>
      <NavBar />
      <div className="flex">
        <SideBar />
        <div>
          <input
            type="file"
            name=""
            id=""
            onChange={(e) => setImg(e.target.files[0])}
          />
          <button onClick={uploadImg}>upload</button>
        </div>
      </div>
    </div>
  );
}
