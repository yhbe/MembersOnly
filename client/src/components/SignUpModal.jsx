import React from 'react';
import "./SignUpModal.css";

function SignUpModal({ toggleSignUp }) {
  const port = process.env.PortDATA || "http://localhost:5000"

  const handleFormSubmission = async (event) => {
    event.preventDefault()
    const form = event.target
    const formData = new URLSearchParams(new FormData(form))
    const response = await fetch(`${port}/user/create`, {
      method: "POST",
      body: formData.toString(),
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
    })
    if (response.ok){
      alert("form submitted!")
      toggleSignUp()
    }
  }

  return (
    <div className="modal">
      <form
        onSubmit={(e) => handleFormSubmission(e)}
        className="form SignUpForm"
      >
        <ul>
          <li>
            <label htmlFor="userName">Name</label>
            <input type="text" name="userName" id="userName" required />
          </li>
          <li>
            <label htmlFor="userEmail">Email</label>
            <input type="text" name="userEmail" id="userEmail" required />
          </li>
          <li>
            <label htmlFor="userPassword">Password</label>
            <input type="password" name="userPassword" id="userPassword" required />
          </li>
          <li>
            <label htmlFor="userConfirmPassword">Confirm Password</label>
            <input
              type="password"
              name="userConfirmPassword"
              id="userConfirmPassword"
              required
            />
          </li>
        </ul>
        <button type="submit" className="form-submit-button">
          Sign Up
        </button>
        <div onClick={() => toggleSignUp()} className="close-modal">
          <i className="fa-solid fa-xmark"></i>
        </div>
      </form>
    </div>
  );
}

export default SignUpModal