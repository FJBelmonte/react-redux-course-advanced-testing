import React from "react";
import { Route, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import CommentBox from "components/CommentBox";
import CommentList from "components/CommentList";

export default function App() {
  const state = useSelector((state) => state);
  function renderButton() {
    if (state.auth) {
      return <button>Sign out</button>;
    } else {
      return <button>Sign in</button>;
    }
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
