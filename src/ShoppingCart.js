import React from 'react';
import CartItem from './CartItem';

const ShoppingCart = ({ items, username }) => {
    const total = items.reduce((acc, i) => {
        return acc + i.price * i.quantity
    }, 0)
    const rounded = Number.parseFloat(total).toFixed(2)  //note this solves the odd js decimal you get and ensure 2 decimals 
    return (
        <div>
      { <h1 className="cart-header">{username}'s Shopping Cart</h1> /* Note that we use 'className' instead of 'class' as class is a reserved term in js */}
      <div>
        {items.map(i => (
            <CartItem item={i.name} img={i.img} price={i.price} quantity={i.quantity} /> //note 'item = {i.name}' you can call the prop anything as long as it matches on the component
        ))}
      </div>
      <b>Cart Total: ${rounded}</b>
    </div>
    );    
}

export default ShoppingCart;