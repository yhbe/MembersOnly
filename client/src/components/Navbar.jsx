import React from 'react';
import "./Navbar.css";

function Navbar({isLoggedIn}) {

  const handleSignUp = () => {
    console.log("singing up")
  }

  return (
    <nav>
      <div className="nav--container">
        <h1 className="nav-h1">
          <span className="nav-h1-span">Members</span>Only
        </h1>
        <div className="nav--right-side-container">
          <button className="nav-button">Login</button>
          <button onClick={() => handleSignUp()} className="nav-button">
            Sign Up
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar