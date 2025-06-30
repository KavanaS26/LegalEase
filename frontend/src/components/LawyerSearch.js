import React from "react";
import "./LawyerSearch.css";

function LawyerSearch() {
  return (
    <div className="lawyer-search card">
      <h3>Find a Lawyer</h3>
      <input type="text" placeholder="Search by specialization, location..." />
      <div className="lawyer-list">
        <div className="lawyer-card">
          <strong>Adv. Priya Sharma</strong>
          <p>Specialization: Family Law | Bengaluru</p>
          <button>Book Now</button>
        </div>
        <div className="lawyer-card">
          <strong>Adv. Ramesh Kumar</strong>
          <p>Specialization: Property Law | Mysuru</p>
          <button>Book Now</button>
        </div>
      </div>
    </div>
  );
}
export default LawyerSearch;
