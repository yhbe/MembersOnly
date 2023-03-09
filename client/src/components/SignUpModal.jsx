import React from 'react';
import "./SignUpModal.css";

function SignUpModal({ toggleSignUp }) {
  return (
    <div className="modal">
      <form action="" className="form SignUpForm">
        <ul>
          <li>
            <label htmlFor="userName">Name</label>
            <input type="text" name="userName" id="userName" />
          </li>
          <li>
            <label htmlFor="userEmail">Email</label>
            <input type="text" name="userEmail" id="userEmail" />
          </li>
          <li>
            <label htmlFor="userPassword">Password</label>
            <input type="text" name="userPassword" id="userPassword" />
          </li>
          <li>
            <label htmlFor="userConfirmPassword">Confirm Password</label>
            <input
              type="text"
              name="userConfirmPassword"
              id="userConfirmPassword"
            />
          </li>
        </ul>
        <button type="submit" className="form-submit-button">
          Sign Up
        </button>
        <div onClick={() => toggleSignUp()} className="close-modal">
          <i class="fa-solid fa-xmark"></i>
        </div>
      </form>
    </div>
  );
}

export default SignUpModal