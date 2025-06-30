import React from "react";
import "./Dashboard.css";

function Dashboard() {
  return (
    <div className="dashboard card">
      <h3>User Dashboard</h3>
      <ul>
        <li>Recent Legal Queries: <span className="status pending">2 Pending</span></li>
        <li>Bookings: <span className="status confirmed">1 Confirmed</span></li>
        <li>Notifications: <span className="status">3 New</span></li>
      </ul>
    </div>
  );
}
export default Dashboard;
