import mongoose from "mongoose";

const reportSchema = new mongoose.Schema({
  patientName: { type: String, required: true },
  description: { type: String },
  fileUrl: { type: String, required: true }, // Can store cloud/file path
}, { timestamps: true });

export default mongoose.model("Report", reportSchema);
