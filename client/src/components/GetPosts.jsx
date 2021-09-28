import React, { useState, useEffect } from "react";
import axios from "axios";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import { Link } from "react-router-dom";

function GetPosts() {
  const [data, dataHandler] = useState([]);
  const [companyId, setCompanyId] = useState(0);
  const [indivisual, setIndivisual] = useState([]);

  const handleChange = (event) => {
    setCompanyId(event.target.value);

    console.log(event.target.value);

    axios
      .post("http://localhost:5000/auth/companypost", {
        companyId: event.target.value,
      })
      .then((res) => {
        setIndivisual(res.data);
        console.log(indivisual);
      })
      .catch((err) => {
        console.log(err);
      });
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
          {indivisual.length == 0
            ? data.map((item) => {
                return (
                  <MenuItem key={item._id} value={item._id}>
                    {item.companyName}
                  </MenuItem>
                );
              })
            : indivisual.map((item) => {
                return (
                  <MenuItem key={item._id} value={item._id}>
                    {item.companyName}
                  </MenuItem>
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
