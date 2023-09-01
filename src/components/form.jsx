import React, { useState } from "react";
import "./css/form.css";
function Form() {
  const [isRegisterd, setIsRefisterd] = useState(false);

  return (
    <>
      <form>
        <h2>
          {isRegisterd ? "Enter detail to register" : "Enter detail to login"}
        </h2>
        {isRegisterd && (
          <input
            className="finput"
            name="fname"
            placeholder="First Name"
            type="text"
            required
          ></input>
        )}
        {isRegisterd && (
          <input
            className="finput"
            name="lname"
            placeholder="Last Name"
            type="text"
            required
          ></input>
        )}
        <input
          className="finput"
          name="email"
          placeholder="Email"
          type="email"
          required
        ></input>
        <input
          className="finput"
          name="password"
          placeholder="Password"
          type="password"
          required
        ></input>
        {isRegisterd && (
          <input
            className="finput"
            name="confirmpassword"
            placeholder="Confirm Password"
            type="password"
            required
          ></input>
        )}

        <button className="sbtn" type="submit">
          {isRegisterd ? "Sign up" : "Log in"}
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
