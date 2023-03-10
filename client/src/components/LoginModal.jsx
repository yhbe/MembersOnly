import React from 'react';

function LoginModal({toggleLogin}) {
  return (
    <div className="modal">
      <form className="form" action="">
        <ul>
          <li>
            <label htmlFor="userEmail">Email</label>
            <input type="email" name="userEmail" id="userEmail" required />
          </li>
          <li>
            <label htmlFor="userPassword">Password</label>
            <input
              type="password"
              name="userPassword"
              id="userPassword"
              aria-describedby="password-error"
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