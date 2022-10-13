import React from 'react'
import { Routes, Route } from 'react-router-dom';
import SHOP_DATA from '../../../../data';
import CollectionPreview from '../../preview-collection/CollectionPreview';

export default function Jackets({id, ...otherCollectionProps}) {
  const jacketCollection = [];
  jacketCollection.push(SHOP_DATA[1])
  return (
    <div>
      {
        jacketCollection.map(({id, ...otherCollectionProps}) => (
          <CollectionPreview key={id} {...otherCollectionProps} />
        ))
      }
    </div>
  )
}
