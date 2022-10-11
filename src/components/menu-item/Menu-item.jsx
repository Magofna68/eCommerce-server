import React from "react";
import './menu-item.scss';
// import {Link, Routes, Route} from 'react-router-dom';
// import {useNavigate} from 'react-router';
import { useNavigate } from 'react-router';

import Jackets from '../shop/jackets/Jackets';

 const MenuItem = ({ title, imageUrl, size, history, linkUrl }) => {
 const navigate = useNavigate();

 return (
  <div 
    className={`${size} menu-item`} 
    onClick={() => navigate('/shop/' + linkUrl)}>
    <div 
      className="background-image"
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    />
      <div className='content'>
        {/* <Link to='/shop/:'> */}
          <h1 className='title'>{title}</h1>
          <span className='subtitle'>SHOP NOW</span>
        {/* </Link> */}
      </div>
  </div>
 )
}
// withRouter gives us access to history -- powers up our MenuItem component
export default MenuItem;