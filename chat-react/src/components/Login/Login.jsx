import React from "react";
import "./Login.scss";

function Login() {
  return (
    <div>
        <div className="container">  
          <div id="contact">
            <h3>Welcome To Brus House Chat Bot</h3>
            <h4>Please Login To Chat</h4>
            <input placeholder="Your Email" type="email" tabIndex="1" required autoFocus/>
            <input placeholder="Your Password" type="text" tabIndex="2" required/>
            <button name="submit" type="submit">Login</button>
          </div>
        </div>
    </div>
  )
}
export default Login;
