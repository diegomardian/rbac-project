import React from 'react';
import {FacebookLoginButton, GoogleLoginButton} from "react-social-login-buttons";

function SingleSignOnButtons(props) {
  return (
    <div className="single-sign-on-buttons">
      <GoogleLoginButton/>
      <FacebookLoginButton/>
    </div>
  );
}

export default SingleSignOnButtons;