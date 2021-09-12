import React from "react";
import "./Login.css";
// --Icon Images --//
import Google from "../../images/googleicon2.png";
import Facebook from "../../images/Facebook-logo.png";

const Login = () => {
  return (
    <div className="login-container">
      {/* -Login form-- */}
      <div className="form-container">
        <form>
          <h2>Login</h2>
          <br />
          <label htmlFor="">Name</label>
          <br />
          <br />
          <input type="text" name="name" value="" />
          <br />
          <br />
          <label htmlFor="email">Email</label>
          <br />
          <br />
          <input type="email" name="email" value="" />
          <br />
          <label htmlFor="password">Password</label>
          <br />
          <br />
          <input type="text" name="password" value="" />
          <br />
          <br />
          <input
            type="submit"
            value="Login"
            style={{
              backgroundColor: "#ff5959",
              color: "white",
              padding: "0.6rem",
              fontSize: "1rem",
            }}
          />{" "}
          <br />
          <p style={{ marginTop: "1rem", textAlign: "center" }}>
            Don't have an account ?{" "}
            <span style={{ color: "orange" }}>Create an Account</span>
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
