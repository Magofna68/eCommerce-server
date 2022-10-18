import React from 'react'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import AddShoppingCartSharpIcon from '@mui/icons-material/AddShoppingCartSharp';

import './fullCollectionItem.styles.scss';
import { ShoppingCartProvider } from '../../../context/ShoppingCartContext';

// export const FullCollectionItem = ({id, name, price, img, img2}) => (
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
export default function FullCollectionItem({id, name, price, img, img2}) {
const quantity = 1;

// const handleDecrementClick = (e) => (
//   quantity --
// )
return (
  <ShoppingCartProvider>
  <Card className='fullCollectionItem'>
    <Card.Img 
      className="fullCollectionImg"
      variant='top' 
      src={img} 
      style={{
        height: '75%',
        // minHeight: '70%'
      }}/>
    <Card.Body 
      style={{
        height: '15%',
        // background: 'orange',
        display: 'flex',
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '5% 2%',
        textAlign: 'center',
        flexDirection: 'column',
      }}
    >
      <Card.Title 
        style={{ 
          background: 'white',
          borderBottom: 'none'
        }}
      >
        {name}
      </Card.Title>
      <Card.Text
        style={{
          marginBottom: '3%',
          fontWeight: '600'
        }}
      >
        {price}
      </Card.Text>
    </Card.Body>
    <div className='w-100'>
      {quantity === 0  ? (
        <Button 
          variant="outline-primary" 
          className="w-100"
          style={{
           border: 'none',
          //  marginBottom: '1px',
          }}
        >+ Add to Cart
          {/* <AddShoppingCartSharpIcon 
            font="large"  
            variant="outline-primary"
            className="rounded-circle"
          /> */}
        </Button>
      ) : <>
        <div 
          className='d-flex align-items-center flex-column' 
          style={{gap: '.5rem'}}
        >
          <div 
            className='d-flex align-items-center justify-content-center'
            style={{gap: '.5rem'}}
          >
            <Button>-</Button>
            <div>
              <span className='fs-3'>{quantity}</span> in cart
            </div>
            <Button>+</Button>
          </div>
          <Button variant="danger" size="sm">Remove</Button>
        </div>
        </>}
    </div>
  </Card>
  </ShoppingCartProvider>
)};

// export default FullCollectionItem;
