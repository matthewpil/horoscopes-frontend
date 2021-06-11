import * as React from "react";
import { Redirect } from "react-router-dom";

function AuthRequired({ WrappedComponent, ...props }) {
  const loggedIn = sessionStorage.getItem("loggedIn") === "true";
  console.log(loggedIn);
  if (loggedIn) {
    return <WrappedComponent {...props} />;
  }
  return <Redirect to={"/"} />;
}

export function authRequired(WrappedComponent, props) {
  return function () {
    return <AuthRequired WrappedComponent={WrappedComponent} {...props} />;
  };
}
