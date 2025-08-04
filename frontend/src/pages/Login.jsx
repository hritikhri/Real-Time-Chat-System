import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const [Form, setForm] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  useEffect(() => {
    function tokenhandling() {
      localStorage.clear();
    }
    tokenhandling();
  }, []);

  const Navigation = useNavigate();

  const handleEvent = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_BACKEND}/auth/login`,
        Form
      );
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", res.data.user); 
      Navigation("/");
    } catch (err) {
      console.log(err.response);
      setError(err?.response?.data);
    }
  };

  return (
    <div className="loginContainer">
      <div className="LargeLogo"></div>
      <form onSubmit={handleEvent}>
        <div className="innerForm">
          <h2>Login</h2>
          <div className="form_inputs">
            <input
              type="email"
              value={Form.email}
              onChange={(e) => setForm({ ...Form, email: e.target.value })}
              placeholder="Email Id"
              required
            />
            <input
              type="password"
              value={Form.password}
              onChange={(e) => setForm({ ...Form, password: e.target.value })}
              placeholder="Password"
              required
            />
            <div className="errorBox">
              <p>{error.message ? error.message : ""}</p>
            </div>
            <button type="submit">Login</button>
          </div>
          <p>
            Don't have an account? <Link to="/signup">Signup</Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
