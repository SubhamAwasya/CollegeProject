import React from "react";
import "./navbar.css";

function NavBar(prop) {
  return (
    <div className="navContainer">
      <h2>{prop.data[0].fname}</h2>
      <div className="menuLink">
        <a>HOME</a>
        <a>DATA</a>
        <a>TEXT</a>
        <a>DOCUMENTATION</a>
        <button
          className="btns"
          onClick={() => {
            prop.LogedIn(false);
          }}
        >
          Log Out
        </button>
      </div>
    </div>
  );
}

export default NavBar;
