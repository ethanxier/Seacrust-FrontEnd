import { useState } from 'react';
import logoSeacrust from '/src/assets/logo1.2.svg';
import logoGoogle from '/src/assets/google.svg';
import './Login.css';

function Register() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    console.log('Username:', username);
    console.log('Password:', password);
  };

  const handleRegisterWithGoogle = () => {
    console.log('SignUp with Google');
  };

  return (
    <div className="wrapper">
      <img src={logoSeacrust} className="logo" alt="Logo Seacrust" />
      <div className="card">
        <div className='judul'>Sign Up</div>
        <div className="input-container">
          <label htmlFor="fullname">Fullname:</label>
          <input
            type="text"
            id="fullname"
            placeholder="Enter your fullname here"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
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
        <button className="button" onClick={handleRegister}>
          SignUp
        </button>
        <div className="or-container">
          <div className="line"></div>
          <div className="or">or</div>
          <div className="line"></div>
        </div>
        <button className="with-google-button" onClick={handleRegisterWithGoogle}>
          <img src={logoGoogle} alt="logo google" />
          Sign Up with Google
        </button>
        <div className="question">have an account? <a href="">Log In</a></div>
      </div>
    </div>
  );
}

export default Register;