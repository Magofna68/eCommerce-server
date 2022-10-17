import React from 'react'
import Card from 'react-bootstrap/Card'
import './fullCollectionItem.styles.scss';

export const FullCollectionItem = ({id, name, price, img, img2}) => (
  // <div className='fullCollectionItem'>
  //   <div 
  //     className='fullCollectionImg'
  //     style={{
  //       backgroundImage: `url(${img})`,
  //       onHover: `url(${img2})`
  //     }}
  //   />
  //   <div className='fullCollectionFooter'>
  //     <span className='name'>{ name }</span>
  //     <br />
  //   <span className='price'>{ price }</span>
  //   </div>
  // </div>

  <Card 
    className='fullCollectionItem'
    style={{ 
      border: 'none',
      width: '16rem',
      // margin: '10px',
      height: '400px',
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
        padding: '3% 2%',
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

export default FullCollectionItem;
