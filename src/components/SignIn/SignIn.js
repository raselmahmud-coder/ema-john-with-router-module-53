import React from "react";
import { Link } from "react-router-dom";
import "./SignIn.css";
const SignIn = () => {
  return (
    <div className="form-container">
      <div>
        <h1 className="form-title">Sign In</h1>
        <form>
          <div className="input-group">
            <label htmlFor="email"> Email</label>
            <input type="email" name="email" required />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="" required />
          </div>
          <input className="form-submit" type="submit" value="Sign In" />
        </form>
        <p>
          New to Ema-John?{" "}
          <Link className="form-link" to={"/sign-up"}>
            Create an Account{" "}
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignIn;
