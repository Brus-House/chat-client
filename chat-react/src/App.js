import "./App.css"
import React from "react";
import Home from "./components/Login/Login";
import Register from "./components/Register/Register";
import Error from "./components/Error";
import Profile from "./components/Profile/Profile";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/Register">Register</Link></li>
      </ul>

        <Routes>
          <Route exact path='/' element={<Home />}/>
          <Route exact path='/Register' element={<Register />}/>
          <Route exact path='/Profile' element={<Profile />}/>
          <Route exact path='*' element={<Error />}/>
        </Routes>
      </Router>

      
    </div>
  );
}

export default App;
