// import { useState, useEffect } from "react";
// import { User } from "lucide-react";
import "./ADashboard.css"; // Add your own styling
// import { useAuth } from "../../context/AuthContext";
import Widget from "./adminComponent/widget";

// import { Pie } from 'react-chartjs-2';

const ADashboard = () => {
  // const [workData, setWorkData] = useState({
  //   totalWork: 0,
  //   pendingWork: 0,
  //   completedWork: 0,
  //   rejectedWork: 0,
  //   paidWork: 90,
  //   otherWork: 20,
  // });
  // const [bookingDetails, setBookingDetails] = useState([]);
  // const [bookingCount, setBookingCount] = useState(0);
  // const { user } = useAuth();

  // // Simulate fetching data from API (replace with actual API call)
  // useEffect(() => {
  //   const getAllBookingDetails = async () => {
  //     if (user) {
  //       const response = await fetch(
  //         `http://localhost:3000/api/bookingForMechanic/${user._id}`,
  //         {
  //           method: "GET",
  //           headers: {
  //             "Content-Type": "application/json",
  //           },
  //         }
  //       );
  //       const data = await response.json();
  //       if (response.ok) {
  //         setBookingDetails(data.data);
  //         console.log(data.data);
  //       }
  //       setBookingCount(data.data.length);
  //     }
  //   };

  //   getAllBookingDetails();
  // }, []);

  return (
    <div className="Adashboard">
      <h2 className="m-6 text-[56px] font-extrabold uppercase text-[#204a64]">
        Dashboard
      </h2>
      {/* <div className="card-container ml-8">
        <div className="max-w-xs p-6 bg-white shadow-lg rounded-lg text-center">
          <h3 className="text-lg font-semibold mb-4">Total Work</h3>
          <div className="w-24 h-24 rounded-full bg-blue-600 text-white flex items-center justify-center mx-auto text-3xl">
            {bookingCount}
          </div>
        </div>
        <div className="card">
          <h3>Pending Work</h3>
          <div className="circle">{workData.pendingWork}%</div>
        </div>
        <div className="card">
          <h3>Completed Work</h3>
          <div className="circle">{workData.completedWork}%</div>
        </div>
      </div> */}

      <div className="flex p-[20px] w-[100%] gap-[20px]">
        <Widget type="user" />
        <Widget type="mechanic" />
        <Widget type="earning" />
        <Widget type="booking" />
      </div>
    </div>
  );
};

export default ADashboard;
