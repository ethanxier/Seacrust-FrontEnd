import logoSeacrust from '/src/assets/logo/logo1.2.svg';
import RegisterForm from '../components/Auth/RegisterForm';
import { Link } from 'react-router-dom';
import './Login.css';

const Register = () => {
  return (
    <div className="wrapperLog">
      <Link to="/"><img src={logoSeacrust} className="logo" alt="Logo Seacrust" /></Link>
      <RegisterForm />
    </div>
  );
}

export default Register;