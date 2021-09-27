import React, { useState } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import "./Profile.css";
import login from "../../laptop.png";

function Profile() {
  var token = localStorage.getItem("token");

  var base64Url = token.split(".")[1];
  var base64 = base64Url.replace(/-/g, "+").replace(/_/g, "/");
  var jsonPayload = decodeURIComponent(
    atob(base64)
      .split("")
      .map(function (c) {
        return "%" + ("00" + c.charCodeAt(0).toString(16)).slice(-2);
      })
      .join("")
  );
  let user = JSON.parse(jsonPayload);
  console.log(user);
  if (!localStorage.getItem("token")) {
    return <Redirect to="/login" />;
  }

  return (
    <div style={{ margin: "5%" }}>
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <img
              src={login}
              alt="profile"
              style={{
                borderRadius: "50%",
                height: "50%",
                backgroundColor: "black",
              }}
              onClick={() => {
                console.log("clicked");
              }}
            />
            <h1>{user.fullname}</h1>
          </Grid>
          <Grid item xs={8}>
            <div style={{ display: "flex" }}>
              <Button
                variant="contained"
                color="primary"
                style={{ marginLeft: "auto" }}
              >
                Add Experience
              </Button>
            </div>
            <h1>hello</h1>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Profile;
