import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Base } from '../../api/api';
import Input from "/src/components/auth/Input";
import SubmitButton from "../button/SubmitButton";
import GoogleButton from '../button/GoogleButton';

const LoginForm = () => {
  const nav = useNavigate()

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
      nav('/')
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
      <div className="flex shadow-2xl px-11 py-12 flex-col items-center gap-3 rounded-3xl bg-palleteBlue">
        <div className='flex items-end self-stretch text-3xl font-semibold text-white'>Log In</div>
        <Input
            textLabel={"Username/Email"}
            type="text"
            id="username"
            holder="Enter your email here"
            handleChange={(e) => {
              setUsername(e.target.value);
            }}
          />
        <Input
            textLabel="Password"
            type="password"
            id="password"
            holder="Enter your password here"
            handleChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        <div className="flex flex-col px-2  self-stretch">
          <Link to="" className="text-white text-sm font-inter font-medium leading-5 hover:text-palleteSubmitHover self-stretch text-right" >
            Forget password?
          </Link>
          <div className="flex text-red-600 self-stretch h-2">{message}</div>
        </div>
        <SubmitButton 
          name="LogIn"
        />
        <div className="flex items-center gap-2 self-stretch">
          <div className="flex-grow h-0.5 bg-white mx-2"></div> 
          <div className="text-white">Or</div> 
          <div className="flex-grow h-0.5 bg-white mx-2"></div> 
        </div>
        <GoogleButton 
          name="Log In"
          handler={handleLoginWithGoogle}
        />
        <div className="text-center text-white text-sm question">Don&apos;t have an account? <Link to="/register" className='text-palleteSubmit hover:text-palleteSubmitHover'>Sign Up</Link></div>
    </div>
    </form>
  );
}

export default LoginForm;
