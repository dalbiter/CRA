import React from 'react';

const ShoppingCart = ({ items, username }) => {
    return (
        <div>
      <h1>{username}'s Shopping Cart</h1>
      <div>
        {items.map(i => (
          <div>
            <h4>{i.name}</h4>
            <img src={i.img} width="300" height="300"></img>
            <ul>
              <li>Price: {i.price}</li>
              <li>Quantity: {i.quantity}</li>
              <li>Subtotal: ${i.price * i.quantity}</li>
            </ul>
          </div>
        ))}
      </div>
    </div>
    );    
}

export default ShoppingCart;