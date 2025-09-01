import express from "express";
import { submitReport } from "../controllers/reportController.js";

const router = express.Router();

// Submit a report
router.post("/", submitReport);

export default router;
