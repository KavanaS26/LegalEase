import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="logo">LegalEase</div>
      <ul>
        <li>Dashboard</li>
        <li>Chatbot</li>
        <li>Lawyer Search</li>
        <li>Pulse Portal</li>
      </ul>
    </nav>
  );
}
export default Navbar;
