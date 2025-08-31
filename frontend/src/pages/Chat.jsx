// pages/Chat.jsx
import { useState } from "react";

export default function Chat() {
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hello! I'm your AI doctor. How can I help you today?" }
  ]);
  const [input, setInput] = useState("");

  const handleSend = () => {
    if (!input.trim()) return;

    // Add user message
    setMessages([...messages, { sender: "user", text: input }]);

    // Mock bot response (later integrate with backend/AI API)
    setTimeout(() => {
      setMessages(prev => [
        ...prev,
        { sender: "bot", text: "Thanks for sharing. I’ll analyze your symptoms." }
      ]);
    }, 1000);

    setInput("");
  };

  return (
    <div className="max-w-3xl mx-auto bg-white p-6 rounded-xl shadow-md">
      <h2 className="text-2xl font-bold mb-4">Chat with AI Doctor</h2>
      
      {/* Chat Window */}
      <div className="h-96 overflow-y-auto border p-4 rounded-lg mb-4 bg-gray-50">
        {messages.map((msg, i) => (
          <div key={i} className={`mb-2 ${msg.sender === "user" ? "text-right" : "text-left"}`}>
            <span
              className={`inline-block px-3 py-2 rounded-lg ${
                msg.sender === "user" ? "bg-blue-500 text-white" : "bg-gray-200"
              }`}
            >
              {msg.text}
            </span>
          </div>
        ))}
      </div>

      {/* Input Box */}
      <div className="flex gap-2">
        <input
          type="text"
          className="flex-1 border rounded-lg px-3 py-2"
          placeholder="Type your message..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
        />
        <button
          onClick={handleSend}
          className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
        >
          Send
        </button>
      </div>
    </div>
  );
}
