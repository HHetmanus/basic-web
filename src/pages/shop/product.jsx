import React from 'react'
import './product.css';

export const Product = (props) => {
  const {id, productName, price, productImage} = props.data;
    return (
    <div className='productImage'>
        <img src= {productImage} width='200px'/>
        <div className='productName'>
            <p><b>{productName}</b></p>
            <p><b>{price}£</b></p>
        </div>
        
    </div>
    );
}
