import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import chatRoutes from "./routes/chatRoutes.js";
import reportRoutes from "./routes/reportRoutes.js";
import contactRoutes from "./routes/contactRoutes.js";
import connectDB from "./config/db.js";

dotenv.config();
connectDB(); // ✅ Connect DB here

const app = express();
app.use(express.json());
app.use(cors());

// Routes
app.use("/api/chat", chatRoutes);
app.use("/api/reports", reportRoutes);
app.use("/api/contact", contactRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
