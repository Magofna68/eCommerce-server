import React from 'react'
import './header.styles.scss';
import Navbar from './Navbar';

export default function Header() {
  return (
    <section className='header'>
      <section className='header-top'>
        <section className='header-top_logo'>
          <a href='/' className='header-logo'>LOGO</a>
        </section>
        <section className='header-top_navbar '>
          <Navbar />

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
  )
};
