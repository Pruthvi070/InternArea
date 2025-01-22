import React, { useState } from "react";

const Chatbot = () => {
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [isOpen, setIsOpen] = useState(false);

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
    <div>
      {/* Chatbot Toggle Button */}
      <div
        className="fixed bottom-5 right-5 flex items-center z-50"
        onClick={() => setIsOpen(!isOpen)} // Toggle open/close
      >
        <button
          className="bg-green-600 text-white rounded-full p-3 shadow-lg hover:bg-green-700 transition duration-300"
        >
          <i className="fas fa-comment-dots text-lg"></i>
        </button>
        {!isOpen && (
          <span className="ml-2 text-white bg-green-600 px-2 py-1 rounded-full text-sm">
            Chatbot
          </span>
        )}
      </div>

      {/* Chatbot Container */}
      {isOpen && (
        <div
          className="fixed bottom-16 right-5 bg-white rounded-lg p-4 shadow-md z-50 
                     w-[85%] max-w-[320px] sm:w-[300px] md:w-[320px]"
        >
          <div className="flex flex-col items-start">
            {/* Close Button */}
            <button
              className="ml-auto mb-2 text-gray-500 hover:text-gray-800"
              onClick={() => setIsOpen(false)} // Close when tapped
            >
              <i className="fas fa-times"></i>
            </button>

            {/* Chatbot Header */}
            <h2 className="text-md font-bold text-gray-800 mb-2">Chatbot</h2>

            {/* Question Input */}
            <input
              type="text"
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              placeholder="Ask a question..."
              className="w-full p-2 mb-2 rounded border border-gray-300 text-sm"
            />

            {/* Ask Button */}
            <button
              onClick={askChatbot}
              className="bg-green-600 text-white rounded px-4 py-2 text-sm hover:bg-green-700 transition duration-300"
            >
              Ask
            </button>

            {/* Answer Display */}
            {answer && (
              <p className="mt-2 text-sm text-gray-600 leading-6">{answer}</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Chatbot;
