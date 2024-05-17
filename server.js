import express from "express";
import cors from "cors";
import morgan from "morgan";
import dotenv from "dotenv";
import { connectDB } from "./config/connectDB.js";
import userRoute from "./routes/userRoute.js";
// config dot env
dotenv.config();
//connect database
connectDB();
//rest object
const app = express();
//middleware
app.use(morgan("dev"));
app.use(express.json());
app.use(cors());
// routes
// app.use("/api/v1/users", require("./routes/userRoute.js"));
app.use("/api/v1/users", userRoute);
//port
const PORT = 8080 || process.env.PORT;
//listen server
app.listen(PORT, () => {
  console.log("Server is running on 3000");
});
