import React from "react";
import { auth, googleAuth } from "./Firebase-config";
import { signInWithPopup, signOut } from "firebase/auth";
import "./Google.css";

const Google = () => {
  const login = async () => {
    try {
      await signInWithPopup(auth, googleAuth);
    } catch (error) {
      console.log(error);
      return false;
    }
  };
  const logout = async () => {
    try {
      await signOut(auth);
      alert("Successfully Logout");
    } catch (error) {
      console.log(error);
      return false;
    }
  };
  return (
    <>
      <center>
        <h1 style={{ marginTop: "220px" }}>Sign in with Google in React</h1>
        <button
          className="btn1"
          onClick={() => login()}
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            paddingLeft: "5px",
            paddingRight: "11px",
            padding: "3px",
          }}
        >
          <img 
            width={25}
            src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png"
          />
          Sign in with Google
        </button>
        <button
          style={{ padding: "4px", paddingLeft: "5px", paddingRight: "5px" }}
          className="btn2"
          onClick={() => logout()}
        >
          Logout
        </button>
      </center>
    </>
  );
};

export default Google;
