import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function GetPosts() {
  const [data, dataHandler] = useState([]);

  useEffect(() => {
    getPosts();
  }, []);

  const getPosts = async () => {
    axios
      .get("http://localhost:5000/auth/getallposts")
      .then(function (response) {
        console.log(response);
        dataHandler(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <div>
      {data.map(function (post) {
        return (
          <div key={post._id}>
            <Link
              to={`/post/${post._id}`}
              style={{ textDecoration: "none", color: "black" }}
            >
              <h1>{post.companyName}</h1>
              <p>{post.dateOfUpload}</p>
            </Link>
            <hr></hr>
          </div>
        );
      })}

      {/* hi */}
    </div>
  );
}

export default GetPosts;
