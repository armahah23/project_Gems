
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Esignup from "./Pages/Esignup.jsx";
import Asignup from "./Pages/Asignup.jsx";
import AddWorkPage from "./Pages/Addwork.jsx";
import Login from "./Pages/Login.jsx";
import Signup from "./Pages/Signup.jsx";
import HomePage from "./Pages/HomePage.jsx";
import SignupOption from "./Pages/SignupOption.jsx";
import EBService from "./Pages/EBService.jsx";
import Invoice from "./Pages/Invoice.jsx";



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
      </Routes>
  );
}

export default App;