import { Button } from "@material-ui/core";
import React from "react";
import "./Login.css";
import { auth, provider } from "../firebase";
import { actionTypes } from "../reducer";
import { useStateValue } from "./StateProvider";

function Login() {
  const [state, dispatch] = useStateValue();

  const signIn = () => {
    auth.signInWithPopup(provider)
      .catch(error => alert(error.message))
  };

  return (
    <div className="login">
      <div className="login_logo">
        <img
          src="https://cdn.freebiesupply.com/logos/large/2x/facebook-logo-2019.png"
          alt=""
        />
        <img
          src="https://download.logo.wine/logo/Facebook/Facebook-Logo.wine.png"
          alt=""
        />
      </div>
      <Button type="submit" onClick={signIn}>
        Sign In
      </Button>
    </div>
  );
}

export default Login;
