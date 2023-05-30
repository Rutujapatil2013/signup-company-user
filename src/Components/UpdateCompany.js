import React, { useState } from "react";
import "./UpdateCompany.css";

const UpdateCompany = () => {
  const [companyName, setCompanyName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [emailId, setEmailId] = useState("");
  const [address, setAddress] = useState("");

  const handleUpdateDetails = () => {
    // Perform update details logic here
    console.log("Updating details...");
  };

  return (
    <div className="update-details-container">
      <h2>Update Company Details</h2>
      <form className="update-details-form">
        <label>
          Company Name:
          <input
            type="text"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
          />
        </label>
        <br />
        <label>
          Phone Number:
          <input
            type="text"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </label>
        <br />
        <label>
          Email:
          <input
            type="text"
            value={emailId}
            onChange={(e) => setEmailId(e.target.value)}
          />
        </label>
        <br />
        <label>
          Address:
          <input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </label>
        <br />
        <button type="button" className="update-button" onClick={handleUpdateDetails}>
          Update Details
        </button>
      </form>
    </div>
  );
};

export default UpdateCompany;
