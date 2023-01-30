import { Route, Routes } from "react-router";
import "./App.css";
import Contact from "./components/Contact";
import Employees from "./components/Employees";
import Home from "./components/Home";
import Leaves from "./components/Leaves";
import Login from "./components/Login";
import Profile from "./components/Profile";

function App() {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<Home />} />
        <Route path="employees" element={<Employees />} />
        <Route path="leave" element={<Leaves/>} />
        <Route path="profile" element={<Profile/>} />
        <Route path="contact" element={<Contact/>} />
        <Route path="login" element={<Login/>} />
      </Route>
    </Routes>
  );
}

export default App;
