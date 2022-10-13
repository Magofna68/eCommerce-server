import './collectionItem.styles.scss';
import React from 'react';


const CollectionItem = ({id, name, price, img, img2}) => (
  <div className='collectionItem'>
    <div 
      className='image'
      style={{
        backgroundImage: `url(${img})`,
        onMouseOver: `url(${img2})`
      }}
    />
    <div className='collectionFooter'>
      <span className='name'>{ name }</span>
      <br/>
      <span className='price'>{ price }</span>
    </div>
  </div>
);

export default CollectionItem;