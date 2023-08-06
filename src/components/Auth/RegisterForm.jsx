import { useState } from 'react';
import logoGoogle from '/src/assets/logo/google.svg';
import { Link } from 'react-router-dom';
import './LoginForm.css';

const RegisterForm = () => {
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
        <div className="question">have an account? <Link to="/login">Log In</Link></div>
      </div>
  );
}

export default RegisterForm;