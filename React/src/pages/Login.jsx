import React from "react";
import { signInWithPopup } from "firebase/auth";
import { Auth, Provider } from "../firebase-config";
import { useNavigate } from "react-router-dom";

const Login = ({setIsAuth}) => {
  const Navigate = useNavigate();
  const SignInWithGoogle = () => {
    signInWithPopup(Auth,Provider).then(() => {
        localStorage.setItem("isAuth",true);
        setIsAuth(true);
        Navigate("/");
    })
  }
  return (
    <div>
      <p>Please login with your Google account to continue.</p>
      <button className="login-with-google-btn" onClick={SignInWithGoogle}>Login with your Google account</button>
    </div>
  );
}

export default Login;
