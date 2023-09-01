import React from "react";
import "./css/navbar.css";

function NavBar() {
  return (
    <div className="navContainer">
      <h2>NavBar</h2>
      <div className="menuLink">
        <a>HOME</a>
        <a>DATA</a>
        <a>TEXT</a>
        <a>DOCUMENTATION</a>
      </div>
    </div>
  );
}

export default NavBar;
