import React, { useState, useEffect } from 'react';
import './ADashboard.css'; // Add your own styling

const AdminDashboard = () => {
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
    <div className="Adashboard-container">
      <div className="Admin-sidebar">
        <div className="logo">
          <h2>AUTOCARE</h2>
        </div>
        <div className="Admin-menu">
          <button>Work</button>
          <button>Add work</button>
          <button>Assign work</button>
          <button>Notification</button>
          <button>Setting</button>
          <button>Profile</button>
        </div>
      </div>

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
          <div className="card">
            <h3>Rejected Work</h3>
            <div className="circle">{workData.rejectedWork}%</div>
          </div>
          <div className="card">
            <h3>Paid Work</h3>
            <div className="circle">{workData.paidWork}%</div>
          </div>
          <div className="card">
            <h3>Others</h3>
            <div className="circle">{workData.otherWork}%</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
