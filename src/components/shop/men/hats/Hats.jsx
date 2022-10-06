import React from 'react'
import { mensHats } from '../../../../data';
import { Card } from 'react-bootstrap';

export default function MensHats() {
  return (
    <div>
      {mensHats.map((item) => (
        <Card class='img-responsive'>
          <Card.Img
            variant='top'
            src={item.img}
            alt={item.alt}
          />
          <Card.Body>
            <Card.Title>{item.title}</Card.Title>
            <Card.Subtitle className='mb-2 text-muted'>{item.subtitle}</Card.Subtitle>
            {/* <a href={d.link} rel="noreferrer" target="_blank"><Button vaiant="danger">View Project</Button></a>
                  <a href={d.link2} rel="noreferrer" target="_blank"><Button variant="success">View Code</Button></a> */}
          </Card.Body>
        </Card>
        )
      )}
  </div>
  )
}
