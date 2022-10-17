import React from 'react'
import './collectionPreview.styles.scss'
import CollectionItem from '../collection-item/CollectionItem';
import { useNavigate } from 'react-router';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';


// const navigate = useNavigate()

export const CollectionPreview = ({title, items, routeName}) => (
    // <div 
    <Container
      fluid
      className='collectionPreview'
    >
      <Row>
        <h1 
          className='title'
          >
          {title.toUpperCase()}
        </h1>
      </Row>
      <div 
        className='preview'
        style={{ 
          flexWrap: 'wrap',
          display: 'flex',
          alignContent: 'space-between',
          justifyContent: 'center',
        }}
      >
        {items
          // limit to only 4 items to display; gets rerendered with component
          .filter((item, index)=> index < 4)
          .map(({id, ...otherItemProps}) => (
            <CollectionItem key={id} {...otherItemProps} />
            ))}
      </div>
    {/* </div> */}
    </Container>
  )

  export default CollectionPreview;