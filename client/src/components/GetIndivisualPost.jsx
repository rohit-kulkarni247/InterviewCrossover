import React, { useState, useEffect } from "react";
import axios from "axios";

function GetIndivisualPost({ match }) {
  const [data, dataHandler] = useState({});

  useEffect(() => {
    getPost();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getPost = async () => {
    const companyId = match.params.id;
    await axios
      .post("http://localhost:5000/auth/companypost", { companyId })
      .then((res) => {
        dataHandler(res.data[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <h1>{data.companyName}</h1>
      <p>{data.content}</p>
    </div>
  );
}

export default GetIndivisualPost;
