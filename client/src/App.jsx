import {  Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import SignupOption from "./Pages/SignupOption";
import Esignup from "./Pages/Esignup";
import Asignup from "./Pages/Asignup";

import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import ForgotPassword from "./components/ForgotPassword";
import ResetPassword from "./components/Resetpassword";

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
      </Routes>
  );
}

export default App;