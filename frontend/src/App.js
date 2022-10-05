import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";

import DashboardLayout from "./layouts/dashboardlayout";
import CalenderLayout from "./layouts/calenderlayout";
import LiveclassLayout from "./layouts/liveclasslayout";
import AuthLayout from "./layouts/authlayout";
import TeacherLayout from "./layouts/teacherlayout";
import TablesLayout from "./layouts/tableslayout";

import { authData } from "./redux/auth/authslice";

import "./App.css";

function App() {
  let userDetails = useSelector(authData);

  return (
    <Router>
      {userDetails === 0 ? (
        <Routes>
          <Route exact path="/" element={<AuthLayout />} />
          <Route exact path="*" element={<AuthLayout />} />
        </Routes>
      ) : userDetails.email === "student@gmail.com" ? (
        <Routes>
          <Route exact path="/" element={<DashboardLayout />} />
          <Route exact path="*" element={<DashboardLayout />} />
          <Route exact path="/dashboard" element={<DashboardLayout />} />
          <Route exact path="/calender" element={<CalenderLayout />} />
          <Route exact path="/liveclass" element={<LiveclassLayout />} />
        </Routes>
      ) : (
        <Routes>
          <Route exact path="/" element={<TeacherLayout />} />
          <Route exact path="*" element={<TeacherLayout />} />
          <Route exact path="/teacher" element={<TeacherLayout />} />
          <Route exact path="/tables" element={<TablesLayout />} />
        </Routes>
      )}
    </Router>
  );
}

export default App;
