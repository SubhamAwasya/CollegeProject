import React, { useState, useEffect } from "react";
import axios from "axios";
import "./css/form.css";

function Form() {
  const [isRegisterd, setIsRefisterd] = useState(false);
  const [fName, setfName] = useState("");
  const [lName, setlName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cPassword, setcPassword] = useState("");

  //User data that is send to the server///////////////////////////////////////////////
  const logInData = {
    email: email,
    password: password,
  };
  const signUpData = {
    fname: fName,
    lname: lName,
    email: email,
    password: password,
    confirmP: cPassword,
  };
  //////////////////////////////////////////////////////////////////////////////

  async function LogIn(e) {
    e.preventDefault();
    await axios.post("http://localhost:3000/", logInData).then((res) => {
      console.log(res.status);
    });
  }
  //////////////////////////////////////////////////////////////////////////////

  function SignUp(e) {
    e.preventDefault();
    axios.post("http://localhost:3000/", signUpData).then((res) => {
      console.log(res.data);
    });
  }

  return (
    <>
      <form>
        <h2>
          {isRegisterd ? "Enter detail to register" : "Enter detail to login"}
        </h2>
        {isRegisterd && (
          <input
            value={fName}
            onChange={(e) => setfName(e.target.value)}
            className="finput"
            name="fname"
            placeholder="First Name"
            type="text"
            required
          ></input>
        )}
        {isRegisterd && (
          <input
            value={lName}
            onChange={(e) => setlName(e.target.value)}
            className="finput"
            name="lname"
            placeholder="Last Name"
            type="text"
            required
          ></input>
        )}
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="finput"
          name="email"
          placeholder="Email"
          type="email"
          required
        ></input>
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="finput"
          name="password"
          placeholder="Password"
          type="password"
          required
        ></input>
        {isRegisterd && (
          <input
            value={cPassword}
            onChange={(e) => setcPassword(e.target.value)}
            className="finput"
            name="confirmpassword"
            placeholder="Confirm Password"
            type="password"
            required
          ></input>
        )}
        <button
          className="sbtn"
          type="submit"
          onClick={isRegisterd ? SignUp : LogIn}
        >
          {isRegisterd ? "SignUp" : "LogIn"}
        </button>
        <a
          onClick={() => {
            {
              setIsRefisterd(!isRegisterd);
            }
          }}
        >
          {isRegisterd ? "Alredy a user log in" : "Register a new user"}
        </a>
      </form>
    </>
  );
}
export default Form;
