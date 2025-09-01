import Report from "../models/Report.js";

// @desc    Submit a new report
// @route   POST /api/reports
// @access  Public
export const submitReport = async (req, res) => {
  try {
    const { patientName, description, fileUrl } = req.body;

    if (!patientName || !fileUrl) {
      return res.status(400).json({ message: "Patient name and file are required" });
    }

    const newReport = new Report({
      patientName,
      description,
      fileUrl,
    });

    await newReport.save();

    res.status(201).json({
      success: true,
      message: "Report submitted successfully",
      data: newReport,
    });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};
