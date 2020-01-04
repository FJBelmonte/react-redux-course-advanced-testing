import React, { useState } from "react";

export default function CommentBox() {
  const [comment, setComment] = useState("");
  return (
    <form
      onSubmit={e => {
        e.preventDefault();
        setComment("");
      }}>
      <h4>Add a comment</h4>
      <textarea value={comment} onChange={e => setComment(e.target.value)} />
      <div>
        <button>Submit comment</button>
      </div>
    </form>
  );
}
