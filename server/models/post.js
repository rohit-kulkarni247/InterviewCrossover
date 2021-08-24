import mongoose from "mongoose";

const experienceSchema = new mongoose.Schema({
  userEmail: String,
  companyName: String,
  content: String,
  dateOfUpload: Date,
});

const Experience = new mongoose.model("InterviewCreator", experienceSchema);

export default Experience;
