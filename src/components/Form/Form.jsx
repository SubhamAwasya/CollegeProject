import React, { useState, useEffect, useSyncExternalStore } from "react";
import axios from "axios";
import "./form.css";

const url = "http://localhost:3000/users";

function Form(prop) {
  const [isRegisterd, setIsRefisterd] = useState(true);
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
      .get(url + `?email=${email}`)
      .then((res) => res.data)
      .then((res) => {
        if (res[0].email === email) {
          if (res[0].password == password) {
            prop.LogedIn(true);
            prop.userData(res);
            setValidationError("");
          } else {
            setValidationError("Password is incorrect");
          }
        }
      })
      .catch((error) => {
        setValidationError("You are not registered");
      });
  }
  //Sign in ////////////////////////////////////////////////////////////////////////////
  function SignUp(e) {
    e.preventDefault();
    if (password != cPassword) {
      setValidationError("Password does not match");
    } else {
      setValidationError("");
      //checking is uesr registerd in
      axios
        .get(url + `?email=${email}`)
        .then((res) => res.data)
        .then((res) => {
          if (res[0].email === email) {
            console.log(res[0].email);
            setValidationError("You already registered With this gmail");
          }
        })
        .catch((error) => {
          // if not registerd then registed to new user
          console.log(error);
          axios
            .post(url, signUpData)
            .then((res) => {
              setIsRefisterd(true);
            })
            .catch((error) => {
              console.log(error);
            });
        });
    }
  }

  //HTML ///////////////////////////////////////////////////////////////////////////////
  return (
    <>
      <form autoComplete="on" onSubmit={!isRegisterd ? SignUp : LogIn}>
        <h2>
          {!isRegisterd ? "Enter detail to register" : "Enter detail to login"}
        </h2>

        {!isRegisterd && (
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
        {!isRegisterd && (
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
          minLength="8"
          maxLength="12"
          type="password"
          required
        ></input>
        {!isRegisterd && (
          <input
            value={cPassword}
            onChange={(e) => setcPassword(e.target.value)}
            className="finput"
            name="confirmpassword"
            minLength="8"
            maxLength="12"
            placeholder="Confirm Password"
            id="confirm_password"
            type="password"
            required
          ></input>
        )}

        <button className="sbtn" type="submit">
          {!isRegisterd ? "SignUp" : "LogIn"}
        </button>
        <h4 className="validationError">{validationError}</h4>
        <a
          onClick={() => {
            {
              setIsRefisterd(!isRegisterd);
              setValidationError("");
            }
          }}
        >
          {!isRegisterd ? "Alredy a user log in" : "Register a new user"}
        </a>
      </form>
    </>
  );
}
export default Form;
