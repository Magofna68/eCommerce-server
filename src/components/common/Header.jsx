import React from 'react'
import './header.styles.scss';
import { auth } from '../../firebase/Firebase.utils';

export const Header = ({currentUser}) => (
    <section className='header'>
      <section className='header-top'>
        <section className='header-top_logo'>
          <a href='/' className='header-logo'>LOGO</a>
        </section>
        <section className='header-top_navbar '>
          <section className="Navbar">
            <a href="/" className="navbar-item">Home</a>
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
          </section>
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
