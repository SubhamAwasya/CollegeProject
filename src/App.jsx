import { useState } from "react";
import NavBar from "./components/NavBar/NavBar";
import Form from "./components/Form/Form";
import Home from "./components/Home/Home";
import "./app.css";

function App() {
  const [isLogedIn, setIsLogedIn] = useState(false);
  const [userData, setUserData] = useState({});
  return (
    <div className="mainDiv">
      {isLogedIn && <NavBar data={userData} LogedIn={setIsLogedIn} />}
      {!isLogedIn ? (
        <Form LogedIn={setIsLogedIn} userData={setUserData} />
      ) : (
        <Home data={userData} />
      )}
    </div>
  );
}

export default App;
