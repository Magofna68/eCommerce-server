import './navbar.styles.scss';

import SignInAndSignUpPage from '../../pages/Sign-in-sign-up';
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/esm/Nav';
import ShopPage from '../../pages/shop/ShopPage';
import AboutPage from '../../pages/about/AboutPage';
import HomePage from '../../pages/home/HomePage';

import { auth } from '../../firebase/Firebase.utils';

import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import { Container } from 'react-bootstrap';


import React from 'react'

export default function Navigationbar({currentUser}) {
  return (
        <Router>
          <Container className='p-0' fluid={true}>
            <Navbar className='border' bg="transparent" expand="sm">
             <Navbar.Brand href="#home">
               <Link className='logo' to='/'>LOGO</Link>
             </Navbar.Brand>
             <NavbarToggle className='border-0' aria-controls="navbar-toggle" />
             <NavbarCollapse className='justify-content-end navbar-toggle'>
               <Nav className='ml-auto'>
               {/* <Link className="nav-link" to="/">Sign In</Link> */}
               <Link className="nav-link" to="/home">Home</Link>
               <Link className='nav-link' to="/shop">Shop</Link>
               <Link className='nav-link' to='/about'>About</Link>
             {
               currentUser ? 
               <div>
                <Link className="nav-link" to='/' onClick={()=> auth.signOut(console.log("Goodbye"))}>Sign Out</Link>
                </div>
                :
                <Link className="nav-link" to='/signin'>Sign In</Link>
              }
              {
               currentUser ?
               <Navbar.Text><span className="navbar-text">Signed in as: <br/>{currentUser.displayName}</span></Navbar.Text>
               :
               <Navbar.Text><span className="navbar-text">Have an account?</span></Navbar.Text>
              }
              </Nav>
            </NavbarCollapse>
          </Navbar>

          <Routes>
          <Route path='/'>Sign In</Route>
            <Route path='/signin'  element={<SignInAndSignUpPage />}></Route>
            <Route path="/home" exact element={<HomePage></HomePage>}></Route>
            <Route path='/shop' element={<ShopPage />}></Route>
            <Route path='/about' element={<AboutPage />}></Route>
          </Routes>
        </Container> 
      </Router>
  )
}
