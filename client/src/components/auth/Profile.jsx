import React, { useState } from "react";
import axios from "axios";
import { Redirect } from "react-router-dom";

// const result = axios
//   .get("http://localhost:5000/auth/userpost", {
//     headers: {
//       Authorization: `Bearer ${localStorage.getItem("token")}`,
//     },
//   })
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

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
  console.log(JSON.parse(jsonPayload));
  if (!localStorage.getItem("token")) {
    return <Redirect to="/login" />;
  }

  return (
    <div>
      <h1>Hello {user.fullname}</h1>
    </div>
  );
}

export default Profile;
