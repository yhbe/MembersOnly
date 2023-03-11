import React, { useState } from 'react';
import LoginModal from "../components/LoginModal";
import MessageModal from '../components/MessageModal';
import Navbar from '../components/Navbar';
import SignUpModal from '../components/SignUpModal';
import "./Homepage.css";

function Homepage({
  loggedInUser,
  setLoggedInUser,
  setToken,
  token,
  port,
  messageJSX,
  refreshPage,
}) {
  const [showSignUp, setShowSignUp] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showMessageModal, setShowMessageModal] = useState(false);

  const toggleSignUp = () => {
    setShowSignUp((prevState) => !prevState);
  };

  const toggleLogin = () => {
    setShowLogin((prevstate) => !prevstate);
  };

  function createModal() {
    if (showSignUp) {
      return <SignUpModal port={port} toggleSignUp={toggleSignUp} />;
    } else if (showLogin) {
      return (
        <LoginModal
          port={port}
          toggleLogin={toggleLogin}
          setLoggedInUser={setLoggedInUser}
          setToken={setToken}
        />
      );
    } else {
      return null;
    }
  }

  return (
    <div className="homepage--main-container">
      <Navbar
        loggedInUser={loggedInUser}
        toggleSignUp={toggleSignUp}
        toggleLogin={toggleLogin}
        setLoggedInUser={setLoggedInUser}
        setToken={setToken}
        port={port}
        setShowMessageModal={setShowMessageModal}
      />
      <div className="homepage--container">
        <div className="homepage-title">
          <h1 className="messages-title">Messages</h1>
        </div>
        <main className="posts-section">
          <div className="post--container">{messageJSX}</div>
        </main>
        <div className="choose--page">
          <p>1</p>
        </div>
      </div>
      {createModal()}
      {showMessageModal && (
        <MessageModal
          setShowMessageModal={setShowMessageModal}
          port={port}
          loggedInUser={loggedInUser}
          refreshPage={refreshPage}
        />
      )}
    </div>
  );
}

export default Homepage