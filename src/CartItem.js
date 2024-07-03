import React from 'react';

const CartItem = ({ item, img, price, quantity}) => (
    <div>
            <h4>{item}</h4>
            <img src={img} width="300" height="300"></img>
            <ul>
              <li>Price: {price}</li>
              <li>Quantity: {quantity}</li>
              <li>Subtotal: ${price * quantity}</li>
            </ul>
          </div>
);

export default CartItem;