import { Route, Routes } from "react-router-dom";
import Exam from "./components/Exam";
import SignIn from "./components/Signin";
import DashbordRoutes from "./components/DashbordRoutes";
import "./App.css";
import Login from "./pages/AdminLogin";

const App = () => {
  return (
    <Routes>
      <Route exact path="*" element={<SignIn />} />
      <Route path="/" element={<DashbordRoutes />} />
      <Route path="/exam" element={<Exam />} />
      <Route path="/adminLogin" element={<Login />} />
      <Route path="/dashboard/*" element={<DashbordRoutes />} />
    </Routes>
  );
};

export default App;
