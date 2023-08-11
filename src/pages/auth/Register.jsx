import logoSeacrust from '/src/assets/logo/logo1.2.svg';
import RegisterForm from '../../components/Auth/RegisterForm';
import { Link } from 'react-router-dom';
// import './Login.css';

const Register = () => {
  return (
    <div className="flex md:p-215 justify-center items-center gap-48 md:gap-200 bg-authBG h-screen w-screen">
      <div className="logo">
        <Link to="/"><img src={logoSeacrust} alt="Logo Seacrust" className='w-80'/></Link>
      </div>
      <RegisterForm />
    </div>
  );
}

export default Register;