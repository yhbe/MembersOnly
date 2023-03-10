import React from 'react';
import "./Navbar.css";

function Navbar({toggleSignUp, toggleLogin, loggedInUser }) { 
  const handleSignUp = () => {
    toggleSignUp()
  };

  const createButtons = () => {
    return (
      <>
        <button onClick={() => toggleLogin()} className="nav-button">Login</button>
          <button onClick={() => handleSignUp()} className="nav-button">
            Sign Up
          </button>
      </>
    )
  }

  const loggedInJSX = () => {
    return (
      <>
      <button className="nav-button">
        Join Club
      </button>
      <button className="nav-button">
        New Message
      </button>
      <button className="account-button">
        Account
      </button>
      </>
    )
  }

  return (
    <nav>
      <div className="nav--container">
        <h1 className="nav-h1">
          <span className="nav-h1-span">Members</span>Only
        </h1>
        <div className="nav--right-side-container">
          {!loggedInUser.name && createButtons()}
          {loggedInUser.name && loggedInJSX()}
        </div>
      </div>
    </nav>
  );
}

export default Navbar