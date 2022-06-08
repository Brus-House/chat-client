import React, { useState } from "react";
import "./Register.scss";
import Axios from  "axios";


function Register() {
    //declare the state
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const registerUser = () => {
        console.log(email + password);
        Axios.post("http://localhost:3001/registration",{email:email, password:password})
            .then(() => {
                alert("New user has been created!");
        });
    }

  return (
    <div>
        <div className="container">  
            <div id="contact">
                <h3>Welcome To Brus House Chat Bot</h3>
                <h4>Please Register</h4>
                <input placeholder="Your Email" type="email" tabIndex="1" 
                onChange={(event) => {setEmail(event.target.value)}} 
                required autoFocus/>
                <input placeholder="Your Password" type="text" tabIndex="2" 
                onChange={(event) => {setPassword(event.target.value)}}
                required/>
                <button name="submit" type="submit" onClick={registerUser}>Register</button>
            </div>
        </div>
    </div>
    )
}
export default Register;
