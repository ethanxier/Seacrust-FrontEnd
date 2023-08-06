import logoSeacrust from '/src/assets/logo/logo1.2.svg';
import LoginForm from '../components/Auth/LoginForm';
import { Link } from 'react-router-dom';
import './Login.css';

const Login = () => {
  return (
    <div className="wrapperLog">
      <div className="logo">
        <Link to="/"><img src={logoSeacrust} alt="Logo Seacrust" /></Link>
      </div>
      <LoginForm />
    </div>
  );
}

export default Login;
