import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import CreatePost from "./pages/CreatePost";
import Login from "./pages/Login";
import "./App.css";
import { useState } from "react";
import { signOut } from "firebase/auth";
import { Auth } from "./firebase-config";

const App = () => {
  const [isAuth, setIsAuth] = useState(false);
  const SignUserOut = () => {
    localStorage.clear();
    signOut(Auth);
    window.location.href="login";
  }
  return (
    <Router>
        <nav>
            <Link to="/">Home</Link>
            <Link to="/createpost">Post</Link>
            {!isAuth ? <Link to="/login">Login</Link> : <button onClick={SignUserOut}>Logout</button>}
        </nav>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/createpost" element={<CreatePost />} />
            <Route path="/login" element={<Login setIsAuth={setIsAuth} />} />
        </Routes>
    </Router>
  );
}

export default App;
