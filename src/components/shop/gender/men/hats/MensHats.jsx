import React from 'react'
import { mensHats } from '../../../../../data';
import { Card, Container, Row } from 'react-bootstrap';
import './mensHats.styles.scss';

export default function MensHats() {
  return (
    <Container fluid className='mens-container'>
      <Row>
      <h2>Featured</h2>
      </Row>
      <div className='mens-hat-container'>
      {mensHats.map((item) => (
        <Card 
          class='img-responsive'
          // styles={{
          //   width: '300px'
          // }}
        >
          <Card.Img
            variant='top'
            src={item.img}
            alt={item.alt}
          />
          <Card.Body>
            <Card.Title>{item.title}</Card.Title>
            <Card.Subtitle className='mb-2 text-muted'>{item.price}</Card.Subtitle>
            {/* <a href={d.link} rel="noreferrer" target="_blank"><Button vaiant="danger">View Project</Button></a>
                  <a href={d.link2} rel="noreferrer" target="_blank"><Button variant="success">View Code</Button></a> */}
          </Card.Body>
        </Card>
        )
      )}
      </div>
  </Container>
  )
}
