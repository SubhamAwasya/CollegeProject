import React, { useState, useEffect, useSyncExternalStore } from "react";
import axios from "axios";
import "./css/form.css";

function Form() {
  const [isRegisterd, setIsRefisterd] = useState(false);
  const [fName, setfName] = useState("");
  const [lName, setlName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [cPassword, setcPassword] = useState("");
  const [validationError, setValidationError] = useState("");

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
  };
  //Log in ////////////////////////////////////////////////////////////////////////////

  function LogIn(e) {
    e.preventDefault();
    axios
      .post("http://localhost:3000/login", logInData)
      .then((res) => {
        console.log(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
    alert("Successfully Loged in");
  }
  //Sign in ////////////////////////////////////////////////////////////////////////////

  function SignUp(e) {
    e.preventDefault();
    if (password != cPassword) {
      setValidationError("Password does not match");
    } else {
      setValidationError("");
      axios
        .post("http://localhost:3000/signup", signUpData)
        .then((res) => {
          console.log(res.data);
        })
        .catch((error) => {
          console.log(error);
        });
      alert("Successfully registerd");
    }
  }
  //HTML ///////////////////////////////////////////////////////////////////////////////

  return (
    <>
      <form onSubmit={isRegisterd ? SignUp : LogIn}>
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
          id="password"
          minlength="8"
          maxlength="12"
          type="password"
          required
        ></input>
        {isRegisterd && (
          <input
            value={cPassword}
            onChange={(e) => setcPassword(e.target.value)}
            className="finput"
            name="confirmpassword"
            minlength="8"
            maxlength="12"
            placeholder="Confirm Password"
            id="confirm_password"
            type="password"
            required
          ></input>
        )}

        <button className="sbtn" type="submit">
          {isRegisterd ? "SignUp" : "LogIn"}
        </button>
        <h4>{validationError}</h4>
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
