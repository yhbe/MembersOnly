import React from 'react';
import Navbar from '../components/Navbar';
import "./Homepage.css";

function Homepage({isLoggedIn}) {
  return (
    <div className="homepage--main-container">
      <Navbar isLoggedIn={isLoggedIn}/>
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
    </div>
  );
}

export default Homepage