import React from "react";
import Navbar from "./UI/Navbar";
import "./Landing.css";
import laptop from "../laptop.png";

function Landing() {
  return (
    <div>
      <Navbar />
      <img src={laptop} alt="laptop" className="laptop" />
    </div>
  );
}

export default Landing;
