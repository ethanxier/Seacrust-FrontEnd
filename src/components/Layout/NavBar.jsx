// import React from "react";
import { useState } from 'react';
import logoSeacrust from '/src/assets/logo/logo-1.1.svg';
import ikon from '/src/assets/ikon/search-icon.svg'
import { Link } from 'react-router-dom';
import './Navbar.css'

const NavBar = () => {
    const [key, setKey] = useState('');

    const handleSearch = () => {
        console.log('Key:', key);
    };

    return (
        <div className="navbar">
            <div className='logoKiri'>
                <Link to="/"><img src={logoSeacrust} alt="logo seacrust" /></Link>
            </div>
            <div className="searchBar">
                <button className="searchButton" onClick={handleSearch}>
                <img src={ikon}/>
                </button>
                <input 
                    type="text"
                    id='key'
                    placeholder="search"
                    value={key}
                    onChange={(e) => setKey(e.target.value)}  />
            </div>
            <div className="auth">
                <Link to="/login">Log In  </Link>
                |
                <Link to="/register"> Sign Up</Link>
            </div>
        </div>
    )
}

export default NavBar