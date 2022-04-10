import React, { useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../../firebase-init";

const Shipment = () => {
  const [user] = useAuthState(auth);
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");
  const [CustomError, setCustomError] = useState("");
  const navigate = useNavigate();
  const handleEmailBlur = (event) => {
    setEmail(event.target.value);
  };
  const handleAddressBlur = (e) => {
    setAddress(e.target.value);
  };
  const handlePhoneBlur = (e) => {
    setPhone(e.target.value);
  };
  const handleNameBlur = (e) => {
    setName(e.target.value);
  };
  const handleCreateUser = (e) => {
      e.preventDefault();
      const shipping = { name, email, address, phone };
      console.log("all info about shipping ", shipping);
  };
  return (
    <div className="form-container">
      <div>
        <h1 className="form-title">Sipping Information</h1>
        <form onSubmit={handleCreateUser}>
          <div className="input-group">
            <label htmlFor="email"> Email</label>
            <input
              onBlur={handleEmailBlur}
              type="email"
              name="email"
              value={user?.email}
              readOnly
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="text">Name</label>
            <input onBlur={handleNameBlur} type="text" name="text" required />
          </div>
          <div className="input-group">
            <label htmlFor="address">Address</label>
            <input
              onBlur={handleAddressBlur}
              type="text"
              name="address"
              id=""
              required
            />
          </div>
          <div className="input-group">
            <label htmlFor="phone-number">Phone Number</label>
            <input
              onBlur={handlePhoneBlur}
              type="number"
              name="phone-number"
              id=""
              required
            />
            <p style={{ color: "red" }}>{CustomError}</p>
          </div>
          <input className="form-submit" type="submit" value="Add Shipping" />
        </form>
      </div>
    </div>
  );
};

export default Shipment;
