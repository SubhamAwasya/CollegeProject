import { useState } from "react";
import NavBar from "./components/NavBar";
import Form from "./components/Form";
import "./app.css";

function App() {
  return (
    <div className="mainDiv">
      <NavBar />
      <Form />
    </div>
  );
}

export default App;
