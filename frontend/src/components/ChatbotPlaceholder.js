import React from "react";
import "./ChatbotPlaceholder.css";

function ChatbotPlaceholder() {
  return (
    <div className="chatbot-placeholder card">
      <h3>AI Legal Chatbot (Coming Soon)</h3>
      <div className="chat-window">
        <p><em>The chatbot will answer your legal queries here.</em></p>
        <img
          src="https://img.icons8.com/ios-filled/100/000000/robot-2.png"
          alt="Chatbot"
          style={{ width: "60px", margin: "20px auto", display: "block" }}
        />
      </div>
    </div>
  );
}
export default ChatbotPlaceholder;
