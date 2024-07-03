import React from 'react';
import './CartItem.css'

const CartItem = ({ item, img, price, quantity}) => (
    <div className="CartItem">
            <h4 className="CartItem-title">{item}</h4>
            <img className="CartItem-img" src={img} alt="" width="300" height="300"></img>
            <ul>
              <li style={{color: 'magenta', backgroundColor: 'yellow'}}>Price: {price}</li>
              <li>Quantity: {quantity}</li>
              <li>Subtotal: ${price * quantity}</li>
            </ul>
          </div>
);

export default CartItem;