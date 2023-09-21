import React from "react";
import "./home.css";

function Home(prop) {
  return (
    <div className="home-container">
      <h1>
        Name:- {prop.data[0].fname} {prop.data[0].lname}
      </h1>
      <h2>Email:- {prop.data[0].email}</h2>
      <h2>Password:- {prop.data[0].password}</h2>
    </div>
  );
}

export default Home;
