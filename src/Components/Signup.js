import React, { useState } from "react";
import "./Signup.css";

const Signup = () => {
  const [companyName, setCompanyName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [emailId, setEmailId] = useState("");
  const [address, setAddress] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [password, setPassword] = useState("");
  const [roleName, setRoleName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create an object with the form data
    const formData = {
      companyName,
      phoneNumber,
      emailId,
      address,
      users: [
        {
          firstName,
          lastName,
          email: userEmail,
          password,
          role: {
            roleName,
          },
        },
      ],
    };

    // Handle form submission
    console.log(formData);
    // Perform further actions like sending the data to an API endpoint
  };

  return (
    <div className="signup-page">
      <h1>Signup Page</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Company Name:
          <input
            type="text"
            className="input-field"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
          />
        </label>
        <br />
        <label>
          Phone Number:
          <input
            type="text"
            className="input-field"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="text"
            className="input-field"
            value={emailId}
            onChange={(e) => setEmailId(e.target.value)}
          />
        </label>
        <br />
        <label>
          Address:
          <input
            type="text"
            className="input-field"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </label>
        <br />
        <label>
          First Name:
          <input
            type="text"
            className="input-field"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </label>
        <br />
        <label>
          Last Name:
          <input
            type="text"
            className="input-field"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </label>
        <br />
        <label>
          User Email:
          <input
            type="text"
            className="input-field"
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            className="input-field"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <br />
        <label>
          Role Name:
          <input
            type="text"
            className="input-field"
            value={roleName}
            onChange={(e) => setRoleName(e.target.value)}
          />
        </label>
        <br />
        <button type="submit" className="signup-button">
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default Signup;
