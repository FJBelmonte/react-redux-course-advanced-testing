import React from "react";
import { useSelector } from "react-redux";

export default function CommentList(props) {
  const state = useSelector(state => state);

  function renderComments() {
    return state.comments.map((comment, index) => {
      return <li key={index}>{comment}</li>;
    });
  }
  return (
    <div>
      <ul>{renderComments()}</ul>
    </div>
  );
}
