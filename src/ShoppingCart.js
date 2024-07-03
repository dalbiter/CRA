import React from 'react';
import CartItem from './CartItem';
import './ShoppingCart.css';

const ShoppingCart = ({ items, username }) => {
    const total = items.reduce((acc, i) => {
        return acc + i.price * i.quantity
    }, 0)
    const rounded = Number.parseFloat(total).toFixed(2)  //note this solves the odd js decimal you get and ensure 2 decimals 
    return (
        <div className="ShoppingCart">
      { <h1 className="ShoppingCart-header">{username}'s Shopping Cart</h1> /* Note that we use 'className' instead of 'class' as class is a reserved term in js */}
      <div>
        {items.map(i => (
            <CartItem item={i.name} img={i.img} price={i.price} quantity={i.quantity} /> //note 'item = {i.name}' you can call the prop anything as long as it matches on the component
        ))}
      </div>
      <b className="ShoppingCart-total">Cart Total: ${rounded}</b>
    </div>
    );    
}

export default ShoppingCart;