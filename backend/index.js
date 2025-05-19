import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from "dotenv";

// components
import Connection from "./database/db.js";
import Router from "./routes/route.js";

// Load environment variables from .env
dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.use("/", Router);

// Environment variables
const PORT = process.env.PORT || 8000;
const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;

const startServer = async () => {
  try {
    // Connect to MongoDB
    await Connection(username, password);

    // Start the server
    app.listen(PORT, () => {
      console.log(`✅ Server is running successfully on PORT ${PORT}`);
    });
  } catch (error) {
    console.error("❌ Failed to connect to the database:", error);
  }
};

startServer();
