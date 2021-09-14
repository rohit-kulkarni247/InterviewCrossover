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
  if (!localStorage.getItem("token")) {
    return <Redirect to="/login" />;
  }

  return <div></div>;
}

export default Profile;
