import React, { Component } from 'react';
import './shopPage.styles.scss';
import MensHats from '../../components/shop/men/hats/Hats';
import WomensHats from '../../components/shop/women/hats/Hats';
import { Container, Row, Col } from 'react-bootstrap';

class ShopPage extends Component {
  render() {
    return (
      <Container fluid className='shop-page'>
        <Row>
          <Col>
            <h2>
              Welcome to the Shop Page
            </h2>
          </Col>
        </Row>
        <Row>
          <MensHats />
          <WomensHats />
        </Row>
      </Container>
    );
  }
}

export default ShopPage;