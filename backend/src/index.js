import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/database.js";

dotenv.config({ path: "./.env" });

const app = express();

const startServer = async () => {
  try {
    await connectDB(process.env.MONGODB_URI);

    app.on("error", (error) => {
      console.error(`Error: ${error.message}`);
      process.exit(1);
    });

    app.listen(process.env.PORT, () => {
      console.log(`Server is running on port ${process.env.PORT}`);
    });

  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

startServer();
