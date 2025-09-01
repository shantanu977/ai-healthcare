import mongoose from "mongoose";

const chatSchema = new mongoose.Schema({
  userId: String,
  messages: [
    {
      role: String,   // "user" or "ai"
      text: String,
      timestamp: { type: Date, default: Date.now }
    }
  ]
});

export default mongoose.model("Chat", chatSchema);
