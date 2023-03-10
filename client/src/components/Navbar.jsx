import React, { useState } from 'react';
import Confetti from "react-confetti";
import "./Navbar.css";

function Navbar({toggleSignUp, toggleLogin, loggedInUser, setLoggedInUser, setToken, port }) { 
  const [userDropDown, setUserDropDown] = useState(false)
  const [showConfetti, setShowConfetti] = useState(false);
  
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

  const joinClub = async () => {
    const user = {...loggedInUser, clubMember: true};
    console.log(user)
    try {
      const response = await fetch(`${port}/user/JoinClub`, {
        method: "POST",
        body: JSON.stringify(user),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.ok){
        const data = await response.json();
        setLoggedInUser({...data.user})
        setShowConfetti(true)
        setTimeout(() => {
          setShowConfetti(false)
        }, 2250)
      }
    } catch(error){ 
      console.error(error);
    }
  }

  const loggedInJSX = () => {
    return (
      <>
        {!loggedInUser.isMember && <button onClick={() => joinClub()} className="nav-button">Join Club</button>}
        <button className="nav-button">New Message</button>
        <div className="account-container">
        <button onClick={() => setUserDropDown(prevState => !prevState)} className="account-button">
          Account
          <i className="fa-solid fa-caret-down"></i>
        </button>
        {userDropDown && createUserJSX()}
        </div>
      </>
    );
  }

  const createUserJSX = () => {
    return (
      <div className="dropdown-menu">
        <p className="gray-text slight-margin-bottom">Signed in as</p>
        <p className="bold-text">{loggedInUser.name}</p>
        <p className="gray-text bold-text slight-margin-bottom">
          {loggedInUser.email}
        </p>
        <hr className="slight-margin-bottom" />
        <p className="gray-text slight-margin-bottom ">Membership Status</p>
        <p className="bold-text slight-margin-bottom">Not A Member</p>
        <hr className="slight-margin-bottom" />
        <button onClick={() => {
          setUserDropDown((prevState) => !prevState);
          setLoggedInUser({});
          setToken(undefined);
        }} className="account-dropdown-button">Log Out</button>
      </div>
    );
  }

  return (
    <nav>
      {showConfetti && <Confetti />}
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