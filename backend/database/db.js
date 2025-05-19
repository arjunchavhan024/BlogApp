import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();

const Connection = async () => {
  const username = process.env.DB_USERNAME;
  const password = process.env.DB_PASSWORD;
  const dbName = process.env.DB_NAME || "BLOG";

  const URL = `mongodb+srv://${username}:${password}@cluster0.xaxvyzw.mongodb.net/${dbName}?retryWrites=true&w=majority&appName=Cluster0`;

  try {
    await mongoose.connect(URL, { bufferCommands: false });
    console.log(" Database connected successfully");
  } catch (error) {
    console.log(" Failed to connect to the database:", error);
  }
};

export default Connection;
