import React, { useState } from "react";
import axios from "axios";
import "./login.css"; // import the CSS file

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loginAsAdmin, setLoginAsAdmin] = useState(false); // state for login as admin

  const data = {
    email: email,
    password: password,
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:8200/users/login", data);
      // const user = response.data;
      setError("Login Successful");
    } catch (err) {
      const message = err.response.data.message;
      // const message = "hello";
      setError(message);
    }
  };

  const handleForgotPassword = () => {
    // Add your forgot password logic here
    setError("Forgot Password functionality coming soon!");
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login</h2>
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
          <label htmlFor="loginAsAdmin">Login as Admin:</label>
          <input
            type="checkbox"
            id="loginAsAdmin"
            checked={loginAsAdmin}
            onChange={(e) => setLoginAsAdmin(e.target.checked)}
          />
        </div>
        {error && <div className="error-message">{error}</div>}
        <button type="submit">Login</button>
        <button type="button" onClick={handleForgotPassword}>Forgot Password</button>
      </form>
    </div>
  );
};

export default Login;









// import React, { useState } from "react";
// import axios from "axios";
// import "./login.css"; // import the CSS file

// const Login = () => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [error, setError] = useState("");
//   const data = {
//     email: email,
//     password: password,
//   };


//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const response = await axios.post("http://localhost:8200/users/login", data);
//       // const user = response.data;
//       setError("Login Successful");
//     } catch (err) {
//       const message = err.response.data.message;
//       // const message = "hello";
//       setError(message);
//     }
//   };

//   return (
//     <div className="login-container">
//       <form className="login-form" onSubmit={handleSubmit}>
//         <h2>Login</h2>
//         <div className="form-group">
//           <label htmlFor="email">Email:</label>
//           <input
//             type="email"
//             id="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//         </div>
//         <div className="form-group">
//           <label htmlFor="password">Password:</label>
//           <input
//             type="password"
//             id="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//         </div>
//         {error && <div className="error-message">{error}</div>}
//         <button type="submit">Login</button>
//       </form>
//     </div>
//   );
// };

// export default Login;




