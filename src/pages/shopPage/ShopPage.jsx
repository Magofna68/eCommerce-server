import React, { Component } from 'react';
import './shopPage.styles.scss';
import MensHats from '../../components/shop/gender/men/hats/MensHats';
import WomensHats from '../../components/shop/gender/women/hats/WomensHats';
import { Container, Row, Col } from 'react-bootstrap';

class ShopPage extends Component {
  constructor() {
    super();

    this.setState = {
      itemDetail: false,
    }

    // if (itemDetail === true) {

    // }
  }

  render() {
    return (
      <Container fluid className='shop-page'>
        <Row>
          <MensHats />
          <WomensHats />
        </Row>
      </Container>
    );
  }
}

export default ShopPage;