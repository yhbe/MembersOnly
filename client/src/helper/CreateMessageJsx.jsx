import React from 'react';

function CreateMessageJsx(post, i) {
  return (
      <div key={i} className="post">
        <div className="title">{post.title}</div>
        <div className="message">{post.message}</div>
        <hr />
        <div className="post-secret-info">
          Note: Become a member to know who wrote this message and when.
        </div>
      </div>
  );
}

export default CreateMessageJsx