import React, { useState } from "react";
import "./Login.css";
// --Icon Images --//
import Google from "../../images/googleicon2.png";
import Facebook from "../../images/Facebook-logo.png";

const Login = () => {
  const [newUser, setNewUser] = useState(false);
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
  });

  // --HandleUserInput--//
  const handleUserInput = (e) => {
    const { name, value } = e.target;

    //--Form Validation --//
    let isFieldValid = true;
    if (name === "email") {
      isFieldValid = /\S+@\S+\.\S+/.test(value);
    }
    if (name === "password") {
      isFieldValid = value.length > 6 && /\d/.test(value);
    }
    //--Sent to State (user state) --//
    if (isFieldValid) {
      setUser((preValue) => {
        return {
          ...preValue,
          [name]: value,
        };
      });
    }
  };
  return (
    <div className="login-container">
      {/* -Login form-- */}
      <div className="form-container">
        <form>
          {newUser ? (
            <h2 style={{ color: "grey" }}>Create an Account</h2>
          ) : (
            <h2 style={{ color: "grey" }}>Login</h2>
          )}
          <br />
          {newUser && (
            <div>
              <label htmlFor="name">Name</label>
              <br />
              <br />
              {/* --Name Field-- */}
              <input type="text" name="name" onBlur={handleUserInput} />
            </div>
          )}
          <br />
          <label htmlFor="email">Email</label>
          <br />
          <br />
          {/* --Email Field-- */}
          <input type="email" name="email" onBlur={handleUserInput} required />
          <br />
          <label htmlFor="password">Password</label>
          <br />
          <br />
          {/* --password field-- */}
          <input
            type="password"
            name="password"
            onBlur={handleUserInput}
            required
          />
          <br />
          <br />
          {/* --Submit Field-- */}
          <input
            type="submit"
            value={newUser ? "Register" : "Login"}
            style={{
              backgroundColor: "#ff5959",
              color: "white",
              padding: "0.6rem",
              fontSize: "1rem",
            }}
          />
          <br />
          <p style={{ marginTop: "1rem", textAlign: "center" }}>
            {newUser ? null : "Don't have an account ? "}
            <span
              style={{ color: "orange", cursor: "pointer" }}
              onClick={() => setNewUser(!newUser)}
            >
              {newUser ? null : "Create an Account"}
            </span>
          </p>
        </form>

        {/* --Other Login Option-- */}

        <div className="other-login">
          <p style={{ textAlign: "center", marginBottom: "1rem" }}>Or</p>
          <button>
            <img src={Google} alt="" />
          </button>
          <br />
          <br />
          <button>
            <img src={Facebook} alt="" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
