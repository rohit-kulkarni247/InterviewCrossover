import React, { useState, useEffect } from "react";
import axios from "axios";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";

function GetPosts() {
  const [data, dataHandler] = useState([]);
  const [companyId, setCompanyId] = useState("");
  const [indivisual, setIndivisual] = useState([]);

  const handleChange = async (event) => {
    const getcompanyName = await axios
      .post("http://localhost:5000/auth/companypost", {
        companyId: event.target.value,
      })
      .then((res) => {
        return res.data;
        // console.log(res.data);
      });
    setCompanyId(event.target.value);
    setIndivisual(getcompanyName);
    // console.log(companyId, indivisual);
  };

  useEffect(() => {
    getPosts();
  }, []);

  const getPosts = async () => {
    await axios
      .get("http://localhost:5000/auth/getallposts")
      .then(function (response) {
        // console.log(response);
        dataHandler(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  const allExperiences = () => {
    setIndivisual(data);
  };
  // console.log(companyId, indivisual);
  return (
    <div>
      <FormControl
        margin="none"
        variant="standard"
        style={{ display: "flex", width: "30%" }}
      >
        <InputLabel
          id="demo-simple-select-label"
          style={{ marginLeft: "auto" }}
        >
          Select Company
        </InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={companyId}
          label="companyId"
          onChange={handleChange}
        >
          {data.map((item) => {
            return (
              <MenuItem key={item._id} value={item._id}>
                {item.companyName}
              </MenuItem>
            );
          })}
        </Select>
        <Button onClick={allExperiences}>Show all Experiences</Button>
      </FormControl>
      {indivisual.length === 0
        ? data.map(function (post) {
            return (
              <div key={post._id}>
                <Link
                  to={`/post/${post._id}`}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <h1>{post.companyName}</h1>
                  <p>{post.dateOfUpload.substring(0, 10)}</p>
                </Link>
                <hr></hr>
              </div>
            );
          })
        : indivisual.map(function (post) {
            return (
              <div key={post._id}>
                <Link
                  to={`/post/${post._id}`}
                  style={{ textDecoration: "none", color: "black" }}
                >
                  <h1>{post.companyName}</h1>
                  <p>{post.dateOfUpload.substring(0, 10)}</p>
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
