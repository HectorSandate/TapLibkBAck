import mongoose from "mongoose";
const MONGO_URL = "mongodb+srv://hectorjosediazsandate:hector0303@cluster0.e2xbkxs.mongodb.net/?retryWrites=true&w=majority";

export const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URL);
    console.log("Connected to DB");
  } catch (error) {
    console.log("Error connecting to DB:", error);
  }
};