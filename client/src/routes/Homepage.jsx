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
  const [currentPage, setCurrentPage] = useState(1);

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

  function handlePageChange(pageNum) {
    setCurrentPage(pageNum);
  }

  
  const messagesPerPage = 3;
  const startIndex = (currentPage - 1) * messagesPerPage;
  const endIndex = startIndex + messagesPerPage;

  let totalMessages;
  let totalPages;
  let displayedMessages
  if (messageJSX) {
    totalMessages = messageJSX.length;
    totalPages = Math.ceil(totalMessages / messagesPerPage);
    displayedMessages = messageJSX.slice(startIndex, endIndex);
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
          <div className="post--container">{displayedMessages}</div>
        {!messageJSX && <h1>Loading...</h1>}
        </main>
        <div className="choose--page">
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i}
              onClick={() => handlePageChange(i + 1)}
              className={
                currentPage === i + 1 ? "active page-number" : "page-number"
              }
            >
              {i + 1}
            </button>
          ))}
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