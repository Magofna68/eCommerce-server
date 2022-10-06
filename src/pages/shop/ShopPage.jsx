import React, { Component } from 'react';
import './shopPage.styles.scss';
import MensHats from '../../components/shop/men/hats/Hats';
import WomensHats from '../../components/shop/women/hats/Hats';

class ShopPage extends Component {
  render() {
    return (
      <div className='shop-page'>
        <h2>
          Welcome to the Shop Page
        </h2>
        <MensHats />
        <WomensHats />
      </div>
    );
  }
}

export default ShopPage;