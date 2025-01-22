import React, { useState } from "react";

const Chatbot = () => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");

  const askChatbot = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/chatbot", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question }),
      });

      const data = await response.json();
      setAnswer(data.answer);
    } catch (error) {
      console.error("Error:", error);
      setAnswer("An error occurred while contacting the chatbot.");
    }
  };

  return (
    <div
      style={{
        position: "fixed",
        bottom: "20px",
        right: "20px",
        backgroundColor: "#fff",
        borderRadius: "10px",
        padding: "15px",
        boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
        width: "300px",
        maxWidth: "90%",
        zIndex: 9999,
      }}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        <h2
          style={{
            fontSize: "18px",
            fontWeight: "bold",
            color: "#333",
            marginBottom: "10px",
          }}
        >
          Chatbot
        </h2>
        <input
          type="text"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="Ask a question..."
          style={{
            width: "100%",
            padding: "10px",
            marginBottom: "10px",
            borderRadius: "5px",
            border: "1px solid #ddd",
            fontSize: "14px",
          }}
        />
        <button
          onClick={askChatbot}
          style={{
            backgroundColor: "#4CAF50",
            color: "white",
            border: "none",
            borderRadius: "5px",
            padding: "10px 15px",
            cursor: "pointer",
            fontSize: "14px",
            transition: "background-color 0.3s",
          }}
        >
          Ask
        </button>
        <p
          style={{
            marginTop: "10px",
            fontSize: "14px",
            color: "#555",
            lineHeight: "1.5",
          }}
        >
          {answer}
        </p>
      </div>
    </div>
  );
};

export default Chatbot;
