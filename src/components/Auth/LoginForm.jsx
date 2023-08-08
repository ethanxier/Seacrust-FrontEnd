import { useState } from 'react';
import logoGoogle from '/src/assets/logo/google.svg';
import { Link } from 'react-router-dom';
import './LoginForm.css';
import { Base } from '../../api/api';

const LoginForm = () => {
  // const nav = useNavigate()

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleLogin = (event) => {
    event.preventDefault();

    Base.post('/user/login', {
      email: username,
      password: password
    })
    .then(res => {
      console.log(res.data)
      window.localStorage.setItem('token', res.data.data.token)
      // window.location.reload()
      // nav('/')
    })
    .catch(err => {
      console.log(err.response.data)
      setMessage(err.response.data.message)
    });
  };

  const handleLoginWithGoogle = () => {
    console.log('Login with Google');
  };

  return (
    <form onSubmit={handleLogin}>
      <div className="card">
        <div className='judul'>Log In</div>
        <div className="input-container">
            <label htmlFor="username">Email/Username:</label>
            <input
            type="text"
            id="username"
            placeholder="Enter your email here"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
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
          <div className="forgot-password">
              <a href="">Lupa Password?</a>
          </div>
          <div className="message">{message}</div>
        </div>
        <button className="button">
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
        <div className="question">Don&apos;t have an account? <Link to="/register">Sign Up</Link></div>
    </div>
    </form>
  );
}

export default LoginForm;
