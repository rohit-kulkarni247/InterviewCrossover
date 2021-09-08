import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  fullname: String,
  email: { type: String, unique: true },
  password: String,
  college: String,
});

const InterviewCreator = new mongoose.model("InterviewCreator", userSchema);

export default InterviewCreator;
