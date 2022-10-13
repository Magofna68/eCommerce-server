import React from 'react'
import SHOP_DATA from '../../../../data';
import CollectionPreview from '../../preview-collection/CollectionPreview';


export default function Sneakers({id, ...otherCollectionProps}) {
  const sneakerCollection = [];
    sneakerCollection.push(SHOP_DATA[0])
    // console.log(sneakerCollection);

  return (
    <div className='sneakerComponent'>
      <h1>Sneakers Component</h1>
      {
        sneakerCollection.map(({id, ...otherCollectionProps}) => (
          <CollectionPreview key={id} {...otherCollectionProps} />
        ))
      }
    </div>
  )
}
