import React from 'react';

function MemberMessageJsx(post, i) {
  return (
    <div key={i} className="post">
      <div className="title">{post.title}</div>
      <p>by <strong>{post.user.name}</strong></p>
      <div className="message">{post.message}</div>
    </div>
  );
}

export default MemberMessageJsx