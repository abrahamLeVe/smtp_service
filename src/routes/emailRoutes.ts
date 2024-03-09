import express from "express";
import { sendEmail } from "../controllers/emailController";
import { authenticate } from "../middlewares/authMiddleware";

const router = express.Router();

router.post("/send", authenticate, sendEmail);

export default router;
