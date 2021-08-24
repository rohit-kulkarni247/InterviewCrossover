import React from "react";

function Profile() {
  const inputHandler = function (e) {
    console.log(e.target.files[0]);
  };

  return (
    <div>
      <input type="file" onChange={inputHandler} />
    </div>
  );
}

export default Profile;
