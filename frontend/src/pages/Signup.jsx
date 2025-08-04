import React, { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

const Signup = () => {
  const [Form, setForm] = useState({
    Name: "",
    Email: "",
    Password: "",
  });
  const [Response, setResponse] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  async function handleEvent(e) {
    e.preventDefault(); 
        if(Form.Password.length<8||Form.Password.length>16){
      setError({message:"use minmum 8 and max 16 charater as password"});
      return;
    }
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_BACKEND}/auth/signup`,
        Form
      );
      setResponse(res.data);
      //localStorage.setItem("OTP",res.data.OTP);
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("user", res.data.user);
      console.log(res.data);
      navigate("/");
      //navigate("/signup/otp-manager");
    } catch (err) {
      console.log(err.response.data);
      setError(err?.response?.data);
    }
  }

  return (
    <div className="loginContainer">
      <div className="LargeLogo"></div>
      <form onSubmit={handleEvent}>
        <div className="innerForm">
          <h2>Signup</h2>
          <div className="form_inputs">
            <input
              type="text"
              value={Form.Name}
              onChange={(e) => setForm({ ...Form, Name: e.target.value })}
              placeholder="Name"
              required
            />
            <input
              type="email"
              value={Form.Email}
              onChange={(e) => setForm({ ...Form, Email: e.target.value })}
              placeholder="Email"
              required
            />
            <input
              type="password"
              value={Form.Password}
              onChange={(e) => setForm({ ...Form, Password: e.target.value })}
              placeholder="Password"
              required
            />
            <div className="errorBox">
              <p>{error.message ? error.message : ""}</p>
            </div>
            <button type="submit">Create Account</button>
          </div>
          <p>
            Alredy have account ? <Link to={"/login"}>Login</Link>{" "}
          </p>
        </div>
      </form>
    </div>
  );
};

export default Signup;
