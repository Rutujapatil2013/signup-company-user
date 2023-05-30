import React, { useState } from "react";
import "./UpdateUser.css";

const UpdateUser = () => {
  const [firstName, setFirstName] = useState("Rutuja");
  const [lastName, setLastName] = useState("Waghole");
  const [email, setEmail] = useState("rutuja123@gmail.com");
  const [password, setPassword] = useState("Rutuja@123");
  const [role, setRole] = useState("Admin");
  const [deleted, setDeleted] = useState(false);

  const handleUpdateUser = () => {
    // Perform update user logic here
    console.log("Updating user...");
  };

  const handleRoleChange = (e) => {
    setRole(e.target.value);
  };

  return (
    <div className="update-user-container">
      <h2>Update User</h2>
      <form className="update-user-form">
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
        <button type="button" className="update-user-button" onClick={handleUpdateUser}>
          Update User
        </button>
      </form>
    </div>
  );
};

export default UpdateUser;
