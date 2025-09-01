// controllers/reportController.js
import Report from "../models/Report.js";

// Upload a new report
export const uploadReport = async (req, res) => {
  try {
    const { patientName, description } = req.body;
    if (!req.file) {
      return res.status(400).json({ message: "No file uploaded" });
    }

    const newReport = new Report({
      patientName,
      description,
      fileUrl: req.file.path, // multer saves path
    });

    await newReport.save();

    res.status(201).json({
      success: true,
      message: "Report uploaded successfully",
      data: newReport,
    });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// Fetch all reports
export const getReports = async (req, res) => {
  try {
    const reports = await Report.find().sort({ createdAt: -1 });
    res.status(200).json({ success: true, data: reports });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
