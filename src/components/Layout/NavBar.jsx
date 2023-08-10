import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BaseAPI } from '../../api/api';
import './Navbar.css';

import logoSeacrust from '/src/assets/logo/logo-1.1.svg';
import ikon from '/src/assets/ikon/search-icon.svg';

const NavBar = () => {
  const [fullName, setFullName] = useState('');
  const [profilePhoto, setProfilePhoto] = useState('https://i.pinimg.com/originals/e6/02/7d/e6027d483419c08d7b2f5c469a9ab745.jpg');
  const [searchKey, setSearchKey] = useState('');
  const token = window.localStorage.getItem('token');

  useEffect(() => {
    if (token) {
      getDataUser();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [token]);

  const getDataUser = async () => {
    // console.log(`Bearer ${token}`)
    await BaseAPI.get('navbar', {
        headers: { Authorization: `Bearer ${token}` },
      }).then((res) => {
        console.log(res.data)
        setFullName(res.data.data.fullname);
        // setProfilePhoto(res.data.data.profile_photo)
      }, (err) => {
        console.log(err.response.data)
        window.localStorage.setItem('token', '')
      });
  };

  const handleSearch = () => {
    console.log('Search Key:', searchKey);
  };

  return (
    <div className="navbar">
      <div className="logoKiri">
        <Link to="/" >
          <img src={logoSeacrust} alt="Logo Seacrust" />
        </Link>
      </div>
      <div className="searchBar">
        <button className="searchButton" onClick={handleSearch}>
          <img src={ikon} alt="Search Icon" />
        </button>
        <input
          type="text"
          id="key"
          placeholder="Search"
          value={searchKey}
          onChange={(e) => setSearchKey(e.target.value)}
        />
      </div>
      <div className="auth">
        {fullName ? (
          <>
            <Link to='/user/profile'>
              <div className='navbarName'>{fullName}</div>
              <div className="framePhoto">
                <img src={profilePhoto} alt="profile" />
              </div>
            </Link>
          </>
        ) : (
          <>
            <Link to="/login">Log In</Link> | <Link to="/register">Sign Up</Link>
          </>
        )}
      </div>
    </div>
  );
};

export default NavBar;
