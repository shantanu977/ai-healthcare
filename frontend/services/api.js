import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000/api" });

// Chat APIs
export const sendMessage = (message) => API.post("/chat/send", { message });
export const getChatHistory = () => API.get("/chat/history");

// Report APIs
export const uploadReport = (formData) =>
  API.post("/report/analyze", formData, {
    headers: { "Content-Type": "multipart/form-data" },
  });
export const getReport = (id) => API.get(`/report/${id}`);

// Contact APIs
export const submitContact = (data) => API.post("/contact/submit", data);
