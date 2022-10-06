import React, { Component } from 'react';
import './shopPage.styles.scss';
import MensHats from '../../components/shop/men/hats/Hats';
import WomensHats from '../../components/shop/women/hats/Hats';
import { Container, Row } from 'react-bootstrap';

class ShopPage extends Component {
  render() {
    return (
      <Container className='shop-page'>
        <h2>
          Welcome to the Shop Page
        </h2>
        <Row>
        <MensHats />
        <WomensHats />
        </Row>
      </Container>
    );
  }
}

export default ShopPage;