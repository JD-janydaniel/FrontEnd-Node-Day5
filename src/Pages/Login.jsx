import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [mesg, setMesg] = useState("");
    const navigate = useNavigate();
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      const payload = {email, password };
      await axios
        .post("http://localhost:5000/api/user/login-user", payload)
        .then((res) => setMesg(res.data.message))
        .catch((error) => {
          console.log(error);
          setMesg(error.data.message);
        });
        setTimeout(()=>{
          navigate("/home");
        },1000)
      
    };
    return (
        <div>
      <form onSubmit={handleSubmit}>
        <fieldset>
          <legend>
            <strong>User Login</strong>
          </legend>
          <p>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter your Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </p>
          <p>
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Enter your Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </p>
          <button type="submit">Login</button>
        </fieldset>
      </form>
      <h1>{mesg}</h1>
    </div>
    );
};

export default Login;