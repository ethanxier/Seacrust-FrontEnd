import { useState } from 'react';
import logoGoogle from '/src/assets/logo/google.svg';
import { Link, useNavigate } from 'react-router-dom';
import './LoginForm.css';
import { Base } from '../../api/api';

const RegisterForm = () => {
  const nav = useNavigate()

  const [fullName, setFullName] = useState('');
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleRegister = (event) => {
    event.preventDefault();

    Base.post('/user/register', {
      fullname: fullName,
      username: userName,
      email: email,
      password: password
    })
    .then(res => {
      console.log(res.data)
      nav("/login");
    })
    .catch(err => {
      console.log(err.response.data)
      setMessage(err.response.data.message)
    });
  };

  const handleRegisterWithGoogle = () => {
    console.log('SignUp with Google');
  };

  return (
    <form onSubmit={handleRegister}>
      <div className="card">
        <div className='judul'>Sign Up</div>
        <div className="input-container">
          <label htmlFor="fullName">Fullname:</label>
          <input
            type="text"
            id="fullName"
            placeholder="Enter your fullname here"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
          />
        </div>
        <div className="input-container">
          <label htmlFor="userName">Username:</label>
          <input
            type="text"
            id="userName"
            placeholder="Enter your username here"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            required
          />
        </div>
        <div className="input-container">
          <label htmlFor="email">Email:</label>
          <input
            type="text"
            id="email"
            placeholder="Enter your email here"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
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
            required
          />
        </div>
        <div className="aboveSubmit">
          <div className="message">{message}</div>
        </div>
        <button className="button">
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
    </form>
  );
}

export default RegisterForm;