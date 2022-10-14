import React from 'react'
import './fullCollectionItem.styles.scss';

export const FullCollectionItem = ({id, name, price, img, img2}) => (
  <div className='fullCollectionItem'>
    <div 
      className='fullCollectionImg'
      style={{
        backgroundImage: `url(${img})`,
        onHover: `url(${img2})`
      }}
    />
    <div className='fullCollectionFooter'>
      <span className='name'>{ name }</span>
      <br />
    <span className='price'>{ price }</span>
    </div>
  </div>
);

export default FullCollectionItem;
