import React, { useState } from "react";
import { useDispatch } from "react-redux";
import * as actions from "actions";
import requireAuth from "../components/requireAuth";

export default function CommentBox() {
  const [comment, setComment] = useState("");
  const dispatch = useDispatch();
  return (
    <requireAuth>
      <div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            dispatch(actions.saveComment(comment));
            setComment("");
          }}
        >
          <h4>Add a comment</h4>
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
          <div>
            <button>Submit comment</button>
          </div>
        </form>
        <button
          className='fetch-comments'
          onClick={() => dispatch(actions.fetchComments())}
        >
          Fetch Comments
        </button>
      </div>
    </requireAuth>
  );
}
