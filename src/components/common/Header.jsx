import React, { Component } from 'react';

import './header.styles.scss';
import HomePage from '../../pages/home/HomePage';
import ShopPage from '../../pages/shop/ShopPage';
import AboutPage from '../../pages/about/AboutPage';

import SignInAndSignUpPage from '../../pages/Sign-in-sign-up';
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/esm/Nav';

import { Container } from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';


class Header extends React.Component {
  constructor() {
    super();
    this.state = {

      title: 'test',
      headerLinks: [
        {title: 'Home', path: '/'},
        {title: 'Sign In', path: '/signin'},
        {title: 'Shop', path: '/shop'},
        {title: 'About', path: '/about'},
      ],

      home: {
        title: 'Home',
        text: 'testing',
      },
      signIn: {
        title: 'Sign In',
        text: 'sign in'
      },
      shop: {
        title: 'Shop',
        text: 'lorum ipsum'
      }
    }

  }
  render() {
    return (
      <Router>
        <Container className='p-0' fluid={true}>
          <Navbar className='border-bottom' bg="transparent" expand="lg">
            <Navbar.Brand>
              <Link className='logo' to='/'>LOGO</Link>
            </Navbar.Brand>
            <NavbarToggle className='border-0' aria-controls="navbar-toggle" />
            <NavbarCollapse id="navbar-toggle">
              <Nav className='me-auto'>
              <Link className="nav-link" to="/">Home</Link>
              <Link className="nav-link" to="/signin">Sign In</Link>
              <Link className='nav-link' to="/shop">Shop</Link>
              <Link className='nav-link' to='/about'>About</Link>
              </Nav>
            </NavbarCollapse>
          </Navbar>

          <Routes>
            <Route path='/signin'  element={<SignInAndSignUpPage />}></Route>
            <Route path="/" exact element={<HomePage title={this.state.home.title}></HomePage>}></Route>
            <Route path='/shop' element={<ShopPage />}></Route>
            <Route path='/about' element={<AboutPage />}></Route>
          </Routes>
        </Container> 
      </Router>
    );
  }
}

export default Header;

// export const Header = ({currentUser}) => (
//     <section className='header'>
//       <section className='header-top'>
//         <section className='header-top_logo'>
//           <a href='/' className='header-logo'>LOGO</a>
//         </section>
//         <section className='header-top_navbar '>
//           <section className="Navbar">
//             <a href="#home" className="navbar-item">Home</a>
//             <a href="/about" className="navbar-item">About</a>
//             <a href="/shop" className="navbar-item">Shop</a>
//             <a href="/blog" className="navbar-item">Blog</a>
//             <a href="/contact" className="navbar-item">Contact</a>
//             {/* <Route path='/signin' exact element={[<Header currentUser={this.state.currentUser}/>, <SignInAndSignUpPage />]}></Route> */}

//               {
//                 currentUser ? 
//                 <div className="navbar-item" onClick={()=> auth.signOut(console.log("Goodbye"))}>Sign Out</div>
//                 :
//                 <a className="navbar-item" href='/signin'>Sign In</a>
//               }
//           </section>
//           <div className="header-top_separator"></div>
//         </section>
//       </section>
//       <section className='header-bottom '>
//         <section className='header-bottom_phone'>
//           503-269-2656
//         </section>
//         <section className='header-bottom_email'>
//           Magofna68@gmail.com
//         </section>
//       </section >
//     </section>
// );
