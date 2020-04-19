import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useHistory } from "react-router";

export default (ChildComponent) => {
  const state = useSelector((state) => state);
  const history = useHistory();

  useEffect(() => {
    if (!state.auth) {
      history.push("/");
    }
  }, [history, state.auth]);

  function ComposedComponent() {
    return <ChildComponent />;
  }
  return ComposedComponent;
};
