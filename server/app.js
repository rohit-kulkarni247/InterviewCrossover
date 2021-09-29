//jshint version:6

import {} from "dotenv/config";
import express from "express";
import bodyparser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import fileUpload from "express-fileupload";

import UserRoute from "./routes/helper.js";

const app = express();
// app.use(fileUpload);
app.use(cors());

// app.use(express.static("public"));
// app.set("view engine", "ejs");

app.use(express.json());

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));

app.use("/auth", UserRoute);

mongoose.connect(`${process.env.MONGODB_URI}`, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
});
mongoose.set("useCreateIndex", true);

let port = process.env.PORT;
if (port == null || port == "") {
  port = 5000;
}

app.listen(port, function () {
  console.log("server running on port 5000");
});
