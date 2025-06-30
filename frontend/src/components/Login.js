import React, { useState } from "react";
import "./Login.css";

const Login = ({ onLogin }) => {
  const [role, setRole] = useState("user");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRoleChange = (event) => setRole(event.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Call your backend API here for authentication
    // Example: onLogin({ email, password, role });
    alert(`Role: ${role}\nEmail: ${email}\nPassword: ${password}`);
    onLogin(); // Call parent handler to mark as logged in
  };

  // Handler for sign up (could open a modal or redirect)
  const handleSignUp = () => {
    alert("Sign up functionality coming soon!");
    // Or navigate to /register if you have that page
  };

  return (
    <div className="login-container">
      <h2>LegalEase Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="role-selector">
          <label>
            <input
              type="radio"
              value="senior"
              checked={role === "senior"}
              onChange={handleRoleChange}
            />
            Senior Lawyer
          </label>
          <label>
            <input
              type="radio"
              value="junior"
              checked={role === "junior"}
              onChange={handleRoleChange}
            />
            Junior Lawyer
          </label>
          <label>
            <input
              type="radio"
              value="user"
              checked={role === "user"}
              onChange={handleRoleChange}
            />
            User
          </label>
        </div>
        <input
          type="email"
          placeholder="Email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
      <p className="login-note">
        Not registered?{" "}
        <button type="button" className="link-like" onClick={handleSignUp}>
          Sign up here
        </button>
      </p>
    </div>
  );
};

export default Login;
