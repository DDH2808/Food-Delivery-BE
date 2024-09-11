import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/greatstack");
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log("Connection failure!!!");
  }
};
