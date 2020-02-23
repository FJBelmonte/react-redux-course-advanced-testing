import React, { useState } from "react";
import { useDispatch } from "react-redux";
import * as actions from "actions";

export default function CommentBox() {
  const dispatch = useDispatch();

  const [comment, setComment] = useState("");
  return (
    <div>
      {" "}
      <form
        onSubmit={e => {
          e.preventDefault();
          dispatch(actions.saveComment(comment));
          setComment("");
        }}>
        <h4>Add a comment</h4>
        <textarea value={comment} onChange={e => setComment(e.target.value)} />
        <div>
          <button>Submit comment</button>
        </div>
      </form>
      <button onClick={dispatch(actions.fetchComments())}>
        Fetch Comments
      </button>
    </div>
  );
}
