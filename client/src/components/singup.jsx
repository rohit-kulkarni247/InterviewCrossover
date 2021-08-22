import React, { useState } from "react";
import axios from "axios";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //   const [password2, setPassword2] = useState("");

  const changeName = (e) => {
    setName(e.target.value);
  };
  const changeEmail = (e) => {
    setEmail(e.target.value);
  };
  const changePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name === "" || email === "" || password === "") {
      alert("Please fill in all fields");
    } else {
      alert("Success!");
      const user = { fullname: name, email: email, password: password };
      axios
        .post("http://localhost:5000/auth/signup", user)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        });
      console.log(name, email, password);
    }
  };
  return (
    <div>
      <form>
        <h1>Signup</h1>
        <label htmlFor="Name">FullName</label>
        <input type="text" onChange={changeName} />
        <br />
        <label htmlFor="Email">Email</label>
        <input type="email" onChange={changeEmail} />
        <br />
        <label htmlFor="Password">Password</label>
        <input type="password" onChange={changePassword} />
        <br />
        <button type="submit" onClick={handleSubmit}>
          Signup
        </button>
      </form>
    </div>
  );
}

export default Signup;
