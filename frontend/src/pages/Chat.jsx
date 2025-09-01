// pages/Chat.jsx
import { useState, useEffect } from "react";
import axios from "axios";

export default function Chat() {
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hello! I'm your AI doctor. How can I help you today?" }
  ]);
  const [input, setInput] = useState("");

  // Load chat history (optional)
  useEffect(() => {
    const fetchHistory = async () => {
      try {
        const res = await axios.get("http://localhost:5000/api/chat/history", {
          params: { userId: "user123" }, // later replace with real userId (auth)
        });
        if (res.data?.chat?.messages) {
          setMessages(res.data.chat.messages.map(msg => ({
            sender: msg.role === "user" ? "user" : "bot",
            text: msg.text
          })));
        }
      } catch (err) {
        console.error("Error loading chat history:", err);
      }
    };
    fetchHistory();
  }, []);

  const handleSend = async () => {
    if (!input.trim()) return;

    // Optimistically add user message
    const newMsg = { sender: "user", text: input };
    setMessages(prev => [...prev, newMsg]);

    try {
      // Call backend API
      const res = await axios.post("http://localhost:5000/api/chat", {
        userId: "user123", // replace with logged in user later
        message: input,
      });

      // Add AI response
      if (res.data.reply) {
        setMessages(prev => [...prev, { sender: "bot", text: res.data.reply }]);
      }
    } catch (err) {
      console.error("Error sending message:", err);
      setMessages(prev => [...prev, { sender: "bot", text: "⚠️ Error connecting to server." }]);
    }

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
