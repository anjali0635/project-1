import React from 'react'
import './NewCollection.css'
import New_collection from '../assets/new_collections'
import Item from '../Items/Item'
const NewCollection = () => {
  return (
    <div className='New-collection'>
      <h1>NEW COLLECTION</h1>
      <hr />
      <div className="collections">
        {New_collection.map((item,i)=>{
            return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
        })}
      </div>
    </div>
  )
}

export default NewCollection
