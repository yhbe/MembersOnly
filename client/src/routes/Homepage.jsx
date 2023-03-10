import React, { useState } from 'react';
import LoginModal from "../components/LoginModal";
import Navbar from '../components/Navbar';
import SignUpModal from '../components/SignUpModal';
import "./Homepage.css";

function Homepage({loggedInUser, setLoggedInUser, setToken, token}) {
  const [showSignUp, setShowSignUp] = useState(false)
  const [showLogin, setShowLogin] = useState(false)
  const port = process.env.PortDATA || "http://localhost:5000";

  const toggleSignUp = () => {
    setShowSignUp((prevState) => !prevState);
  }

  const toggleLogin = () => {
    setShowLogin(prevstate => !prevstate)
  }

  function createModal(){
    if (showSignUp){
      return  <SignUpModal port={port} toggleSignUp={toggleSignUp} />
      
    } else if (showLogin){
      return <LoginModal port={port} toggleLogin={toggleLogin} setLoggedInUser={setLoggedInUser} setToken={setToken}/>
    }
    else {
      return null
    }
  }

  return (
    <div className="homepage--main-container">
      <Navbar loggedInUser={loggedInUser} toggleSignUp={toggleSignUp} toggleLogin={toggleLogin} setLoggedInUser={setLoggedInUser} setToken={setToken} port={port}/>
      <div className="homepage--container">
        <div className="homepage-title">
          <h1 className="messages-title">Messages</h1>
        </div>
        <main className="posts-section">
          <div className="post--container">
            <div className="post">
              <div className="title">Title</div>
              <div className="message">Message:</div>
              <hr />
              <div className="post-secret-info">
                Note: Become a member to know who wrote this message and when.
              </div>
            </div>
          </div>
        </main>
        <div className="choose--page">
        <p>1</p>
        </div>
      </div>
      {createModal()}
    </div>
  );
}

export default Homepage