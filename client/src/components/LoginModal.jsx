import React from 'react';

function LoginModal({ port, toggleLogin, setLoggedInUser, setToken }) {
  const handleFormSubmission = async (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new URLSearchParams(new FormData(form));

    const response = await fetch(`${port}/user/login`, {
      method: "POST",
      body: formData.toString(),
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });
    if (response.ok) {
      response.json().then((data) => {
        setLoggedInUser(data.user)
        setToken(data.token)
        toggleLogin()
      })
    } else {
      alert("This user does not exist!");
    }
  };

  return (
    <div className="modal">
      <form
        onSubmit={(e) => handleFormSubmission(e)}
        className="form"
        action=""
      >
        <ul>
          <li>
            <label htmlFor="userEmail">Email</label>
            <input type="email" name="userEmail" id="userEmail" autoComplete='user-email' required />
          </li>
          <li>
            <label htmlFor="userPassword">Password</label>
            <input
              type="password"
              name="userPassword"
              id="userPassword"
              aria-describedby="password-error"
              autoComplete='user-password'
              required
            />
          </li>
        </ul>
        <button type="submit" className="form-submit-button">
          Login
        </button>
        <div onClick={() => toggleLogin()} className="close-modal">
          <i className="fa-solid fa-xmark"></i>
        </div>
      </form>
    </div>
  );
}

export default LoginModal