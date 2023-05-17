import ErrorHandler from "../middleware/error.js";
import { UserMessage } from "../model/userMessage.js";

export const sendUserMessage = async (req, res, next) => {
  try {
    const { name, email, message, subject } = req.body;

    if (!name || !email || !message || !subject)
      return next(new ErrorHandler("Please fill all the details", 400));

    await UserMessage.create({ name, email, message, subject });

    res.status(201).json({
      success: true,
      message: "message sent successfully",
    });
  } catch (error) {
    next(error);
  }
};

export const getAllUserMessage = async (req, res, next) => {
  try {
    const data = await UserMessage.find();
    res.status(200).json({
      success: true,
      data: data,
    });
  } catch (error) {
    next(error);
  }
};

export const deleteMessage = async (req, res, next) => {
  try {
    const { messageId } = req.params;

    const isExist = await UserMessage.findById(messageId);
    if (!isExist) return next(new ErrorHandler("Message does not exist", 400));
    await isExist.deleteOne();
    req.status(200).json({
      success: true,
      message: "Task deleted successfully",
    });
  } catch (error) {
    next(error);
  }
};
