import { Route, Routes } from "react-router";
import "./App.css";
import Contact from "./components/Contact";
import Dashboard from "./components/Dashboard";
import Home from "./components/Home";
import Leaves from "./components/Leaves";
import Login from "./components/Login";
import Profile from "./components/Profile";
import PrivateRoutes from "./utils/PrivateRoutes";

function App() {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<Home />} />
        <Route path="profile" element={<Profile />} />
        <Route path="contact" element={<Contact />} />
        <Route path="login" element={<Login />} />
      </Route>
      <Route element={<PrivateRoutes />}>
        <Route element={<Leaves />} path="/leave" />
        <Route path="/dashboard" element={<Dashboard />} />
      </Route>
    </Routes>
  );
}

export default App;
