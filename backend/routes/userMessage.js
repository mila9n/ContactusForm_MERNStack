import express from "express";
import {
  deleteMessage,
  getAllUserMessage,
  sendUserMessage,
} from "../controller/userMessage.js";

const router = express.Router();

router.post("/send", sendUserMessage);
router.get("/getdata", getAllUserMessage);
router.delete("/:messageId", deleteMessage);

export default router;
