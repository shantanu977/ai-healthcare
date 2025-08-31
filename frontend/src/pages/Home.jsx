// pages/Home.jsx
import { useState } from "react";
import { Link } from "react-router-dom";

function Home() {
  const [messages, setMessages] = useState([
    { sender: "ai", text: "Hello! I'm your AI Health Assistant. How can I help?" },
  ]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input.trim()) return;

    // Add user message
    const userMessage = { sender: "user", text: input };
    setMessages((prev) => [...prev, userMessage]);

    // Add AI reply (dummy for now)
    setTimeout(() => {
      const aiMessage = { sender: "ai", text: "Got it! I'll analyze that soon." };
      setMessages((prev) => [...prev, aiMessage]);
    }, 1000);

    setInput("");
  };

  return (
    <div className="text-center">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-20 rounded-2xl shadow-lg">
        <h1 className="text-4xl font-bold mb-4">
          Welcome to MediLink AI
        </h1>
        <p className="text-lg mb-6">
          Your AI-powered assistant for health reports, symptom checking, and monitoring.
        </p>
        <Link
          to="/reports"
          className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold shadow hover:bg-gray-200"
        >
          Get Started
        </Link>
      </section>

      {/* Features Section */}
      <section className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg">
          <h2 className="text-xl font-bold mb-2">Health Reports</h2>
          <p className="text-gray-600">
            Upload and analyze your medical reports with AI assistance.
          </p>
        </div>
        <div className="p-6 bg-white rounded-xl shadow hover:shadow-lg">
          <h2 className="text-xl font-bold mb-2">Symptom Checker</h2>
          <p className="text-gray-600">
            Describe your symptoms and get AI-based insights instantly.
          </p>
        </div>
      </section>

      {/* Chat Section */}
      <section className="mt-16 bg-gray-50 rounded-xl shadow-lg p-6 max-w-2xl mx-auto">
        <h2 className="text-2xl font-bold mb-4">💬 Chat with AI</h2>

        {/* Messages */}
        <div className="h-64 overflow-y-auto border rounded-lg p-4 bg-white text-left">
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`mb-3 p-3 rounded-lg max-w-xs ${
                msg.sender === "user"
                  ? "ml-auto bg-blue-500 text-white"
                  : "mr-auto bg-gray-200 text-gray-800"
              }`}
            >
              {msg.text}
            </div>
          ))}
        </div>

        {/* Input */}
        <div className="mt-4 flex">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            className="flex-1 border rounded-l-lg px-4 py-2 focus:outline-none"
            placeholder="Type your message..."
          />
          <button
            onClick={sendMessage}
            className="bg-blue-600 text-white px-4 py-2 rounded-r-lg hover:bg-blue-700"
          >
            Send
          </button>
        </div>
      </section>
    </div>
  );
}

export default Home;
