import mongoose from "mongoose";
const MONGO_URL = "mongodb://mongo:27017/inte";

export const connectDB = async () => {
  try {
    console.log("Waiting for MongoDB to start...");
    await new Promise(resolve => setTimeout(resolve, 5000)); // Delay for 5 seconds
    console.log("Connecting to DB...");
    await mongoose.connect(MONGO_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to DB");
  } catch (error) {
    console.log("Error connecting to DB:", error);
  }
};