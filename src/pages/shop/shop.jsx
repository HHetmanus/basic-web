import React from 'react'
import { PRODUCTS } from '../products/products';
import { Product } from './product';
import './product.css';

export const Shop = () => {
  return (
    <div className='shop'>
      <div className='shopTitle'>
        <h1>GuitarHub Shop</h1>
      </div>
      <div className='products'> 
      {" "}
      {PRODUCTS.map((product) => (
        <Product data={product}/>
      ))} 
      </div>
    </div>
  )
}


