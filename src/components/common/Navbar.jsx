import React from 'react';
import './navbar.styles.scss';

export default function Navbar() {

  return (
    <section className="Navbar">
      <a href="/" className="navbar-item">Home</a>
      <a href="/about" className="navbar-item">About</a>
      <a href="/shop" className="navbar-item">Shop</a>
      <a href="/blog" className="navbar-item">Blog</a>
      <a href="/contact" className="navbar-item">Contact</a>
    </section>
  )
};
