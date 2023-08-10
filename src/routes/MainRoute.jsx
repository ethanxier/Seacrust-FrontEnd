import { Route, Routes } from 'react-router-dom';
import Login from '/src/pages/Login';
import Register from '/src/pages/Register';
import Home from '/src/pages/Home';
import Konsumen from '/src/pages/Konsumen';
import Tengkulak from '/src/pages/Tengkulak';
import Pembudidaya from '/src/pages/Pembudidaya';
import NelayanTangkap from '/src/pages/NelayanTangkap';
import Auth from './Auth';
import Protected from './Protected';

const MainRoute = () => {
    return (
      <div className="flex-grow">
        <Routes>
          <Route element={<Auth />}>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Route>
            <Route path="/" element={<Home />} />
          <Route element={<Protected />}>
          <Route path="/" element={<Home />} />
            <Route path="/konsumen" element={<Konsumen />} />
            <Route path="/tengkulak" element={<Tengkulak />} />
            <Route path="/pembudidaya" element={<Pembudidaya />} />
            <Route path="/nelayan-tangkap" element={<NelayanTangkap />} />
          </Route>
        </Routes>
      </div>
    );
  };
  
  export default MainRoute;