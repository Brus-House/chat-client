import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Axios from "axios";
import "./Login.scss";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate("");
  const [message, setMessage] = useState("");
  
  const loginUser = () => {
    //console.log(email+password);
    Axios.post("http://localhost:3001/login", {email:email, password:password})
      .then((response) => {
        //console.log(response.data);
        if (response.data.message === "0") {
          navigate('/Profile');
        } else {
          setMessage(response.data.message)
        }
      });
  }

  return (
    <div>
        <div className="container">  
          <div id="contact">
            <h3>Welcome To Brus House Chat Tool</h3>
            <h4>Please Login To Chat</h4>
            <input placeholder="Your Email" type="email" tabIndex="1" 
            onChange={(event) => {setEmail(event.target.value)}}
            required autoFocus/>
            <input placeholder="Your Password" type="text" tabIndex="2" 
            onChange={(event) => {setPassword(event.target.value)}}
            required/>
            <button name="submit" type="submit" onClick={loginUser}>Login</button>
            {/* fetching message const here */}
            {message}
          </div>
        </div>
    </div>
  )
}
export default Login;
