import dotenv from "dotenv";
dotenv.config();
import express from "express";
import chalk from "chalk";

import connectDB from "./config/db.js";

import userRoutes from "./routes/user.js";
import authRoutes from "./routes/auth.js";

const app = express();
app.use(express.json());

//Connect Database
connectDB();

// Routes
app.use("/api/user", userRoutes);
app.use("/api/auth", authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(chalk.yellow.bold("Server is running on port:", PORT))
);