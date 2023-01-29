import { Route, Routes } from "react-router";
import "./App.css";
import Employees from "./components/Employees";
import Home from "./components/Home";

function App() {
  return (
    <Routes>
      <Route path="/">
        <Route index element={<Home />} />
        <Route path="employees" element={<Employees />} />
      </Route>
    </Routes>
  );
}

export default App;
