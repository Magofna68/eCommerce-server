import './collectionItem.styles.scss';
import React from 'react';
import Card from 'react-bootstrap/Card'


const CollectionItem = ({id, name, price, img, img2}) => (
  // <div className='collectionItem'>
  //   <div 
  //     className='image'
  //     style={{
  //       backgroundImage: `url(${img})`,
  //       onMouseOver: `url(${img2})`
  //     }}
  //   />
  //   <div className='collectionFooter'>
  //     <span className='name'>{ name }</span>
  //     <br/>
  //     <span className='price'>{ price }</span>
  //   </div>
  // </div>

  <Card 
    className='collectionItem'
    style={{ 
      display: 'flex',
      border: 'none',
      width: '16rem',
      margin: ' 10px',
      height: '375px',
    }}>
    <Card.Img 
      variant='top' 
      src={img} 
      style={{
        height: '75%'
      }}/>
    <Card.Body 
      style={{
        height: '25%',
        // background: 'orange',
        display: 'flex',
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '1% 2%',
        textAlign: 'center',
        flexDirection: 'column',
      }}
    >
      <Card.Header 
        style={{ 
          background: 'white',
          borderBottom: 'none'
        }}
      >
        {name}
      </Card.Header>
      <Card.Text
        style={{
          marginBottom: '3%',
          fontWeight: '600'
        }}
      >
        {price}
      </Card.Text>
    </Card.Body>
  </Card>
);

export default CollectionItem;