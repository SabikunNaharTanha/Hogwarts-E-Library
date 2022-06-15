// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Header.css';
import logo from '../../Images/logo.jpg';

const Header = () => {
    return (
        <div>
            <nav className='Header-nav'>
                <div className='header-img'>
                    <h1>Hogwarts E-Library</h1>
                    <img src={logo} alt="" />
                </div>
                <div className=''>
                    <a href="\about">About us</a>
                    <a href="\shop">Shop</a>
                    <a href="\order">Order</a>
                    <a href="\login">Login</a>
                </div>

            </nav>
        </div>
    );
};

export default Header;