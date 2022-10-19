import './navbar.styles.scss';

import SignInAndSignUpPage from '../../pages/signinPage/Sign-in-sign-up';
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/esm/Nav';
import ShopPage from '../../pages/shopPage/ShopPage';
import ContactPage from '../../pages/contactPage/ContactPage';
import HomePage from '../../pages/homePage/HomePage';
import Logo from '../../assets/crown.png'

import { auth } from '../../firebase/Firebase.utils';

import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import { Container, Button, Modal } from 'react-bootstrap';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

import React, { useState, useContext } from 'react';
import { ShoppingCartContext } from '../context/ShoppingCartContext';

export default function Navigationbar({currentUser}) {
  const cart = useContext(ShoppingCartContext);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const productCount = cart.items.reduce((sum, product) => sum + product.quantity, 0); 
  return (
        // <Router>
          <Container className='p-0' fluid={true}>
            <Navbar className='border' bg="transparent" expand="sm">
             <Navbar.Brand href="/" className='logo'>
                <img 
                  src={Logo} 
                  style={{
                    borderRadius: '5px'
                  }}
                  width='100%' 
                  alt='logo'>
                </img>
             </Navbar.Brand>
             <h2 className='w3-monospace'>Underground ROYALTY</h2>
             <NavbarToggle className='border-0' aria-controls="navbar-toggle" />
             <NavbarCollapse className='justify-content-end navbar-toggle'>
               <Nav className='ml-auto'>
               {/* <Link className="nav-link" to="/">Sign In</Link> */}
               <Link className="nav-link" to="/">Home</Link>
               <Link className='nav-link' to="/shop">Shop</Link>
               <Link className='nav-link' to='/contact'>contact</Link>
             {
               currentUser ? 
               <div>
                <Link className="nav-link" to='/' onClick={()=> auth.signOut(console.log("Goodbye"))}>Sign Out</Link>
                </div>
                :
                <Link className="nav-link" to='/login'>Sign In</Link>
              }
              {
                currentUser ?
               <Navbar.Text><span className="navbar-text">Signed in as: <br/>{currentUser.displayName}</span></Navbar.Text>
               :
               <Navbar.Text><span className="navbar-text">Have an account?</span></Navbar.Text>
              }
              <Button
                style={{
                  width: '3rem',
                  height: '3rem',
                  marginRight: '2%',
                  position: 'relative',
                }}
                variant="outline-primary"
                className="rounded-circle"
                onClick={handleShow}
              >
                <ShoppingCartOutlinedIcon fontSize="medium" />
                <div 
                  className='rounded-circle bg-danger d-flex 
                  justify-content-center align-items-center'
                  style={{
                    color: 'white',
                    bottom: 0,
                    right: 0,
                    transform: 'translate(35%, 35%)',
                    width: '1.5rem',
                    height: '1.5rem',
                    position: 'absolute',
                  }}
                >
                  {productCount}
                </div>
              </Button>
              </Nav>
            </NavbarCollapse>
          </Navbar>
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>Shopping Cart</Modal.Title>
            </Modal.Header>
              <Modal.Body>
                You have {productCount} items in your cart.
                {
                  productCount > 0 ?
                  <>
                  <p>Items in your cart:</p>
                  {cart.items.map((currentProduct, idx) => (
                    <h3>${currentProduct.price} || {currentProduct.name}: {currentProduct.quantity}</h3>
                    ))}
                    <h1>Total: {cart.getTotalCost()}</h1>
                  <Button variant="success" onClick={() => console.log(cart.items)}>Checkout</Button>
                  </>
                  :
                  <h1>There are no items in your cart</h1>
                }
              </Modal.Body>
              {/* <Button onClick={()=> console.log(cart.name)}>click me</Button> */}
          </Modal>

          <Routes>
          {/* <Route path='/'>Sign In</Route> */}
            <Route path='/login'  element={<SignInAndSignUpPage/>}></Route>
            <Route path="/" exact element={<HomePage />}></Route>
            <Route path='/shop' element={<ShopPage/>}></Route>
            {/* <Route path='/shop/jackets' component={<Jackets></Jackets>}></Route> */}
            <Route path='/contact' element={<ContactPage />}></Route>
          </Routes>
        </Container> 
      // </Router>
  )
}
