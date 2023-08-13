import logoSeacrust from '/src/assets/logo/logo1.2.svg';
import RegisterForm from '../../components/Auth/RegisterForm';
import { Link } from 'react-router-dom';
// import './Login.css';

const Register = () => {
  return (
    <div className="flex flex-col sm:flex-row md:p-215 justify-center items-center gap-2 sm:gap-48 md:gap-200 bg-BGtoLeft h-screen w-screen pb-8 sm:pb-0">
      <div className="logo">
        <Link to="/"><img src={logoSeacrust} alt="Logo Seacrust"/></Link>
      </div>
      <RegisterForm />
    </div>
  );
}

export default Register;