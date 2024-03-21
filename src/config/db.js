import mongoose from "mongoose";
const MONGO_URL = "mongodb+srv://hectorjosediazsandate:hector0303@cluster0.e2xbkxs.mongodb.net/?retryWrites=true&w=majority";

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