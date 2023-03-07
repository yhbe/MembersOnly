import React from 'react';
import "./Navbar.css";

function Navbar() {
  return (
    <nav>
      <div className="nav--container">
        <h1 className="nav-h1">
          <span className="nav-h1-span">Members</span>Only
        </h1>
        <div className="nav--right-side-container">
          <button className="nav-button">Join Club</button>
          <button className="nav-button">New Message</button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar