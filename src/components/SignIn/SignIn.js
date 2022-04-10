import React, { useState } from "react";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../firebase-init";
import "./SignIn.css";
const SignIn = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const handleEmailBlur = (e) => {
    setEmail(e.target.value);
  };
  const handlePasswordBlur = (e) => {
    setPassword(e.target.value);
  };
  const handleUserSignIn = (e) => {
      e.preventDefault();
      signInWithEmailAndPassword(email, password)
    };
    const navigate = useNavigate();
    if (user) {
        navigate('/shop')
    }
  return (
    <div className="form-container">
      <div>
        <h1 className="form-title">Sign In</h1>
        <form onSubmit={handleUserSignIn}>
          <div className="input-group">
            <label htmlFor="email"> Email</label>
            <input
              onBlur={handleEmailBlur}
              type="email"
              name="email"
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              onBlur={handlePasswordBlur}
              type="password"
              name="password"
              id=""
              required
            />
            <p style={{ color: "red" }}>{error?.message}</p>
            {loading ? <p style={{ color: "red" }}>Loading...</p> : ""}
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
