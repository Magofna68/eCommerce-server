import React from 'react'
import './collectionPreview.styles.scss'

export const CollectionPreview = ({title, items}) => (
    <div className='collection-preview'>
      <h1 className='title'>{title.toUpperCase()}</h1>
      <div className='preview'>
        {items
          // limit to only 4 items to display; gets rerendered with component
          .filter((item, index)=> index < 4)
          .map(item => (
            <div key={item.id}>{item.name}</div>
        ))}
      </div>
    </div>
  )

  export default CollectionPreview;