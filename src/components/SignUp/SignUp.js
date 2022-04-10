import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { auth } from "../../firebase-init";
const SignUp = () => {
  const [createUserWithEmailAndPassword, user, error] =
    useCreateUserWithEmailAndPassword(auth);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
    const [CustomError, setCustomError] = useState("");
    const navigate = useNavigate();
  const handleEmailBlur = (event) => {
    setEmail(event.target.value);
  };
  const handlePasswordBlur = (e) => {
    setPassword(e.target.value);
  };
  const handleConfirmPass = (e) => {
    setConfirmPassword(e.target.value);
    };
    if (user) {
        navigate('/shop');
    }
  const handleCreateUser = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setCustomError(`your password didn't match`);
      return;
    }
    if (password.length < 6) {
      setCustomError(`Password must be more then 6 character`);
      return;
    }
    createUserWithEmailAndPassword(email, password)
      .then(() => {
        console.log('this is user', user, error);
      })
  };
  return (
    <div className="form-container">
      <div>
        <h1 className="form-title">Sign Up</h1>
        <form onSubmit={handleCreateUser}>
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
          </div>
          <div className="input-group">
            <label htmlFor="confirm-password">Confirm Password</label>
            <input
              onBlur={handleConfirmPass}
              type="password"
              name="confirm-password"
              id=""
              required
            />
            <p style={{ color: "red" }}>{CustomError}</p>
          </div>
          <input className="form-submit" type="submit" value="Sign In" />
        </form>
        <p>
          Already have an account?{" "}
          <Link className="form-link" to={"/sign-in"}>
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
