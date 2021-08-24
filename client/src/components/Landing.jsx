import React from "react";
import { Link } from "react-router-dom";

function Landing() {
  return (
    <div>
      <Link to="/getallposts">
        <button>Get All Posts</button>
      </Link>
    </div>
  );
}

export default Landing;
