import React from 'react';

function MessageModal({
  setShowMessageModal,
  port,
  loggedInUser,
  refreshPage,
}) {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new URLSearchParams(new FormData(form));
    formData.append("user", JSON.stringify(loggedInUser));
    const response = await fetch(`${port}/message/post`, {
      method: "POST",
      body: formData.toString(),
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    });
    if (response.ok) {
      const data = response.json();
      console.log(data);
      refreshPage()
      setShowMessageModal(false);
    }
  };

  return (
    <div className="modal">
      <form onSubmit={(e) => handleSubmit(e)} className="form">
        <ul>
          <li>
            <label htmlFor="title">Title</label>
            <br />
            <input type="text" name="title" id="title" required />
          </li>
          <li>
            <label htmlFor="message">Message</label>
            <br />
            <textarea
              name="message"
              id="message"
              cols="34"
              rows="10"
              required
            ></textarea>
          </li>
        </ul>
        <button type="submit" className="form-submit-button">
          Submit
        </button>
        <div onClick={() => setShowMessageModal(false)} className="close-modal">
          <i className="fa-solid fa-xmark"></i>
        </div>
      </form>
    </div>
  );
}

export default MessageModal