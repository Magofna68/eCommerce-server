import React, { Component } from 'react';
import CarouselComponent from '../utility/carousel/Carousel';
import './home.styles.scss';
import { mensHats } from '../../data';

class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.setState = {
      background: 'black'
    }
  }

  render() {
    return (
      <div id="home">
        <h2>Shop Now and Save!</h2>
        <CarouselComponent dataSet={mensHats}/>
      
    {/* <Carousel>
      <Carousel.Item interval={2000}>
        <img 
          className='d-block w-100'
          src={mensHats.img}
          alt={mensHats.alt}
        />
        <Carousel.Caption>
          <h3>{mensHats.title}</h3>
          <p>{mensHats.text}</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item interval={1000}>
        <img 
          className='d-block w-100'
          src={mensHats.img}
          alt={mensHats.alt}
        />
        <Carousel.Caption>
          <h3>{mensHats.title}</h3>
          <p>{mensHats.text}</p>
        </Carousel.Caption>
      </Carousel.Item>

      <Carousel.Item interval={2000}>
        <img 
          className='d-block w-100'
          src={mensHats.img}
          alt={mensHats.alt}
        />
        <Carousel.Caption>
          <h3>{mensHats.title}</h3>
          <p>{mensHats.text}</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel> */}
      </div>
    );
  }
}

export default HomePage;