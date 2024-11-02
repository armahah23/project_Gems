// import { useState, useEffect } from "react";
// import { User } from "lucide-react";
// import { useEffect } from "react";
import "./ADashboard.css"; // Add your own styling
// import { useAuth } from "../../context/AuthContext";
import Widget from "./adminComponent/widget";

// import { Pie } from 'react-chartjs-2';

const ADashboard = () => {

  // useEffect(() => {
  //   // const role = localStorage.getItem("userRole");
  //   // if (!role) {
  //   //   window.location.href = "/login";
  //   // } else if (role === "user" )  {
  //   //   window.location.href = "/home";
  //   // } else if (role === "mechanic") {
  //   //   window.location.href = "/mdashboard";
  //   // } 
  //   // }, []);





  return (
    <div className="Adashboard">
      <h2 className="m-6 text-[56px] font-extrabold uppercase text-[#204a64]">
        Dashboard
      </h2>

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
