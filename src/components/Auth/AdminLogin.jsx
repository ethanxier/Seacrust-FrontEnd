import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Input from "../bar/Input";
import SubmitButton from "../button/SubmitButton";
import { Base } from '../../api/api';

const AdminLogin = () => {
  const nav = useNavigate()

  const [key, setkey] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleLogin = (event) => {
    event.preventDefault();

    Base.post('/admin/login', {
      key: key,
      password: password
    })
    .then(res => {
      console.log(res.data)
      // console.log("a", token)
      const token = res.data.data.tokenA
      window.localStorage.setItem('tokenA', token)
      nav('/admin/verif/store')
    })
    .catch(err => {
      console.log(err.response.data)
      setMessage(err.response.data.message)
    });
  };

  return (
    <form onSubmit={handleLogin}>
      <div className="flex shadow-2xl px-8 sm:px-11 py-8 sm:py-12 flex-col items-center gap-3 sm:gap-3 rounded-3xl bg-palleteBlue">
        <div className='flex items-end self-stretch text-xl sm:text-3xl font-semibold text-white'>Admin</div>
        <Input
            textLabel={"Key"}
            type="text"
            id="key"
            holder="Enter your key here"
            handleChange={(e) => {
              setkey(e.target.value);
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
          <div className="flex text-red-600 self-stretch h-2 sm:h-3 sm:my-1 text-xxs sm:text-xs">{message}</div>
        </div>
        <SubmitButton 
          name="LogIn"
        />
    </div>
    </form>
  );
}

export default AdminLogin;
