import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import * as actions from "actions";

export default function CommentBox() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const history = useHistory();
  const [comment, setComment] = useState("");

  useEffect(() => {
    if (!state.auth) {
      history.push("/");
    }
  }, [history, state.auth]);

  return (
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
  );
}
