import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./Pages/HomePage";
import SignupOption from "./Pages/SignupOption";
import Esignup from "./Pages/Esignup";
import MDahshboard from "./Pages/mechanicDashboard/MDashboard";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import ForgotPassword from "./components/ForgotPassword";
import ResetPassword from "./components/Resetpassword";
import Bookingdetails from "./Pages/Bookingdetails";
import ContactUs from "./Pages/ContactUs.jsx";
import EmergencyService from "./Pages/EmergencyService.jsx";
import EBService from "./Pages/EBService.jsx";
import Store from "./Pages/store/Store.jsx";
import Invoice from "./Pages/Invoice.jsx";
import Payment from "./Pages/Payment.jsx";
import Addwork from "./Pages/mechanicDashboard/Addwork.jsx";
import ADashboard from "./Pages/adminDashboard/ADashboard.jsx";
import ManageBooking from "./Pages/adminDashboard/ManageBooking.jsx";
import ASideBar from "./Pages/adminDashboard/ASideBar.jsx";
import './Pages/adminDashboard/ADashboard.css'; // Add your own styling
import Mechanics from "./Pages/adminDashboard/mechanicPages/Mechanics.jsx";
import SingleMechanic from "./Pages/adminDashboard/mechanicPages/SingleMechanic.jsx";


function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/esignup" element={<Esignup />} />
      <Route path="/login" element={<Login />} />
      <Route path="/csignup" element={<Signup />} />
      <Route path="/signupoption" element={<SignupOption />} />
      <Route path="/forgotpassword" element={<ForgotPassword />} />
      <Route path="/resetpassword" element={<ResetPassword />} />
      <Route path="/bdetails" element={<Bookingdetails />} />
      <Route path="/mdashboard" element={<MDahshboard />} />
      <Route path="/contactus" element={<ContactUs />} />
      <Route path="/emergencyservice" element={<EmergencyService />} />
      <Route path="/ebservice" element={<EBService />} />
      <Route path="/store" element={<Store />} />
      <Route path="/addwork" element={<Addwork />} />
      <Route path="/invoice" element={<Invoice />} />
      <Route path="/payment/:bookingId" element={<Payment />} />
      <Route path="/resetpassword" element={<ResetPassword />} />



      {/* admin dashboard */}
      <Route path="/admin/*" element={<AdminLayout />} />
      {/* <Route path="/admin" element={<ADashboard />} /> */}
      
    </Routes>
  );
}

function AdminLayout() {
  return (
    <div className="Adashboard-container">
      <ASideBar />
      <div className="admin-content">
        <Routes>
          <Route path="dashboard" element={<ADashboard />} />
          {/* <Route path="manageCustomer" element={<ManageCustomer />} /> */}
          <Route path="manageBooking" element={<ManageBooking />} />
          <Route path="mechanics">
            <Route index element={<Mechanics />} />
            <Route path=":userId" element={<SingleMechanic />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
}


export default App;
