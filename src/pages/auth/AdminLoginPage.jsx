import AdminLogin from '../../components/auth/AdminLogin';
import logoSeacrust from '/src/assets/logo/logo1.2.svg';
import { Link } from 'react-router-dom';
// import './Login.css';

const AdminLoginPage = () => {
  return (
    <div className="flex flex-col sm:flex-row md:p-215 justify-center items-center gap-2 sm:gap-48 md:gap-200 bg-BGtoLeft h-screen w-screen pb-8 sm:pb-0">
      <div className="logo">
        <Link to="/"><img src={logoSeacrust} alt="Logo Seacrust"/></Link>
      </div>
      <AdminLogin />
    </div>
  );
}

export default AdminLoginPage;
