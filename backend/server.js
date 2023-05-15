import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import colors from "colors";
import { connectDb } from "./features/connectDb.js";
import userMessageRoute from "./routes/userMessage.js";
import { errorMiddleware } from "./middleware/error.js";

dotenv.config({});

connectDb();
const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
  cors({
    origin: [process.env.FRONTEND_URL],
    methods: ["POST", "PUT", "DELETE", "GET"],
    credentials: true,
  })
);

app.get("/", (req, res) => {
  res.send("home");
});

// route
app.use("/api/v1/usermessage", userMessageRoute);
app.use(errorMiddleware);

app.listen(process.env.PORT, () => {
  console.log(`server is listening on port ${process.env.PORT}`);
});
