import express from "express";
import {
  getAllUserMessage,
  sendUserMessage,
} from "../controller/userMessage.js";

const router = express.Router();

router.post("/send", sendUserMessage);
router.get("/getdata", getAllUserMessage);

export default router;
