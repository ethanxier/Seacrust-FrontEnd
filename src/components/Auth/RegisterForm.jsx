import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Input from "../bar/Input"
import SubmitButton from "../button/SubmitButton"
import GoogleButton from '../button/GoogleButton'
import { Base } from '../../api/api'
// import { auth } from './firebase'

const RegisterForm = () => {
  const nav = useNavigate()

  const [fullName, setFullName] = useState('')
  const [userName, setUserName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')

  const handleRegister = (event) => {
    event.preventDefault()

    Base.post('/user/register', {
      fullname: fullName,
      username: userName,
      email: email,
      password: password
    })
    .then(res => {
      console.log(res.data)
      nav("/login")
    })
    .catch(err => {
      console.log(err.response.data)
      setMessage(err.response.data.message)
    })
  }

  const handleRegisterWithGoogle = () => {
    // const provider = new firebase.auth.GoogleAuthProvider();
    // auth.signInWithPopup(provider)
    // .then((result) => {
    //   // Handle login success
    //   console.log('User signed in:', result.user);
    // })
    // .catch((error) => {
    //   // Handle login error
    //   console.error('Error signing in with Google:', error);
    // });
  }

  return (
    <form onSubmit={handleRegister}>
      <div className="flex shadow-2xl px-8 sm:px-11 py-8 sm:py-12 flex-col items-center gap-3 sm:gap-3 rounded-3xl bg-palleteBlue">
        <div className='flex items-end self-stretch text-xl sm:text-3xl font-semibold text-white'>Sign Up</div>
        <Input
            textLabel={"Fullname"}
            type="text"
            id="fullname"
            holder="Enter your name here"
            handleChange={(e) => {
              setFullName(e.target.value)
            }}
          />
        <Input
            textLabel={"Username"}
            type="text"
            id="username"
            holder="Enter your username here"
            handleChange={(e) => {
              setUserName(e.target.value)
            }}
          />
        <Input
            textLabel={"Email"}
            type="email"
            id="email"
            holder="Enter your email here"
            handleChange={(e) => {
              setEmail(e.target.value)
            }}
          />
        <Input
            textLabel="Password"
            type="password"
            id="password"
            holder="Enter your password here"
            handleChange={(e) => {
              setPassword(e.target.value)
            }}
          />
        <div className="flex flex-col px-2  self-stretch">
          <div className="flex text-red-600 self-stretch h-2 text-xxs sm:text-xs">{message}</div>
        </div>
        <SubmitButton 
          name="SignUp"
        />
        <div className="flex items-center gap-2 self-stretch">
          <div className="flex-grow h-0.5 bg-white mx-2"></div> 
          <div className="text-xs sm:text-xs text-white">Or</div> 
          <div className="flex-grow h-0.5 bg-white mx-2"></div> 
        </div>
        <GoogleButton 
          name="Sign Up"
          handler={handleRegisterWithGoogle}
        />
        <div className="text-center text-white text-xs sm:text-sm question">have an account? <Link to="/login" className='text-palleteSubmit hover:text-palleteSubmitHover'>Log In</Link></div>
      </div>
    </form>
  )
}

export default RegisterForm