import React, { useState } from "react";
import Navbar from "./components/Navbar";
import ChatbotPlaceholder from "./components/ChatbotPlaceholder";
import Dashboard from "./components/Dashboard";
import LawyerSearch from "./components/LawyerSearch";
import PulsePortal from "./components/PulsePortal";
import "./App.css";
import Login from "./components/Login";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    // This function will be called by the Login component upon successful login.
    setIsLoggedIn(true);
  };

  return (
    <div className="app-container">
      {!isLoggedIn ? (
        <Login onLogin={handleLogin} />
      ) : (
        <>
          <Navbar />
          <main>
            <section className="section">
              <h2>Welcome to LegalEase</h2>
              <p>
                Your AI-powered legal assistant for accessible and predictive justice in India.
              </p>
            </section>
            <div className="grid">
              <div className="column">
                <Dashboard />
                <PulsePortal />
              </div>
              <div className="column">
                <ChatbotPlaceholder />
                <LawyerSearch />
              </div>
            </div>
          </main>
          <footer>
            <p>© 2025 LegalEase | IEEE CS Bangalore Chapter Internship Project</p>
          </footer>
        </>
      )}
    </div>
  );
}

export default App;
