import { useState } from 'react';
import logoSeacrust from '/src/assets/logo1.2.svg';
import logoGoogle from '/src/assets/google.svg';
import './Login.css';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log('Username:', username);
    console.log('Password:', password);
  };

  const handleLoginWithGoogle = () => {
    console.log('Login with Google');
  };

  return (
    <div className="wrapper">
      <img src={logoSeacrust} className="logo" alt="Logo Seacrust" />
      <div className="card">
        <div className='judul'>Log In</div>
        <div className="input-container">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="username"
            placeholder="Enter your email here"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="input-container">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password here"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="forgot-password">
          <a href="">Lupa Password?</a>
        </div>
        <button className="button" onClick={handleLogin}>
          LogIn
        </button>
        <div className="or-container">
          <div className="line"></div>
          <div className="or">or</div>
          <div className="line"></div>
        </div>
        <button className="with-google-button" onClick={handleLoginWithGoogle}>
          <img src={logoGoogle} alt="logo google" />
          Login with Google
        </button>
        <div className="question">Don&apos;t have an account? <a href="">Sign Up</a></div>
      </div>
    </div>
  );
}

export default Login;
