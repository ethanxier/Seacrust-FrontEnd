import logoSeacrust from '/src/assets/logo/logo1.2.svg';
import LoginForm from '../../components/Auth/LoginForm';
import { Link } from 'react-router-dom';
// import './Login.css';

const Login = () => {
  return (
    <div className="flex md:p-215 justify-center items-center gap-48 md:gap-200 bg-authBG h-screen w-screen">
      <div className="logo">
        <Link to="/"><img src={logoSeacrust} alt="Logo Seacrust" className='w-80'/></Link>
      </div>
      <LoginForm />
    </div>
  );
}

export default Login;
