import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Axios from "axios";
import "./Login.scss";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate("");
  const [loginStatus, setLoginStatus] = useState(false);
  
  const loginUser = () => {
    //console.log(email+password);
    Axios.post("http://localhost:3001/login", {
      email:email, 
      password:password
    }).then((response) => {
      console.log(response.data);
      if (!response.data.auth) {
        setLoginStatus(false);
      } else {
        //storing token into local storeage
        localStorage.setItem("token", "Bearer " + response.data.token);
        //localStorage.setItem("token", response.data.token);
        setLoginStatus(true);
        //navigate('/Profile');
      }
    });
  }

  const userAuthenticated = () => {
    Axios.get("http://localhost:3001/getUserInfo", {
      headers: {
        "x-access-token": localStorage.getItem("token"),
    }}).then((response) => {
      console.log(response);
      navigate('/Profile');
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

            {loginStatus && <button onClick={userAuthenticated}> Check if Authenticated </button>}
          </div>
        </div>
    </div>
  )
}
export default Login;
