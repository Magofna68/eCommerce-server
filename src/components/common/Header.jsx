import React from 'react';
import Navigationbar from '../navbar/Navbar.jsx'

import './header.styles.scss';
// import HomePage from '../../pages/home/HomePage';
// import ShopPage from '../../pages/shop/ShopPage';
// import AboutPage from '../../pages/about/AboutPage';
import { auth } from '../../firebase/Firebase.utils';

// import SignInAndSignUpPage from '../../pages/Sign-in-sign-up';
// import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';
// import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
// import Navbar from 'react-bootstrap/Navbar';
// import Nav from 'react-bootstrap/esm/Nav';

// import { Container } from 'react-bootstrap';
// import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';

export const Header = ({currentUser}) => (
    <section className='header'>
      <section className='header-top'>
        <section className='header-top_logo'>
          <a href='/' className='header-logo'>LOGO</a>
        </section>
        <section className='header-top_navbar '>
          <Navigationbar currentUser = {currentUser} />
            {/* <section className="Navbar">
              <a href="#home" className="navbar-item">Home</a>
              <a href="/about" className="navbar-item">About</a>
              <a href="/shop" className="navbar-item">Shop</a>
              <a href="/blog" className="navbar-item">Blog</a>
              <a href="/contact" className="navbar-item">Contact</a>
                {
                  currentUser ? 
                  <div className="navbar-item" onClick={()=> auth.signOut(console.log("Goodbye"))}>Sign Out</div>
                  :
                  <a className="navbar-item" href='/signin'>Sign In</a>
                }
            </section> */}
          <div className="header-top_separator"></div>
        </section>
      </section>
      <section className='header-bottom '>
        <section className='header-bottom_phone'>
          503-269-2656
        </section>
        <section className='header-bottom_email'>
          Magofna68@gmail.com
        </section>
      </section >
    </section>
);
