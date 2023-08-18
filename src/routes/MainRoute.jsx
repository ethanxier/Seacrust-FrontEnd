import { Route, Routes } from 'react-router-dom';
import Login from '/src/pages/auth/Login';
import Register from '/src/pages/auth/Register';
import Home from '/src/pages/Home';
import {Auth, AuthA} from './Auth';
import Protected from './Protected';
import Biodata from '../pages/profile/Biodata';
import Pesanan from '../pages/profile/Pesanan';
import Riwayat from '../pages/profile/Riwayat';
import EditProfile from '../pages/profile/EditProfile';
import Product from '../pages/categories/Product';
import TokoSaya from '../pages/profile/TokoSaya';
import DaftarToko from '../pages/profile/DaftarToko';
import AdminLoginPage from '../pages/auth/AdminLoginPage';
import AdminArea from './AdminArea';
import AdminVerifStorePage from '../pages/admin/AdminVerifStorePage';
import TambahProduk from '../pages/profile/TambahProduk';
import AdminVerifProductPage from '../pages/admin/AdminVerifProductPage';

const MainRoute = () => {
    return (
      <div className="flex-grow">
        <Routes>
          <Route element={<AuthA />}>
            <Route path="/admin/login" element={<AdminLoginPage />} />
          </Route>
          <Route element={<AdminArea />}>
            <Route path="/admin/verif/store" element={<AdminVerifStorePage />} />
            <Route path="/admin/verif/product" element={<AdminVerifProductPage />} />
          </Route>
          <Route element={<Auth />}>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Route>
            <Route path="/" element={<Home />} />
          <Route element={<Protected />}>
            <Route path="/user/profile" element={<Biodata />} />
            <Route path="/user/profile/edit" element={<EditProfile />} />
            <Route path="/user/pesanan" element={<Pesanan />} />
            <Route path="/user/history" element={<Riwayat />} />
            <Route path="/user/store" element={<TokoSaya />} />
            <Route path="/user/store/regis" element={<DaftarToko />} />
            <Route path="/user/store/add-product" element={<TambahProduk />} />

            <Route path="/product/:category" element={<Product />} />
          </Route>
        </Routes>
      </div>
    );
  };
  
  export default MainRoute;