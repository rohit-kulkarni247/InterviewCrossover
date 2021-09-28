import React, { useState, useEffect } from "react";
import axios from "axios";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";

function GetPosts() {
  const [data, dataHandler] = useState([]);
  const [age, setAge] = React.useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
    console.log(age);
  };

  useEffect(() => {
    getPosts();
  }, []);

  const getPosts = async () => {
    axios
      .get("http://localhost:5000/auth/getallposts")
      .then(function (response) {
        // console.log(response);
        dataHandler(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <div>
      <FormControl variant="standard" style={{ display: "flex", width: "30%" }}>
        <InputLabel
          id="demo-simple-select-label"
          style={{ marginLeft: "auto" }}
        >
          Select Company
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={age}
          label="Age"
          onChange={handleChange}
        >
          {data.map((item) => {
            return (
              <MenuItem value={item.companyName}>{item.companyName}</MenuItem>
            );
          })}
          {/* <MenuItem value={10}>Ten</MenuItem>
          <MenuItem value={20}>Twenty</MenuItem>
          <MenuItem value={30}>Thirty</MenuItem> */}
        </Select>
      </FormControl>
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
