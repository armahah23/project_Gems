import {  Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import SignupOption from "./Pages/SignupOption";
import Esignup from "./Pages/Esignup";
import Asignup from "./Pages/Asignup";
import MDahshboard from "./Pages/mechanicDashboard/MDashboard";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import ForgotPassword from "./components/ForgotPassword";
import ResetPassword from "./components/Resetpassword";
import Bookingdetails from "./Pages/Bookingdetails";

function App() {
  return (
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/esignup" element={<Esignup />} />
        <Route path="/asignup" element={<Asignup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/csignup" element={<Signup />} />
        <Route path="/signupoption" element={<SignupOption />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />
        <Route path="/resetpassword" element={<ResetPassword />} />
        <Route path="/bdetails" element={<Bookingdetails />} />
        <Route path="/mdashboard" element={<MDahshboard />} />
      </Routes>
  );
}

export default App;