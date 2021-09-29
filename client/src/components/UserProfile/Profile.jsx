import React, { useState } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import Card from "@material-ui/core/Card";
import "./Profile.css";
import login from "../../laptop.png";
import { CardContent } from "@material-ui/core";

function Profile() {
  const [experiences, setExperiences] = useState([]);
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [loginImage, setLoginImage] = useState(login);

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
  // console.log(user);

  React.useEffect(() => {
    axios
      .get("http://localhost:5000/auth/userpost", {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        setExperiences(res.data);
        // console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  if (!localStorage.getItem("token")) {
    return <Redirect to="/login" />;
  }
  const imageUpload = (e) => {
    console.log(e.target.files[0]);
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setLoginImage(reader.result);
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };
  return (
    <div style={{ margin: "5%" }}>
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <img
              src={loginImage}
              alt="profile"
              id="profile"
              style={{
                borderRadius: "50%",
                height: "320px",
                width: "320px",
                backgroundColor: "black",
              }}
              onClick={() => {
                console.log("clicked");
              }}
            />
            <input type="file" onChange={imageUpload} accept="image/*" />
            <h1>{user.fullname}</h1>
          </Grid>
          <Grid item xs={8}>
            <div style={{ display: "flex", margin: "2%" }}>
              <Button
                variant="contained"
                color="primary"
                style={{ marginLeft: "auto" }}
              >
                Add Experience
              </Button>
            </div>
            {experiences.map((experience) => {
              return (
                <div style={{ margin: "2%" }} key={experience._id}>
                  <Card
                    onClick={() => {
                      console.log("clicked " + experience._id);
                    }}
                  >
                    <CardContent>
                      <h3>{experience.companyName}</h3>
                      <h4>{experience.dateOfUpload.substring(0, 10)}</h4>
                    </CardContent>
                  </Card>
                </div>
              );
            })}
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default Profile;
