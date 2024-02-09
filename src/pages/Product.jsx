import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { useParams } from 'react-router-dom'
import Breadcrum from '../Component/Breadcrums/Breadcrum';

const Product = () => {
  const {all_product}=useContext(ShopContext);
  const {productID} = useParams();
  const Product =all_product.find((e)=>e.id===Number(productID));
  return (
    <div>
      <Breadcrum product={Product}/>
    </div>
  )
}

export default Product
