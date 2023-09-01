import { useState } from "react";
import Form from "./components/Form";
import NavBar from "./components/NavBar";
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
