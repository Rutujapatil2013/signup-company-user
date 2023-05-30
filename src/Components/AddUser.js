import React, { useState } from "react";
import "./AddUser.css";

const AddUser = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");
  const [deleted, setDeleted] = useState(false);

  const handleAddUser = () => {
    // Perform add user logic here
    console.log("Adding user...");
  };

  const handleRoleChange = (e) => {
    setRole(e.target.value);
  };

  return (
    <div className="add-user-container">
      <h2>Add User</h2>
      <form className="add-user-form">
        <div className="form-group">
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="role">Role:</label>
          <select id="role" value={role} onChange={handleRoleChange} required>
            <option value="">Select Role</option>
            <option value="Admin">Admin</option>
            <option value="User">User</option>
            {/* Add more options as needed */}
          </select>
        </div>
        <div className="form-group">
          <label htmlFor="deleted">Deleted:</label>
          <input
            type="checkbox"
            id="deleted"
            checked={deleted}
            onChange={(e) => setDeleted(e.target.checked)}
          />
        </div>
        <button type="button" className="add-user-button" onClick={handleAddUser}>
          Add User
        </button>
      </form>
    </div>
  );
};

export default AddUser;
