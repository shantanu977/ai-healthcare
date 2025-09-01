import express from "express";
import multer from "multer";
import Report from "../models/Report.js";

const router = express.Router();

// Multer config (uploads to local "uploads" folder for now)
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) => cb(null, Date.now() + "-" + file.originalname),
});
const upload = multer({ storage });

// Upload report API
router.post("/upload", upload.single("reportFile"), async (req, res) => {
  try {
    const { patientName, description } = req.body;
    const fileUrl = `/uploads/${req.file.filename}`;

    const newReport = new Report({ patientName, description, fileUrl });
    await newReport.save();

    res.status(201).json({ message: "Report uploaded successfully", report: newReport });
  } catch (err) {
    res.status(500).json({ message: "Error uploading report", error: err.message });
  }
});

// Get all reports
router.get("/", async (req, res) => {
  try {
    const reports = await Report.find().sort({ createdAt: -1 });
    res.json(reports);
  } catch (err) {
    res.status(500).json({ message: "Error fetching reports", error: err.message });
  }
});

export default router;
