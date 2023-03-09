import React, { useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import SignUpModal from '../components/SignUpModal';
import "./Homepage.css";

function Homepage({isLoggedIn}) {
  const [showSignUp, setShowSignUp] = useState(false)

  const toggleSignUp = () => {
    setShowSignUp((prevState) => !prevState);
  }

  function createModal(){
    if (showSignUp){
      return  <SignUpModal toggleSignUp={toggleSignUp} />
    } else {
      return null
    }
  }

  return (
    <div className="homepage--main-container">
      <Navbar isLoggedIn={isLoggedIn} toggleSignUp={toggleSignUp}/>
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