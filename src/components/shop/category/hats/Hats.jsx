import React from 'react'
import SHOP_DATA from '../../../../data'
import CollectionPreview from '../../preview-collection/CollectionPreview';

export default function Hats() {
  const hatCollection = [];
  hatCollection.push(SHOP_DATA[2]);
  console.log({hatCollection})

  return (
    <div>Hats Component test
      {
        hatCollection.map(({id, ...otherCollectionProps}) => (
          <CollectionPreview key={id} {...otherCollectionProps} />
        ))
      };
    </div>


  )
}
