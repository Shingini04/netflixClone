import React from 'react';
import './App.css';
import netflixLogo from './assets/netflix.png';

function App() {
  return (
    <div className="home">
      <div className="net">
        <img src={netflixLogo} alt="Netflix Logo" />
      </div>
      <div className="login-box">
        <h1>Sign In</h1>
        <div className="email">
          <input type="text" placeholder="Email or mobile number" />
        </div>
        <div className="password">
          <input type="password" placeholder="Password" />
        </div>
        <button className="btn1">Sign In</button>
        <p className="or">OR</p>
        <button className="btn2">Use a sign-in code</button>
        <p className="pass">Forgot password?</p>
        <div className="rem">
          <input type="checkbox" />
          <p>Remember me</p>
        </div>
        <div className="new">
          <p>New to Netflix?<span> Sign up now.</span></p>
        </div>
        <div className="learn">
          <p>This page is protected by Google reCAPTCHA to </p>
          <p>ensure you're not a bot.<span> Learn more.</span></p>
        </div>
      </div>
    </div>
  );
}

export default App;

