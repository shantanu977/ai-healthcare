import express from "express";
import { createContact, getContacts } from "../controllers/contactController.js";

const router = express.Router();

// Create contact form submission
router.post("/", createContact);

// (Optional) Get all contact messages (admin)
router.get("/", getContacts);

export default router;
