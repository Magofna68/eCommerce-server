import React from 'react'
import './collectionPreview.styles.scss'
import CollectionItem from '../collection-item/CollectionItem';
import { useNavigate } from 'react-router';

// const navigate = useNavigate()

export const CollectionPreview = ({title, items, routeName}) => (
    <div className='collectionPreview'>
      <h1 
        className='title'
      >
        {title.toUpperCase()}
      </h1>
      <div className='preview'>
        {items
          // limit to only 4 items to display; gets rerendered with component
          .filter((item, index)=> index < 4)
          .map(({id, ...otherItemProps}) => (
            <CollectionItem key={id} {...otherItemProps} />
        ))}
      </div>
    </div>
  )

  export default CollectionPreview;