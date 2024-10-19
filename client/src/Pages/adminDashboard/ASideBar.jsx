import "./ADashboard.css"; // Add your own styling
import logo from "../../assets/photos/logo.png";
import { Link } from "react-router-dom";

const ASideBar = () => {
  return (
    <div>
      <div className="Admin-sidebar">
        <div className="Admin-menu flex flex-col justify-center">
          <div className="w-[40px]">
            <img src={logo} alt="" />
          </div>
          <Link to="/admin/dashboard">Dashboard</Link>
          <Link to="/admin/manageBooking">Manage Booking</Link>
          <button>Work</button>
          <button>Add work</button>
          <button>Assign work</button>
          <button>Setting</button>
          <button>Profile</button>
        </div>
      </div>
    </div>
  );
};

export default ASideBar;
