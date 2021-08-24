import React, { useState, useEffect } from "react";
import axios from "axios";

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
      {data.map(function (post, index) {
        return (
          <div key={index}>
            <h1>{post.companyName}</h1>
            <p>{post.dateOfUpload}</p>
            <hr></hr>
          </div>
        );
      })}
    </div>
  );
}

export default GetPosts;
