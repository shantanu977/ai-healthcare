import Chat from "../models/Chat.js";

// Dummy AI response for now
export const chatWithAI = async (req, res) => {
  try {
    const { userId, message } = req.body;

    // Save user message
    let chat = await Chat.findOne({ userId });
    if (!chat) {
      chat = new Chat({ userId, messages: [] });
    }
    chat.messages.push({ role: "user", text: message });
    
    // Mock AI response (replace later with OpenAI API)
    const aiResponse = "I’m analyzing your symptoms... Please wait.";
    chat.messages.push({ role: "ai", text: aiResponse });

    await chat.save();

    res.json({ reply: aiResponse, chat });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
