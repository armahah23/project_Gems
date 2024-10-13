
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Esignup from "./Pages/Esignup.jsx";
import Asignup from "./Pages/Asignup.jsx";
import Login from "./Pages/Login.jsx";
import Signup from "./Pages/Signup.jsx";
import HomePage from "./Pages/HomePage.jsx";
import SignupOption from "./Pages/SignupOption.jsx";
import ForgotPassword from "./components/ForgotPassword";
import ResetPassword from "./components/Resetpassword";
import Bookingdetails from "./Pages/Bookingdetails";
import ContactUs from "./Pages/ContactUs.jsx";
import EmergencyService from "./Pages/EmergencyService.jsx";
import EBService from "./Pages/EBService.jsx";


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
        <Route path="/contactus" element={<ContactUs />}/>
        <Route path="/emergencyservice" element={<EmergencyService />}/>
        <Route path="/ebservice" element={<EBService />} />
      </Routes>
  );
}

export default App;