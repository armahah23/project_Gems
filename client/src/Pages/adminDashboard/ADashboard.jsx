import { useState, useEffect } from "react";
import "./ADashboard.css"; // Add your own styling

const ADashboard = () => {
  const [workData, setWorkData] = useState({
    totalWork: 0,
    pendingWork: 0,
    completedWork: 0,
    rejectedWork: 0,
    paidWork: 90,
    otherWork: 20,
  });

  // Simulate fetching data from API (replace with actual API call)
  useEffect(() => {
    const fetchData = async () => {
      // Fetch from your backend API and update workData
      // Example: const response = await fetch('/api/workdata');
      // const data = await response.json();
      // setWorkData(data);
    };
    fetchData();
  }, []);

  return (
    <div className="Adashboard">
      <h2>Dashboard</h2>
      <div className="card-container">
        <div className="card">
          <h3>Total Work</h3>
          <div className="circle">{workData.totalWork}%</div>
        </div>
        <div className="card">
          <h3>Pending Work</h3>
          <div className="circle">{workData.pendingWork}%</div>
        </div>
        <div className="card">
          <h3>Completed Work</h3>
          <div className="circle">{workData.completedWork}%</div>
        </div>
      </div>
    </div>
  );
};

export default ADashboard;
