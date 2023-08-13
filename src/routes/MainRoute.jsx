import { Route, Routes } from 'react-router-dom';
import Login from '/src/pages/auth/Login';
import Register from '/src/pages/auth/Register';
import Home from '/src/pages/Home';
import Auth from './Auth';
import Protected from './Protected';
import Biodata from '../pages/profile/Biodata';
import Pesanan from '../pages/profile/Pesanan';
import ProdukSaya from '../pages/profile/ProdukSaya';
import Riwayat from '../pages/profile/Riwayat';
import EditProfile from '../pages/profile/EditProfile';
import Product from '../pages/categories/Product';

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
            <Route path="/user/profile" element={<Biodata />} />
            <Route path="/user/profile/edit" element={<EditProfile />} />
            <Route path="/user/pesanan" element={<Pesanan />} />
            <Route path="/user/product" element={<ProdukSaya />} />
            <Route path="/user/history" element={<Riwayat />} />

            <Route path="/product/:category" element={<Product />} />
          </Route>
        </Routes>
      </div>
    );
  };
  
  export default MainRoute;