import React from "react";
import { Route, Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import * as actions from "../actions";
import CommentBox from "components/CommentBox";
import CommentList from "components/CommentList";

export default function App() {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  function renderButton() {
    return (
      <button
        onClick={() => {
          dispatch(actions.changeAuth(!state.auth));
        }}
      >
        {state.auth ? "Sign out" : "Sign in"}
      </button>
    );
  }
  function renderHeader() {
    return (
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/post'>Post a comment</Link>
        </li>
        <li>{renderButton()}</li>
      </ul>
    );
  }

  return (
    <div>
      {renderHeader()}
      <Route path='/post' component={CommentBox} />
      <Route path='/' exact component={CommentList} />
    </div>
  );
}
